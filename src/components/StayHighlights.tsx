import { stayHighlights } from "@/lib/content";
import Icon from "./Icon";

export default function StayHighlights() {
  return (
    <section className="stay-highlights shell" aria-label="Complimentary parking and driver facilities">
      {stayHighlights.map((item) => (
        <article key={item.title}>
          <span className="stay-highlight-icon"><Icon name={item.icon} width="30" height="30" /></span>
          <div>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </div>
        </article>
      ))}
    </section>
  );
}
