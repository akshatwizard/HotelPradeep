# Hotel Pradeep

A complete Next.js App Router and Tailwind CSS redesign of hotelpradeep.com. The original hotel identity, room prices, amenities, contact details, restaurant descriptions, reviews, and integrations are retained. Hotel photographs come from the owner's October 2026 photo archive; the Varanasi guide adds credited, licensed destination photography.

## Development

Use Node.js 22 or later.

```bash
npm ci
cp .env.example .env.local
npm run dev
```

Set `RESEND_API_KEY` in `.env.local` for local email delivery. Never commit credentials. The development script accepts both Next.js and supervised-preview host/port flags.

## Checks

```bash
npm run typecheck
npm run lint
npm test
npm run build
```

Tests cover date handling, booking validation, input bounds, escaped email content, request errors, missing credentials, provider failures, and success responses. Provider delivery is mocked; tests send no real email.

## Pages

- `/`
- `/about`
- `/rooms` (existing `#delux`, `#super-delux`, and `#executive` anchors)
- `/dining` (`#poonam` and `#eden`)
- `/facilities`
- `/gallery`
- `/gallery/front-view-gallery`
- `/gallery/resturant-gallery` (original spelling retained for existing links)
- `/gallery/reception-gallery`
- `/gallery/rooms-gallery`
- `/gallery/parking-gallery`
- `/tariff`
- `/contact`
- `/varanasi` (eight destinations with photographs, visitor information, map links, and photo credits)

The `/restaurant` URL redirects permanently to `/dining`. A custom 404, sitemap, and robots file are included.

## Content and assets

`src/lib/content.ts` holds shared room, amenity, gallery, review, restaurant, and contact content. `src/lib/photos.ts` assigns the owner-supplied photographs to rooms and albums. The 57 selected photographs have 57 separate mobile crops under `public/images/hotel/`; branding, associate logos, and icons are unchanged. Legacy assets remain on disk but the redesigned pages no longer display the old photographs or load Bootstrap and jQuery.

`ResponsiveImage` uses a native `<picture>` source below 768px, with Next.js image optimization for both sources. Mobile users receive a dedicated crop of the same photograph, rather than downloading a desktop photo hidden with CSS. Gallery lightboxes retain the complete original composition when enlarged. Hero photos load eagerly with high fetch priority; other photos load lazily.

Room category assignments are **provisional**, as requested, pending identification with the client. Update the three lists in `roomPhotoAssignments` in `src/lib/photos.ts`; room cards and carousels use those same lists. `scripts/hotel-photo-plan.json` records original archive filenames, contact-sheet photo IDs, and mobile crop focal points. Category assignment does not imply the client has verified the photographed room type.

To regenerate the assets after changing a crop, install Pillow locally and run:

```bash
python scripts/prepare-hotel-photos.py /path/to/HotelPradeep_webp.zip
```

The archive is not committed. The generator produces optimized WebP photographs and `src/lib/photo-sources.ts`. This step is not required during deployment. The source archive has no laundry-service photograph; fresh guest-room linen illustrates laundry service. Destination-specific photographs supplement the owner collection, with licences and crop changes credited on the city index, homepage and detailed guides.

The shared booking provider mounts an accessible native dialog across every page. Gallery lightboxes support Escape and arrow keys. Room galleries, guest reviews, mobile navigation, and the on-demand YouTube player use React. Forms retain no personal information in browser storage.

Existing room tariffs, GST text, and booking policies are carried over from the original site. They are editorial content, not computed prices or availability. Booking sends an enquiry, not a confirmed reservation or payment.

## Vercel deployment

Connect this repository to the existing Pro project. Use the `redesign` branch for preview and `main` for production. Keep the existing domain on production while reviewing the redesign.

Environment variables:

| Variable            | Purpose                                                                                                                                                                                                    |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `RESEND_API_KEY`    | Required for booking and contact email delivery. Add it to Preview as well as Production to test a preview.                                                                                                |
| `RESEND_FROM_EMAIL` | Recommended verified Resend sender, such as `Hotel Pradeep <reservations@your-verified-domain>`. If omitted, the original onboarding sender is retained and is subject to Resend test-sender restrictions. |

Both enquiry endpoints send to `info@hotelpradeep.com`. Valid guest email addresses become the reply-to address. Missing credentials return HTTP 503; invalid submissions return 400; provider failures return 502. No success message is returned without a confirmed provider response.

The original Google Analytics property, Tawk.to widget, YouTube film, Google Maps location, associate logos, and Wizards credit are preserved. Analytics and chat load after the page; the video loads on request.

## Review

Internal browser checks covered desktop, mobile, and tablet layouts. All 13 content pages were visited. The 375px mobile and 768px tablet frames were checked for horizontal overflow. Booking on the Facilities page, the mobile menu, room selection, photo carousels, and gallery viewer navigation were exercised. Live email delivery still requires configuration and an intentional delivery check.

## Header, hero, and Varanasi guide

The header uses 18px Marcellus desktop navigation and a larger logo, with mobile navigation at 1180px and below to leave room for the framed reservations control. The header and mobile-menu reservation buttons use an ivory-and-gold frame with a separate navy arrow panel. The homepage introduction uses a matching framed hospitality plaque, sized independently for smaller screens. The homepage hero has three slides: the hotel facade, Varanasi ghats, and the hotel drone view. Previous/next buttons, direct slide selection, play/pause, keyboard arrows, reduced-motion preferences, hover/focus pausing, and page visibility are supported.

`src/lib/varanasi.ts` holds eight destination introductions and visit tips. Licensed photographs and dedicated mobile crops are in `public/images/varanasi/`. The page includes visible photo credits and license links, and `scripts/varanasi-photo-plan.json` records sources and crop focal points. To regenerate these assets locally, run `python scripts/prepare-varanasi-photos.py` with Pillow installed. Deployment uses the committed WebP files and makes no external image downloads.

## Detailed destination guides

All eight destinations have a statically generated `/varanasi/[slug]` page, linked from the city index and included in the sitemap. `src/lib/destination-guides.ts` holds opening windows, practical advice, suggested visit durations, related destinations and approximate hotel-origin journeys by car, auto/e-rickshaw and walking. Shared transport and boat arrangements are explained separately. Road estimates exclude the explicitly listed final walk, queues and transfer delays; these are editorial planning ranges, not live navigation data. Google Maps links use the hotel's name and neighbourhood as origin, and driving links for autos are labelled as route references.

Review visitor facts and the `guideReviewed` date before updating schedules. The Sarnath museum timetable is visibly provisional because a current ASI timetable could not be confirmed. Namo Ghat has no asserted fixed opening window. Temple and tourism links are provided on each page for current access rules; opening hours are separate from ceremony times.

The header and mobile navigation use self-hosted Marcellus under the included SIL Open Font License in `public/fonts/marcellus/`. The original hotel wordmark retains its serif type. Homepage location cards link directly to their guides and use the existing dedicated mobile destination crops.

## Structured data and Analytics audit

All 22 content pages render a shared Hotel/WebSite graph and one page-specific JSON-LD graph from `src/lib/structured-data.ts`. Coverage includes breadcrumbs, room categories and nightly tariff offers, both restaurants, galleries and the eight Varanasi guides. The serializer escapes HTML delimiters. No live availability, aggregate reviews, unverified opening hours or social profiles are fabricated.

Run `npm run build` followed by `npm run schema:export` to validate and export the actual rendered markup into `docs/structured-data/`. That directory includes a complete deduplicated graph, standalone page graphs, route coverage and an Analytics audit. Do not paste the complete-site export into every page or add it alongside the existing implementation.

The existing GA4 measurement ID remains `G-9FXDWDJ45Z`, globally loaded through `Integrations`. Its installation is verified from source and build payloads; authenticated Realtime/DebugView event receipt and the web stream's enhanced history measurement settings have not been verified.

## Content readability

Body paragraphs use shared `--copy-size` and `--copy-leading` tokens: 17px on desktop/tablet, 16px on mobile up to 650px, with 1.8 line spacing. Supporting copy and controls use 15px / 14px, while form inputs remain 16px. Compact decorative labels and display headings keep their hierarchy. Existing page-specific and responsive rules use these same tokens so mobile overrides do not shrink the main copy again.

The enquiry form stacks fields on screens up to 400px. The narrow booking bar gives date inputs full rows, and the tariff table keeps its positioned labels inside its own horizontal scrolling area.
