"""Package the reviewed JSON-LD exports. Run after npm run schema:export."""
from pathlib import Path
from zipfile import ZipFile, ZIP_DEFLATED
import json

root = Path(__file__).resolve().parent.parent / 'docs' / 'structured-data'
coverage = json.loads((root / 'coverage.json').read_text())
assert coverage['pages'] == 22, 'Review the package inventory when page coverage changes'
files = [root / 'README.md', *sorted(root.glob('*.json')), *sorted((root / 'pages').glob('*.json'))]
archive = root / 'hotel-pradeep-schema.zip'
with ZipFile(archive, 'w', ZIP_DEFLATED) as bundle:
    for path in files:
        bundle.write(path, path.relative_to(root))
print(f'Packaged {len(files)} files: {archive.name} ({archive.stat().st_size:,} bytes)')
