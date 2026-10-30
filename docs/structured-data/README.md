# Hotel Pradeep: complete website JSON-LD

This package contains the structured data actually rendered by the production build, covering all 22 content pages. The canonical identity remains `https://hotelpradeep.com`. This package does not change hosting or domain assignments.

## Files and installation

- `complete-website.json`: deduplicated graph of all site entities, for review and reuse. **Do not paste this full-site graph into every page.**
- `pages/*.json`: one standalone graph for each page, including the shared Hotel and WebSite entities plus that page's relevant entities. Select only the file matching the page you are implementing.
- `coverage.json`: complete path-to-file mapping and schema types per page.
- `analytics-check.json`: source-level Google Analytics audit and limits of verification.
- `hotel-pradeep-schema.zip`: downloadable bundle of the JSON files and this guide.

The Next.js implementation already renders `SiteStructuredData` once in the root layout and `PageStructuredData` once in each content page. Both are server-rendered as `application/ld+json` script elements. Strings are escaped to prevent HTML/script injection. Do not install another duplicate schema plugin or paste the standalone page graph alongside those existing blocks.

## Coverage

| Pages | Structured data |
| --- | --- |
| Every content page | Hotel, WebSite, appropriate WebPage subtype, primary ImageObject; BreadcrumbList on inner pages |
| Home, About, Contact, Facilities | Hotel identity, address, geo from the existing map, public contacts, 36 rooms, amenities, check-out time |
| Rooms and Tariff | CollectionPage, ItemList, three HotelRoom + Product entities, Offer and UnitPriceSpecification per category |
| Dining | CollectionPage, ItemList, Poonam Restaurant and Eden Rooftop Restaurant |
| Gallery index | CollectionPage and album ItemList |
| Five gallery albums | ImageGallery and ImageObject entities for the displayed photographs |
| Varanasi index | CollectionPage, City, destination ItemList and eight TouristAttraction entities |
| Eight destination guides | WebPage, Article, TouristAttraction, City, credited ImageObject and BreadcrumbList |

APIs, robots, the XML sitemap, redirects and 404 pages do not get content-page schema. The shared layout may still contain the site identity on a 404; no fake page/article is created for it.

## Content choices

- Owner-confirmed content update (30 October 2026): free secured parking, a free driver dormitory with a toilet near parking, Mehfil Bar and Blessings Rooftop Banquet are included in the shared Hotel description and amenities. Eden remains the rooftop restaurant.
- Hotel data comes from the existing website. No unverified social profiles, payment methods, pets policy, check-in time, accessible-room claims or current certification were invented. Star classification is deliberately omitted from `starRating` until its current certification is confirmed.
- The three room categories, occupancy labels and INR 4,000 / 5,000 / 6,000 nightly prices follow visible page content. Photo category assignments remain provisional, as previously agreed. Offers represent published tariffs for accommodation rental, not live availability or an instant booking guarantee. No stock state, invented price expiry or tax-inclusion flag is supplied.
- Poonam's meal windows and last-order time appear in its description. A last-order time is not encoded as a closing time. Eden has no invented opening hours. Cuisine reflects existing site copy.
- Attraction opening-hour fields are omitted because access windows, ceremony times and provisional schedules need different treatment. The detailed visiting guidance remains visible in the articles. Estimated commute ranges are not presented as measured routes or transit timetables.
- No AggregateRating, customer Review, FAQPage, SearchAction, ReserveAction, Event, fabricated publication dates or guaranteed rich-result claims are added. The website has no site search, instant reservation engine or destination event schedule to support those features.
- The guide's `lastReviewed` date follows the review date displayed in the destination guides. Update both when the editorial content is rechecked.

## Maintaining and checking

1. Update the shared business/content data and `src/lib/structured-data.ts` together when hotel facts change.
2. Run `npm run build`, `npm run schema:export` and `node --test tests/structured-data.test.mjs`.
3. Regenerate the download with `python scripts/package-schema.py`.
4. Check that content and prices agree with the rendered page. The exporter verifies all 22 routes, JSON parsing, canonical page identities, unique IDs, internal entity references, expected room prices, missing invented availability and destination coverage.
5. Test representative JSON-LD in the [Schema.org validator](https://validator.schema.org/) and Google's [Rich Results Test](https://search.google.com/test/rich-results). Schema.org supports more types than Google's rich-result features; a valid schema does not guarantee a search enhancement. Browser/server-render checks are separate from those external tools.

References: [Schema.org Hotel](https://schema.org/Hotel), [accommodation modelling](https://schema.org/docs/hotels.html), [Google structured-data policies](https://developers.google.com/search/docs/appearance/structured-data/sd-policies), [Next.js JSON-LD guidance](https://nextjs.org/docs/app/guides/json-ld).

## Google Analytics finding

The global integration uses GA4 measurement ID **G-9FXDWDJ45Z**, with one `gtag.js` loader and one `gtag('config', ...)` initialization in `src/components/Integrations.tsx`. The root layout includes this integration once. It loads after the page using Next.js `lazyOnload`. This is the existing ID carried forward from the original site; no replacement ID was supplied or applied.

The build check confirms the ID is present in all content-page integration payloads. Browser inspection also found one gtag.js script element and the matching configuration; after navigating from Home to Rooms, the loader remained singular. That is an installation check, not proof of incoming data, account ownership, consent configuration or Realtime/DebugView receipt. No authenticated Google Analytics account was available for this audit.

For Next.js navigation, check that the GA4 web stream's Enhanced measurement includes **Page views → Page changes based on browser history events** and verify navigation in DebugView. The application does not add a second manual route tracker, which could double-count automatic history events. See [Google's SPA measurement guidance](https://developers.google.com/analytics/devguides/collection/ga4/single-page-applications). If a different property is intended, its measurement ID must be supplied and confirmed before replacement.
