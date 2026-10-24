"""Download licensed destination photographs and prepare WebP/mobile versions.

Requires Pillow locally. Attribution and source URLs are in the photo plan.
These generated assets are committed; deployment does not run this script.
"""
import argparse
import hashlib
import json
import tempfile
import urllib.request
from concurrent.futures import ThreadPoolExecutor
from io import BytesIO
from pathlib import Path

from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parents[1]
parser = argparse.ArgumentParser(description=__doc__)
parser.add_argument("--cache-dir", type=Path, default=Path(tempfile.gettempdir()) / "hotel-pradeep-varanasi")
args = parser.parse_args()
args.cache_dir.mkdir(parents=True, exist_ok=True)
plan = json.loads((ROOT / "scripts/varanasi-photo-plan.json").read_text())
target = ROOT / "public/images/varanasi"
target.mkdir(parents=True, exist_ok=True)


def atomic_save(image, path, quality):
    stream = BytesIO()
    image.save(stream, "WEBP", quality=quality, method=6)
    staging = path.with_suffix(".tmp")
    staging.write_bytes(stream.getvalue())
    staging.replace(path)
    with Image.open(path) as verified:
        verified.load()


def prepare(photo):
    cache = args.cache_dir / (hashlib.sha256(photo["url"].encode()).hexdigest() + ".image")
    if not cache.exists():
        request = urllib.request.Request(photo["url"], headers={"User-Agent": "HotelPradeepWebsite/1.0 (licensed destination photography)"})
        with urllib.request.urlopen(request, timeout=45) as response:
            data = response.read()
        with Image.open(BytesIO(data)) as verified:
            verified.load()
        cache.write_bytes(data)
    with Image.open(cache) as original:
        image = ImageOps.exif_transpose(original).convert("RGB")
        desktop = image.copy()
        desktop.thumbnail((1440, 1440), Image.Resampling.LANCZOS)
        atomic_save(desktop, target / f"{photo['id']}.webp", 83)
        width = min(image.width, image.height * 1.25, 900)
        mobile = ImageOps.fit(image, (round(width), round(width / 1.25)), method=Image.Resampling.LANCZOS, centering=tuple(photo["focus"]))
        atomic_save(mobile, target / f"{photo['id']}-mobile.webp", 82)
    print(f"Prepared {photo['id']} desktop and mobile photographs", flush=True)


with ThreadPoolExecutor(max_workers=4) as pool:
    list(pool.map(prepare, plan))
print("All eight destination image pairs are ready.")
