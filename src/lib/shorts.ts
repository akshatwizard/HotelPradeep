export const hotelShorts = [
  {
    id: "rW-FEwJXIxk",
    title: "A closer look at your stay",
    label: "Room tour",
    description: "Thoughtful details, welcoming interiors and a comfortable place to unwind.",
  },
  {
    id: "YeGploj95IA",
    title: "Room to settle in",
    label: "Twin-bed room tour",
    description: "Explore the twin-bed setting, seating corner and room essentials.",
  },
  {
    id: "p0jK6qYFdHA",
    title: "An evening above the everyday",
    label: "Rooftop dining",
    description: "Warm lighting, greenery and inviting tables set the scene for your evening.",
  },
  {
    id: "vxxW7R23XV0",
    title: "Unwind at Mehfil",
    label: "Mehfil Bar",
    description: "Step inside Mehfil for a look at the illuminated bar and inviting seating.",
  },
  {
    id: "IGuDUkvJOOM",
    title: "A little more of Mehfil",
    label: "Mehfil Bar & lounge",
    description: "Another perspective on the lounge, decorative lighting and bar counter.",
  },
  {
    id: "Ghaqgs9MaVM",
    title: "A quieter corner",
    label: "Courtyard & lounge",
    description: "Discover a green courtyard, distinctive architecture and relaxed lounge spaces.",
  },
] as const;

export type HotelShort = (typeof hotelShorts)[number];
export const shortsByPage: Record<string, readonly string[]> = {
  "/": hotelShorts.map((video) => video.id),
  "/gallery": hotelShorts.map((video) => video.id),
  "/rooms": ["rW-FEwJXIxk", "YeGploj95IA"],
  "/dining": ["p0jK6qYFdHA", "vxxW7R23XV0", "IGuDUkvJOOM"],
  "/facilities": ["Ghaqgs9MaVM"],
  "/about": ["Ghaqgs9MaVM"],
};
export const shortsForPage = (path: string) => hotelShorts.filter((video) => shortsByPage[path]?.includes(video.id));
export const shortUrl = (id: string) => `https://www.youtube.com/shorts/${id}`;
export const shortEmbedUrl = (id: string) => `https://www.youtube.com/embed/${id}`;
export const shortThumbnail = (id: string) => `/images/shorts/${id}.webp`;
