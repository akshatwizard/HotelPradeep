import { photos } from "@/lib/photos";
import Link from "next/link";
import { Photo } from "@/components/ui";
import Icon from "@/components/Icon";

export default function NotFound() {
  return (
    <section className="not-found shell">
      <div>
        <p className="eyebrow">A little off the beaten path</p>
        <span className="not-found-number">404</span>
        <h1>
          Let’s get you
          <br />
          <em>back home.</em>
        </h1>
        <p>
          The page you are looking for was moved, removed, renamed or never
          existed.
        </p>
        <Link href="/" className="button">
          Return to the hotel
          <Icon name="arrow" />
        </Link>
      </div>
      <Photo src={photos.facadeDaylight} alt="Hotel Pradeep" />
    </section>
  );
}
