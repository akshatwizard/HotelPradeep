# Hotel Pradeep

A complete Next.js App Router and Tailwind CSS redesign of hotelpradeep.com. The original hotel identity, photographs, room prices, amenities, contact details, restaurant descriptions, reviews, and integrations are retained.

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

The `/restaurant` URL redirects permanently to `/dining`. A custom 404, sitemap, and robots file are included.

## Content and assets

`src/lib/content.ts` holds shared room, amenity, gallery, review, restaurant, and contact content. All original assets remain under `public/`. New pages use `next/image`; legacy Bootstrap and jQuery assets are retained on disk but are not loaded by the redesign.

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
