import { aboutParagraphs, diningParagraphs, facilities, galleries, hotel, rooms } from "./content";
import { photos } from "./photos";
import { destinations } from "./varanasi";
import photoCredits from "./varanasi-photo-credits.json";

type Node = Record<string, unknown>;
export const SITE_URL = "https://hotelpradeep.com";
const HOTEL_ID = `${SITE_URL}/#hotel`;
const WEBSITE_ID = `${SITE_URL}/#website`;
const CITY_ID = `${SITE_URL}/varanasi#city`;
const ref = (id: string) => ({ "@id": id });
export const absoluteUrl = (path: string) => new URL(path, `${SITE_URL}/`).href;
const pageId = (path: string) => `${absoluteUrl(path)}#webpage`;
const address = { "@type": "PostalAddress", streetAddress: "Jagatganj", addressLocality: "Varanasi", addressRegion: "Uttar Pradesh", postalCode: "221002", addressCountry: "IN" };
const city = { "@type": "City", "@id": CITY_ID, name: "Varanasi", alternateName: ["Kashi", "Banaras"], containedInPlace: { "@type": "State", name: "Uttar Pradesh", containedInPlace: { "@type": "Country", name: "India" } } };
const graph = (nodes: Node[]) => ({ "@context": "https://schema.org", "@graph": nodes });
const amenity = (name: string, description?: string) => ({ "@type": "LocationFeatureSpecification", name, value: true, ...(description ? { description } : {}) });

export function getSiteSchema() {
  return graph([
    {
      "@type": "Hotel", "@id": HOTEL_ID, name: hotel.name, url: absoluteUrl("/"),
      description: "Hotel Pradeep in Jagatganj, Varanasi offers guest rooms, Poonam Restaurant, Eden Rooftop Restaurant and hotel facilities for leisure and business travellers.",
      logo: { "@type": "ImageObject", "@id": `${SITE_URL}/#logo`, contentUrl: absoluteUrl("/img/logo/logo_trans.png"), url: absoluteUrl("/img/logo/logo_trans.png") },
      image: [photos.facadeDusk, photos.facadeDaylight, photos.lobbyWide].map(absoluteUrl),
      telephone: hotel.phones[0].replace(/\s/g, ""), email: hotel.email, address,
      geo: { "@type": "GeoCoordinates", latitude: 25.3252605, longitude: 82.9996762 },
      hasMap: "https://www.google.com/maps/search/?api=1&query=Hotel+Pradeep+Jagatganj+Varanasi",
      contactPoint: [
        { "@type": "ContactPoint", contactType: "General enquiries", telephone: "+917408423503", email: hotel.email },
        { "@type": "ContactPoint", contactType: "Reservations", telephone: "+917408423504", email: hotel.reservationEmail },
        { "@type": "ContactPoint", contactType: "Hotel reception", telephone: "+915422204963" },
        { "@type": "ContactPoint", contactType: "Hotel reception", telephone: "+915422207231" },
      ],
      numberOfRooms: 36, currenciesAccepted: "INR", checkoutTime: "12:00:00+05:30",
      amenityFeature: facilities.filter((item) => !["36 Elegantly Appointed Rooms", "Prime Location", "Easy Access"].includes(item.title)).map((item) => amenity(item.title, item.description)),
      subjectOf: [ref(pageId("/about")), ref(pageId("/contact"))],
    },
    { "@type": "WebSite", "@id": WEBSITE_ID, url: absoluteUrl("/"), name: hotel.name, inLanguage: "en-IN", publisher: ref(HOTEL_ID) },
  ]);
}

const pageInfo: Record<string, { name: string; description: string; type: string; image: string }> = {
  "/": { name: "Hotel Pradeep | Stay & Dining in Varanasi", description: "Comfortable rooms, Poonam Restaurant, Eden Rooftop Restaurant and Banarasi hospitality at Hotel Pradeep in Jagatganj, Varanasi.", type: "WebPage", image: photos.facadeDusk },
  "/about": { name: "About Hotel Pradeep", description: aboutParagraphs[2], type: "AboutPage", image: photos.facadeNight },
  "/rooms": { name: "Rooms at Hotel Pradeep", description: "Explore Deluxe, Super Deluxe and Executive room categories, facilities and published nightly tariffs at Hotel Pradeep.", type: "CollectionPage", image: photos.roomCarpetWindows },
  "/tariff": { name: "Hotel Pradeep Room Tariff", description: "Published room tariffs and booking information for Hotel Pradeep, Varanasi.", type: "CollectionPage", image: photos.roomCarpetWide },
  "/dining": { name: "Poonam & Eden Dining", description: "Discover Poonam Restaurant and Eden Rooftop Restaurant at Hotel Pradeep.", type: "CollectionPage", image: photos.diningRoom },
  "/facilities": { name: "Hotel Pradeep Facilities", description: "Explore the amenities and services at Hotel Pradeep, Varanasi.", type: "WebPage", image: photos.barLounge },
  "/contact": { name: "Contact Hotel Pradeep", description: "Contact Hotel Pradeep in Jagatganj, Varanasi for stays, dining and general enquiries.", type: "ContactPage", image: photos.entranceEvening },
  "/gallery": { name: "Hotel Pradeep Photo Gallery", description: "Photographs of the hotel exterior, rooms, restaurant, reception and parking areas.", type: "CollectionPage", image: photos.lobbyWide },
  "/varanasi": { name: "Explore Varanasi with Hotel Pradeep", description: "Discover Varanasi's temples, ghats and heritage sites, with practical destination guides from Hotel Pradeep.", type: "CollectionPage", image: photos.gangesPanorama },
};
export const schemaPaths = [...Object.keys(pageInfo), ...galleries.map((item) => `/gallery/${item.slug}`), ...destinations.map((item) => `/varanasi/${item.id}`)];

function breadcrumb(path: string, name: string) {
  const parts = [{ name: "Home", url: absoluteUrl("/") }];
  if (path.startsWith("/gallery/")) parts.push({ name: "Gallery", url: absoluteUrl("/gallery") });
  if (path.startsWith("/varanasi/")) parts.push({ name: "Varanasi", url: absoluteUrl("/varanasi") });
  parts.push({ name, url: absoluteUrl(path) });
  return { "@type": "BreadcrumbList", "@id": `${absoluteUrl(path)}#breadcrumb`, itemListElement: parts.map((item, index) => ({ "@type": "ListItem", position: index + 1, name: item.name, item: item.url })) };
}
function itemList(id: string, name: string, items: { id: string; name: string; url: string }[]) {
  return { "@type": "ItemList", "@id": id, name, numberOfItems: items.length, itemListElement: items.map((item, index) => ({ "@type": "ListItem", position: index + 1, item: { "@id": item.id, name: item.name, url: item.url } })) };
}
function roomNodes() {
  return rooms.flatMap((room) => {
    const id = `${absoluteUrl("/rooms")}#${room.id}`;
    const offerId = `${absoluteUrl("/tariff")}#offer-${room.id}`;
    const [min, max] = room.features[0].text.match(/\d+/g)!.map(Number);
    return [
      { "@type": ["HotelRoom", "Product"], "@id": id, name: room.title, description: room.description, url: id,
        image: room.image.map(absoluteUrl), containedInPlace: ref(HOTEL_ID),
        occupancy: { "@type": "QuantitativeValue", minValue: min, maxValue: max, unitCode: "C62", unitText: "guests" },
        amenityFeature: room.features.slice(1).filter((item) => !item.text.includes("Interiors")).map((item) => amenity(item.text)),
        offers: ref(offerId),
      },
      { "@type": "Offer", "@id": offerId, name: `${room.title} — published nightly tariff`, url: absoluteUrl("/tariff"), itemOffered: ref(id), offeredBy: ref(HOTEL_ID),
        businessFunction: "http://purl.org/goodrelations/v1#LeaseOut",
        price: room.price, priceCurrency: "INR",
        priceSpecification: { "@type": "UnitPriceSpecification", price: room.price, priceCurrency: "INR", unitCode: "DAY", unitText: "night", referenceQuantity: { "@type": "QuantitativeValue", value: 1, unitCode: "DAY", unitText: "night" } },
        description: "Published room tariff per night. Refer to the tariff page for taxes and terms. Confirm dates, final charges and availability directly with the hotel; an enquiry is not a confirmed reservation.",
      },
    ];
  });
}
function restaurantNodes() {
  return [
    { "@type": "Restaurant", "@id": `${absoluteUrl("/dining")}#poonam`, name: "Poonam Restaurant", url: `${absoluteUrl("/dining")}#poonam`, description: `${diningParagraphs[0]} ${diningParagraphs.slice(2, 5).join(". ")}`, image: [absoluteUrl(photos.diningRoom), absoluteUrl(photos.diningTables)], servesCuisine: ["Indian", "Continental", "Chinese"], address, telephone: "+917408423503", containedInPlace: ref(HOTEL_ID) },
    { "@type": "Restaurant", "@id": `${absoluteUrl("/dining")}#eden`, name: "Eden Rooftop Restaurant", url: `${absoluteUrl("/dining")}#eden`, description: diningParagraphs[5], image: [absoluteUrl(photos.terraceGarden), absoluteUrl(photos.terraceEvening)], servesCuisine: "Indian", address, telephone: "+917408423503", containedInPlace: ref(HOTEL_ID) },
  ];
}
function attractionNodes(id: string) {
  const place = destinations.find((item) => item.id === id)!;
  const url = absoluteUrl(`/varanasi/${id}`);
  const credit = photoCredits.find((item) => item.id === id)!;
  return [
    { "@type": "TouristAttraction", "@id": `${url}#place`, name: place.name, description: place.description, url, image: ref(`${url}#photo`), containedInPlace: ref(CITY_ID), sameAs: place.source, hasMap: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(place.mapQuery)}` },
    { "@type": "ImageObject", "@id": `${url}#photo`, contentUrl: absoluteUrl(`/images/varanasi/${id}.webp`), url: absoluteUrl(`/images/varanasi/${id}.webp`), caption: place.imageAlt, creditText: credit.author, license: credit.licenseUrl, isBasedOn: credit.sourceUrl, description: "WebP resizing and dedicated mobile crops applied to the credited source photograph." },
  ];
}

export function getPageSchema(path: string) {
  const gallery = galleries.find((item) => path === `/gallery/${item.slug}`);
  const place = destinations.find((item) => path === `/varanasi/${item.id}`);
  const info = pageInfo[path] || (gallery ? { name: `${gallery.title} Gallery`, description: gallery.description, type: "ImageGallery", image: gallery.cover } : place ? { name: `${place.name} Visitor Guide`, description: place.description, type: "WebPage", image: `/images/varanasi/${place.id}.webp` } : undefined);
  if (!info) throw new Error(`No structured data configured for ${path}`);
  const url = absoluteUrl(path);
  const mainImage = place ? `${url}#photo` : `${url}#primaryimage`;
  const page: Node = { "@type": info.type, "@id": pageId(path), url, name: info.name, description: info.description, inLanguage: "en-IN", isPartOf: ref(WEBSITE_ID), publisher: ref(HOTEL_ID), about: ref(HOTEL_ID), primaryImageOfPage: ref(mainImage) };
  const nodes: Node[] = [page];
  if (path !== "/") { page.breadcrumb = ref(`${url}#breadcrumb`); nodes.push(breadcrumb(path, gallery?.title || place?.name || info.name)); }
  if (!place) nodes.push({ "@type": "ImageObject", "@id": mainImage, contentUrl: absoluteUrl(info.image), url: absoluteUrl(info.image), caption: info.name });
  if (["/", "/about", "/contact", "/facilities"].includes(path)) page.mainEntity = ref(HOTEL_ID);
  if (["/rooms", "/tariff"].includes(path)) {
    const list = itemList(`${url}#rooms`, "Room categories at Hotel Pradeep", rooms.map((room) => ({ id: `${absoluteUrl("/rooms")}#${room.id}`, name: room.title, url: `${absoluteUrl("/rooms")}#${room.id}` })));
    page.mainEntity = ref(list["@id"]); nodes.push(list, ...roomNodes());
  }
  if (path === "/dining") {
    const restaurants = restaurantNodes();
    const list = itemList(`${url}#restaurants`, "Dining at Hotel Pradeep", restaurants.map((item) => ({ id: item["@id"], name: item.name, url: item.url })));
    page.mainEntity = ref(list["@id"]); nodes.push(list, ...restaurants);
  }
  if (path === "/gallery") {
    const list = itemList(`${url}#albums`, "Hotel Pradeep photo albums", galleries.map((item) => ({ id: pageId(`/gallery/${item.slug}`), name: item.title, url: absoluteUrl(`/gallery/${item.slug}`) })));
    page.mainEntity = ref(list["@id"]); nodes.push(list);
  }
  if (gallery) {
    page.image = gallery.images.map((image) => ref(`${absoluteUrl(image)}#image`));
    nodes.push(...gallery.images.map((image, index) => ({ "@type": "ImageObject", "@id": `${absoluteUrl(image)}#image`, contentUrl: absoluteUrl(image), url: absoluteUrl(image), name: `${gallery.title} photograph ${index + 1}`, about: ref(HOTEL_ID) })));
  }
  if (path === "/varanasi") {
    const list = itemList(`${url}#destinations`, "Places to visit in Varanasi", destinations.map((item) => ({ id: `${absoluteUrl(`/varanasi/${item.id}`)}#place`, name: item.name, url: absoluteUrl(`/varanasi/${item.id}`) })));
    page.about = ref(CITY_ID); page.mainEntity = ref(list["@id"]); nodes.push(city, list, ...destinations.flatMap((item) => attractionNodes(item.id)));
  }
  if (place) {
    page.about = ref(`${url}#place`); page.mainEntity = ref(`${url}#guide`); page.lastReviewed = "2026-10-24";
    nodes.push(city, ...attractionNodes(place.id), {
      "@type": "Article", "@id": `${url}#guide`, headline: info.name, description: place.description, url, inLanguage: "en-IN", mainEntityOfPage: ref(pageId(path)), about: ref(`${url}#place`), author: ref(HOTEL_ID), publisher: ref(HOTEL_ID), image: ref(mainImage),
      articleSection: ["The experience", "Timings and best time to visit", "Travel from Hotel Pradeep", "What to carry", "What to avoid"],
    });
  }
  return graph(nodes);
}
