import { photos, photoAlbums, roomPhotoAssignments } from "./photos";

export const rooms = [
  {
    title: "Deluxe Rooms",
    description:
      "Relax in our Deluxe Room, designed for comfort with stylish décor and a cozy atmosphere. Enjoy a peaceful stay with all modern amenities and a warm touch of Banarasi hospitality.",
    features: [
      { icon: "fa-thin fa-user", text: "1-2 guests" },
      { icon: "fa-thin fa-bell-concierge", text: "24-Hour Room Service" },
      { icon: "fa-thin fa-bed-front", text: "King Size Bed" },
      { icon: "fa-thin fa-wifi", text: "Free WiFi" },
    ],
    price: 4000,
    image: roomPhotoAssignments.delux,
    left: true,
    id: "delux",
  },
  {
    title: "Super Deluxe Room",
    description:
      "Stay in style and comfort with our Super Deluxe Room, designed for a luxurious and relaxing experience. With spacious interiors, elegant furnishings, and modern amenities, enjoy the perfect blend of convenience and Banarasi charm.",
    features: [
      { icon: "fa-thin fa-user", text: "1-2 guests" },
      { icon: "fa-thin fa-bell-concierge", text: "24-Hour Room Service" },
      { icon: "fa-thin fa-wifi", text: "Free WiFi" },
      { icon: "fa-thin fa-bed-front", text: "Spacious & Stylish Interiors" },
    ],
    price: 5000,
    image: roomPhotoAssignments["super-delux"],
    left: false,
    id: "super-delux",
  },
  {
    title: "Executive Rooms",
    description:
      "Experience a perfect mix of luxury and comfort in our Executive Room, designed for a relaxing and premium stay. With spacious and stylish interiors, modern amenities, and a touch of Banarasi hospitality, this room offers everything you need for a memorable stay.",
    features: [
      { icon: "fa-thin fa-user", text: "2-3 guests" },
      { icon: "fa-thin fa-bell-concierge", text: "24-Hour Room Service" },
      { icon: "fa-thin fa-wifi", text: "Free WiFi" },
      { icon: "fa-thin fa-bed-front", text: "Spacious & Stylish Interiors" },
    ],
    price: 6000,
    image: roomPhotoAssignments.executive,
    left: true,
    id: "executive",
  },
];

export const facilities = [
  {
    icon: "fa-thin fa-bed-front",
    title: "24-Hour Room Service",
    description: "Enjoy round-the-clock in-room dining.",
  },
  {
    icon: "fa-thin fa-refrigerator",
    title: "Refrigerator",
    description: "Keep your drinks and snacks chilled anytime.",
  },
  {
    icon: "fa-thin fa-wifi",
    title: "WiFi",
    description: "Stay connected with high-speed internet access.",
  },
  {
    icon: "fa-thin fa-champagne-glasses",
    title: "Bar",
    description: "Relax with a drink at our in-house bar.",
  },
  {
    icon: "fa-light fa-elevator",
    title: "Lift",
    description: "Easy access to all floors with our elevator service.",
  },
  {
    icon: "fa-thin fa-plate-utensils",
    title: "Multi cuisine Restaurant",
    description: "Enjoy delicious vegetarian meals at our restaurant.",
  },
  {
    icon: "fa-thin fa-air-conditioner",
    title: "Air Conditioning",
    description: "Stay cool and comfortable with air-conditioned rooms.",
  },
  {
    icon: "fa-thin fa-phone-office",
    title: "Telephone",
    description: "Stay connected with in-room calling service.",
  },
  {
    icon: "fa-thin fa-print",
    title: "Email and Xerox facilities",
    description: "Convenient document copying and fax services.",
  },
  {
    icon: "fa-thin fa-washing-machine",
    title: "Laundry Service",
    description: "Quick and professional garment cleaning service.",
  },
  {
    icon: "fa-thin fa-stethoscope",
    title: "Doctor on Call",
    description: "Medical assistance available anytime for emergencies.",
  },
  {
    icon: "fa-thin fa-car",
    title: "Parking Facilities",
    description: "Secure parking for your vehicle.",
  },
  {
    icon: "fa-thin fa-person-hiking",
    title: "Travel Desk",
    description:
      "Expert assistance with local travel arrangements and bookings.",
  },
  {
    icon: "fa-thin fa-vault",
    title: "Safe Deposit Locker",
    description: "Every room has a secure storage facility for your valuables.",
  },
  {
    icon: "fa-thin fa-door-open",
    title: "36 Elegantly Appointed Rooms",
    description: "Designed for a comfortable and stylish stay.",
  },
  {
    icon: "fa-thin fa-person-to-door",
    title: "Attached Bathrooms",
    description: "Private and convenient for every room.",
  },
  {
    icon: "fa-thin fa-water",
    title: "Hot & Cold Running Water",
    description: "Available round the clock for your comfort.",
  },
  {
    icon: "fa-thin fa-person-booth",
    title: "Conference Facilities",
    description: "Ideal for meetings and events.",
  },
  {
    icon: "fa-thin fa-waveform",
    title: "Soundproof Hotel",
    description: "Enjoy a peaceful stay in the heart of Varanasi.",
  },
  {
    icon: "fa-thin fa-location-smile",
    title: "Prime Location",
    description:
      "Walking distance to the Ganges River, temples, and key offices.",
  },
  {
    icon: "fa-thin fa-plane-departure",
    title: "Easy Access",
    description: "Just 26 km from Varanasi Airport.",
  },
];

export const aboutParagraphs = [
  "Hotel Pradeep is a 3-star luxury hotel approved by the Ministry of Tourism, Government of India. Located in the heart of Varanasi, the hotel offers a blend of comfort and elegance, making it a great choice for both tourists and business travelers.",
  'The hotel’s in-house restaurant, "Poonam", serves delicious food with rich oriental flavors, offering a delightful dining experience. The rooftop restaurant "Eden" is the perfect spot for those who enjoy dining under the stars. With its open-air setting, guests can enjoy a breathtaking view of the city while savoring their meals.',
  "With its prime location, excellent dining, and warm hospitality, Hotel Pradeep ensures a pleasant and memorable stay in the holy city of Varanasi.",
  "At Hotel Pradeep, we offer more than just a stay—we offer an experience of comfort, taste, and beauty.",
];

export const aboutOffers = [
  "A range of elegant rooms with oriental decorations.",
  "Cosy dinning facilities with a wide range of Continental, Indian and Chinese cuisine.",
  'A roof-top lush green open air restaurant "Eden" with Mexican cuisine.',
  "Exclusive banquet facilities and Board Room for select gathering, a Travel Desk and everything a traveler requires to feel comfortable, at home and at ease.",
];

export const introParagraphs = [
  'Welcome to Hotel Pradeep, where warmth and elegance come together. The name Pradeep means "divine light"—guiding the way to wisdom, joy, and peace.',
  "Under one roof, enjoy comfortable rooms, delicious meals at Poonam, our restaurant filled with rich flavors, and the stunning Eden, our rooftop dining space where you can dine under the stars.",
  "At Hotel Pradeep, we offer more than just a stay—we offer an experience of comfort, taste, and beauty.",
];

export const diningParagraphs = [
  "Welcome to Poonam Restaurant, where we serve delicious food with the warmth of Banarasi hospitality. Our menu includes a variety of dishes, from traditional Banarasi flavors to popular Indian and international meals. Every dish is prepared with fresh ingredients to give you the best taste and quality. Whether you are craving local favorites or looking to try something new, we have something for everyone.",
  "With a cozy and elegant setting, Poonam Restaurant is the perfect place to enjoy a relaxing meal with family and friends. Our friendly staff ensures you have a comfortable and enjoyable dining experience. Visit us and savor the rich flavors of Banaras in every bite!",
  "Breakfast: 7.30 am – 10.30 am (daily)",
  "Lunch: 12.00 noon – 3.00 pm (daily)",
  "Dinner: open from 6.30 pm, last order at 10.30 pm (daily)",
  "Eden Rooftop Restaurant at Hotel Pradeep is a wonderful place to enjoy authentic Indian cuisine. With its peaceful atmosphere and beautiful garden view, it provides a relaxing dining experience for guests. The restaurant's open-air setting adds to the charm, whether you are looking for a quiet meal or a special evening with family and friends.",
  "The menu features a variety of delicious Indian dishes, carefully prepared to bring out rich flavors and traditional tastes. The combination of great food, a scenic view, and a welcoming ambiance makes it a perfect spot to unwind and enjoy a memorable dining experience.",
];

export const galleries = [
  {
    slug: "front-view-gallery",
    title: "Front View",
    cover: photos.facadeDusk,
    description:
      "Experience the grand entrance and stunning architecture that welcomes you to our hotel.",
    images: photoAlbums.front,
  },
  {
    slug: "resturant-gallery",
    title: "Restaurant",
    cover: photos.diningRoom,
    description:
      "Indulge in a delightful dining experience with exquisite cuisine and a cozy ambiance.",
    images: photoAlbums.dining,
  },
  {
    slug: "reception-gallery",
    title: "Reception & Common Area",
    cover: photos.receptionDesk,
    description:
      "A warm and inviting reception area designed to provide a seamless check-in experience.",
    images: photoAlbums.reception,
  },
  {
    slug: "rooms-gallery",
    title: "Rooms",
    cover: photos.roomCarpetWide,
    description:
      "Enjoy luxurious and comfortable rooms with modern amenities for a relaxing stay.",
    images: photoAlbums.rooms,
  },
  {
    slug: "parking-gallery",
    title: "Parking",
    cover: photos.courtyardWide,
    description:
      "Secure and spacious parking available for the convenience of our guests.",
    images: photoAlbums.parking,
  },
];

export const testimonials = [
  {
    name: "Pragya Sharma",
    quote:
      "This hotel in Varanasi is a great place to stay. When it came to recommending restaurants and providing directions to the most popular tourist destinations and how to get there the service members were accommodating and considerate of our demands. The room we stayed in was always spotless and well-maintained.",
  },
  {
    name: "Neerja Sharma",
    quote:
      "My experience of Hotel Pradeep is excellent, I thank all the staff members especially G M Mr Anil ,who attends all the guests with great gesture and whole heartedly. We felt like a homely atmosphere. I also thank the Chef for service us the devious food items. I wish I may come again. I will also suggest all my friends and relatives,if they get the chance to visit Varanasi, they must enjoy Hotel Pradeep's hospitality. Thanks.",
  },
  {
    name: "Sachin Jain",
    quote:
      "Nice place to stay in Varanasi.. centrally located.. rooms are good..staff is very cooperative and helpful. Overall Value for money.. Askfor Car parking..they have hidden place 😀 in a kothi for safe and guarded car parking.",
  },
];

export const reviewUrl =
  "https://www.google.com/travel/hotels/entity/CgsI_KOZ3OvumvDkARAB/reviews?q=hotel%20pradeep%20varanasi&g2lb=4965990%2C4969803%2C72277293%2C72302247%2C72317059%2C72406588%2C72414906%2C72420595%2C72421566%2C72471280%2C72472051%2C72481459%2C72485658%2C72560029%2C72573224%2C72616120%2C72619927%2C72647020%2C72648289%2C72686036%2C72760082%2C72803964%2C72808078%2C72825294%2C72827241%2C72832976%2C72860865%2C72880929%2C72882230%2C72885032&hl=en-IN&gl=in&cs=1&ssta=1&ts=CAEaSQorEicyJTB4Mzk4ZTJlMGMxOGVjMGIzMToweGU0ZTA2Yjc2YmI4NjUxZmMaABIaEhQKBwjpDxADGAQSBwjpDxADGAUYATICEAAqCQoFOgNJTlIaAA&qs=CAE4AkIJCfxRhrt2a-DkQgkJ_FGGu3Zr4OQ&ictx=111&utm_campaign=sharing&utm_medium=link&utm_source=htls";

export const hotel = {
  name: "Hotel Pradeep",
  address: "Jagatganj, Varanasi-221002 (U.P.) India",
  phones: ["+91 7408423503", "+91 7408423504", "0542-2204963", "0542-2207231"],
  email: "info@hotelpradeep.com",
  reservationEmail: "reservation@hotelpradeep.com",
  map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3606.37303530738!2d82.9996762!3d25.325260499999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e2e0c18ec0b31%3A0xe4e06b76bb8651fc!2sHotel%20Pradeep!5e0!3m2!1sen!2sin!4v1740131130582!5m2!1sen!2sin",
};
export const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Rooms", href: "/rooms" },
  { label: "Dining", href: "/dining" },
  { label: "Facilities", href: "/facilities" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export const serviceDetails = [
  {
    title: "Bar",
    image: photos.barLounge,
    imageAlt: "The bar and lounge at Hotel Pradeep",
    description:
      "Relax and enjoy a refreshing drink at our Bar. We offer a selection of soft drinks, fine spirits, and tasty snacks in a cozy and comfortable setting. Whether you want to unwind after a long day or have a quick bite, our Bar is the perfect place to sit back and enjoy.",
    hours: "Opening Hours: 5.00 pm – 11.00 pm (daily)",
  },
  {
    title: "Parking Facility",
    image: photos.courtyardWide,
    imageAlt: "The courtyard and grounds in the hotel parking album",
    description:
      "Spacious and secure parking is available for guests. Park your vehicle with ease and enjoy a stress-free stay.",
    hours: "Availability: 24/7",
  },
  {
    title: "In House Laundry",
    image: photos.roomKingBed,
    imageAlt: "Freshly prepared bed linen in a Hotel Pradeep guest room",
    description:
      "Quick and convenient laundry service for fresh and clean clothes. Enjoy a comfortable stay without any worries.",
    hours: "Service Hours: 7.00 am – 8.00 pm (daily)",
  },
];
