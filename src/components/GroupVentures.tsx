import Image from "next/image";
import Icon from "./Icon";
import { Eyebrow } from "./ui";

const ventures = [
  { name: "Zesto", logo: "/img/clients/1.jpg", href: null },
  { name: "Palash Kothi", logo: "/img/clients/2.jpg", href: "https://palashkothi.com/" },
  { name: "Take Off Bar", logo: "/img/clients/3.jpg", href: null },
  { name: "Pradeep Air Caterer", logo: "/img/clients/4.jpg", href: null },
  { name: "Food Hangar", logo: "/img/clients/5.jpg", href: null },
];

export default function GroupVentures() {
  return (
    <section className="group-ventures" aria-labelledby="group-ventures-title">
      <div className="shell">
        <div className="group-ventures-heading">
          <Eyebrow>Hotel Pradeep Group</Eyebrow>
          <h2 id="group-ventures-title">Discover our <em>other ventures.</em></h2>
        </div>
        <ul className="group-ventures-list">
          {ventures.map((venture) => {
            const content = (
              <>
                <div className="venture-logo">
                  <Image src={venture.logo} width={170} height={85} alt={`${venture.name} logo`} />
                </div>
                <h3>{venture.name}</h3>
                {venture.href && <span className="venture-site-link">Visit website <Icon name="diagonal" width="14" height="14" /></span>}
              </>
            );
            return (
              <li key={venture.name}>
                {venture.href ? (
                  <a className="venture-card venture-card-link" href={venture.href} aria-label={`Visit ${venture.name} website`}>{content}</a>
                ) : (
                  <div className="venture-card">{content}</div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
