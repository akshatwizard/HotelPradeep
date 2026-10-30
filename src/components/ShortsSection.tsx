import { shortsForPage } from "@/lib/shorts";
import ShortsGrid from "./ShortsGrid";
import { Eyebrow } from "./ui";

export default function ShortsSection({ path, title, description }: { path: string; title: string; description: string }) {
  return (
    <section className="section section-tinted shorts-section" id="shorts" aria-labelledby="shorts-title">
      <div className="shell">
        <div className="section-heading">
          <div><Eyebrow>Hotel Pradeep in motion</Eyebrow><h2 id="shorts-title">{title}</h2></div>
          <p className="heading-aside">{description}</p>
        </div>
        <ShortsGrid videos={shortsForPage(path)} />
      </div>
    </section>
  );
}
