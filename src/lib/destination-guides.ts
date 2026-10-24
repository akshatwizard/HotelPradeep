export type Journey = { mode: string; time: string; walk?: string; directions: string; mapMode?: "driving" | "walking" | "transit" };
export type DestinationGuide = {
  tagline: string; duration: string; bestTime: string; season: string;
  hours: { label: string; detail: string }[];
  highlights: string[]; carry: string[]; avoid: string[]; access: string;
  journeys: Journey[]; transportNote: string; nearby: string[];
  resources?: { label: string; href: string }[];
};
const season = "October to March is our suggested season for comfortable sightseeing. Start early in hot weather; monsoon rain and high river levels can change access to the ghats.";
const sharedTransport = "For buses or shared vehicles, ask the hotel desk about current connections and stops. There is no verified direct service or timetable in this guide; allow extra time for waiting, transfers and the final walk.";
export const guideReviewed = "24 October 2026";
export const destinationGuides: Record<string, DestinationGuide> = {
  "kashi-vishwanath": {
    tagline: "Sacred lanes. A living tradition.", duration: "Allow 2–3 hours, with extra time for darshan queues.",
    bestTime: "An early morning visit can leave more of the day free. Mondays, Shravan and major festivals can be exceptionally busy; arrange assistance before travelling with older guests.", season,
    hours: [
      { label: "General darshan", detail: "The Temple Trust lists 4:00–11:00 am and 12:20–7:00 pm as daytime darshan windows. Rituals interrupt access; confirm your date and entry gate with the Trust." },
      { label: "Aarti & late visits", detail: "Mangala Aarti has separate arrangements before general darshan. Evening access is interrupted by aarti. Check the official ritual schedule and book any ticketed ceremony through the Temple Trust." },
    ],
    highlights: ["Experience the main Shiva shrine and the atmosphere of Kashi Vishwanath Dham.", "Walk through the surrounding old-city lanes, leaving time for the corridor and riverfront approach where access permits."],
    carry: ["A small amount of cash, any booking confirmation and identification required for your chosen entry.", "Modest clothing and footwear that is easy to remove; keep belongings to a minimum.", "Hotel contact details written on paper, especially if your phone is left in storage."],
    avoid: ["Taking phones, smartwatches, electronic keys, cameras or recording devices into restricted temple areas. Check the Trust's latest prohibited-items notice and arrange permitted storage first.", "Unofficial offers of guaranteed darshan or queue access; use the official booking channel.", "Assuming a car can reach the temple door, or planning a fixed return time without allowing for queues."],
    access: "Old-city lanes, security checks and queues form part of this visit. Vehicle drop-off and permitted gates can change. Ask about the current assistance arrangements before travel if walking or standing is difficult.",
    journeys: [
      { mode: "Car / taxi", time: "15–30 min by road", walk: "+ 10–20 min walk", directions: "From Jagatganj, head towards Lahurabir and the Maidagin / Chowk side of the old city, using the permitted drop-off for your entry gate. Continue on foot through the signed approach.", mapMode: "driving" },
      { mode: "Auto / e-rickshaw", time: "20–35 min by road", walk: "+ 10–20 min walk", directions: "Ask for the permitted Kashi Vishwanath Dham drop-off via Lahurabir and Kabir Chaura / Maidagin. Confirm the gate with the driver; the final lanes are on foot.", mapMode: "driving" },
      { mode: "Walking", time: "40–65 min", directions: "Follow a mapped pedestrian route from Jagatganj towards Lahurabir, Kabir Chaura and the old-city temple approaches. Follow security signage rather than an unrestricted map shortcut.", mapMode: "walking" },
    ], transportNote: sharedTransport, nearby: ["dashashwamedh", "namo"],
    resources: [{ label: "Temple Trust ritual schedule", href: "https://shrikashivishwanath.org/general/rituals" }, { label: "Temple Trust entry notices", href: "https://shrikashivishwanath.org/notification" }],
  },
  dashashwamedh: {
    tagline: "Where the river meets the ritual.", duration: "Allow 1–2 hours; set aside longer for the evening aarti.",
    bestTime: "Choose sunrise for softer light and a quieter walk. For evening Ganga Aarti, aim to arrive 45–60 minutes before the locally confirmed start, then allow time for the crowd to disperse.", season,
    hours: [{ label: "Ghat access", detail: "Incredible India lists the ghat as open 24 hours. River levels, festivals and police arrangements can restrict individual approaches." }, { label: "Ganga Aarti", detail: "Usually begins after sunset and lasts around 45 minutes, according to the Kashi visitor portal. The start varies with season and programme; confirm the same-day time rather than relying on a fixed clock time." }],
    highlights: ["Watch the evening lamps and prayers from a permitted viewing area.", "Return in daylight to see boats, pilgrims and the riverfront architecture at a slower pace."],
    carry: ["Grippy walking shoes, drinking water and a small bag you can keep close.", "A light layer for a cool-season evening and a charged phone for the return journey.", "Small cash for agreed services; settle any boat fare and viewing arrangement before boarding."],
    avoid: ["Blocking steps, ritual spaces or exit routes while taking photographs.", "Wet lower steps, entering the river without local guidance, or boarding an overloaded boat.", "Leaving a return pickup until the last moment after the ceremony."],
    access: "Expect a pedestrian approach from the Godowlia side and uneven river steps. A boat is not a substitute for step-free access. Confirm the current viewing and assistance options before arranging a visit with limited mobility.",
    journeys: [
      { mode: "Car / taxi", time: "15–30 min by road", walk: "+ 10–20 min walk", directions: "Travel from Jagatganj towards Chetganj / Benia Bagh and the permitted Godowlia-area drop-off. Walk through the signed market approach to the ghat.", mapMode: "driving" },
      { mode: "Auto / e-rickshaw", time: "20–35 min by road", walk: "+ 10–20 min walk", directions: "Ask for the closest permitted Godowlia drop-off for Dashashwamedh Ghat. Traffic restrictions decide how far the vehicle can go; continue towards the river on foot.", mapMode: "driving" },
      { mode: "Walking", time: "40–65 min", directions: "Head towards Chetganj, Benia Bagh and Godowlia, then follow the main pedestrian approach to Dashashwamedh. Expect busy market lanes.", mapMode: "walking" },
    ], transportNote: `${sharedTransport} Boat viewing starts from an operating ghat, not from Hotel Pradeep. Arrange the road transfer, boarding point, life jackets, fare and return separately; sailings depend on river conditions.`, nearby: ["kashi-vishwanath", "assi"], resources: [{ label: "Kashi portal: Ganga Aarti", href: "https://kashi.gov.in/listing-details/ganga-aarti" }],
  },
  assi: {
    tagline: "Meet Banaras in the morning light.", duration: "Allow 1–2 hours, plus time for breakfast or a boat ride.",
    bestTime: "Arrive before sunrise if the morning programme is your priority. A late-afternoon riverside pause is another good option; it is a different experience from the dawn ceremony shown in our photograph.", season,
    hours: [{ label: "Ghat access", detail: "Incredible India lists Assi Ghat as open 24 hours, subject to local riverfront restrictions." }, { label: "Morning programme", detail: "Subah-e-Banaras is associated with early-morning prayers, music and yoga. Ask locally for that day's programme and start time, which follows the season; ghat access does not guarantee a particular event." }],
    highlights: ["Take in the dawn prayers and light over the Ganges without rushing your return.", "Explore the Assi neighbourhood and its cafés after a riverside walk."],
    carry: ["Walking shoes with grip, water and a light layer for the pre-dawn journey.", "A small towel or sitting cloth if useful; keep it clear of ceremonial spaces.", "A charged phone and an agreed return pickup point away from the busiest steps."],
    avoid: ["Arriving exactly at sunrise if you want to watch the beginning of a morning programme.", "Interrupting worship or yoga sessions for a photograph.", "Descending slippery or submerged steps, or assuming every riverside walkway stays connected during high water."],
    access: "There are stepped sections at the river and busy approach roads. Confirm the usable entry and assistance on the day. Speak to the hotel before arranging a pre-dawn transfer, particularly for children or older guests.",
    journeys: [
      { mode: "Car / taxi", time: "30–55 min by road", walk: "+ 5–10 min walk", directions: "Head south from Jagatganj via the Chetganj / Luxa and Bhelupur side of the city towards Assi. Use a permitted drop-off near the ghat approach.", mapMode: "driving" },
      { mode: "Auto / e-rickshaw", time: "35–60 min by road", walk: "+ 5–10 min walk", directions: "Ask for Assi Ghat via Bhelupur. Agree the fare and a return meeting point before entering the riverfront lanes.", mapMode: "driving" },
      { mode: "Walking", time: "80–110 min", directions: "Take a street route south through the Bhelupur / Assi neighbourhoods. Do not rely on an uninterrupted river-step route, particularly during the monsoon.", mapMode: "walking" },
    ], transportNote: `${sharedTransport} A boat connection can be an optional outing from another operating ghat; it requires a separate transfer and operator arrangement. Hotel Pradeep has no river boarding point.`, nearby: ["durga", "bhu", "dashashwamedh"],
  },
  sarnath: {
    tagline: "A quieter chapter of a sacred landscape.", duration: "Allow 3–4 hours at Sarnath, in addition to travel.",
    bestTime: "Start in the morning, allowing a separate window for the archaeological site and museum. If the museum is essential, avoid planning your only visit on a Friday and reconfirm its schedule before departure.", season,
    hours: [{ label: "Archaeological grounds", detail: "Plan a daylight visit to the excavated remains and Dhamek Stupa. Confirm the current ASI opening, last admission and ticket arrangements; the grounds and museum are separate visits." }, { label: "Museum", detail: "Travel listings commonly give 9:00 am–5:00 pm, closed Fridays. This museum timetable could not be confirmed on a current ASI visitor page during our review: treat it as provisional and verify directly before travelling." }],
    highlights: ["See Dhamek Stupa and the archaeological landscape connected with the Buddha's first teaching.", "If open, visit the museum for the Lion Capital of Ashoka and Buddhist sculpture; leave time for a nearby monastery without assuming a shared entry ticket."],
    carry: ["A sun hat, water and comfortable shoes for the open archaeological grounds.", "Identification and a payment method for the current ticket system.", "A light layer for quiet temple visits and a small bag that is easy to check or store."],
    avoid: ["Combining the museum and monument into one assumed opening time or ticket.", "Climbing ruins, touching carved surfaces or disturbing worship in monasteries.", "Leaving the outdoor grounds to the hottest part of a summer day."],
    access: "The excursion involves open grounds and walking between attractions. Ask about current accessible paths, toilets and transport drop-offs; do not assume all ruins or museum sections have the same access arrangements.",
    journeys: [
      { mode: "Car / taxi", time: "30–50 min by road", walk: "+ 5–10 min walk", directions: "Head north-east from the Teliabagh / Pandeypur side towards Paharia and Ashapur, then Sarnath. Ask to be dropped at the entrance for the monument or museum you are visiting first.", mapMode: "driving" },
      { mode: "Auto / e-rickshaw", time: "40–65 min by road", walk: "+ 5–10 min walk", directions: "Arrange a vehicle willing to cover Sarnath via the Pandeypur / Ashapur corridor. Agree whether waiting time and a return trip are included; e-rickshaw range and permitted routes vary.", mapMode: "driving" },
      { mode: "Walking", time: "120–165 min", directions: "A long urban walk towards the Sarnath / Ashapur area; road traffic and heat make a vehicle a more comfortable choice for most guests. Check a pedestrian route before setting out.", mapMode: "walking" },
    ], transportNote: sharedTransport, nearby: ["namo", "kashi-vishwanath"], resources: [{ label: "ASI: confirm current monument / museum arrangements", href: "https://asi.nic.in/" }, { label: "Tour My India: provisional museum timetable (travel operator)", href: "https://www.tourmyindia.com/states/uttarpradesh/sarnath-museum.html" }],
  },
  ramnagar: {
    tagline: "Royal history across the river.", duration: "Allow 1½–2 hours at the fort, plus the return journey.",
    bestTime: "Go in the morning for a less hurried museum visit. Check the return journey before setting out; festival arrangements and bridge traffic can add considerably to travel time.", season,
    hours: [{ label: "Published visiting hours", detail: "Incredible India lists 10:00 am–5:00 pm. Confirm the fort museum's current opening, last admission and ticket arrangements before departure." }],
    highlights: ["Explore the river-facing fort setting and the historic royal collections where galleries are open.", "Pause for views across the Ganges, keeping to areas permitted for visitors."],
    carry: ["Comfortable shoes for uneven floors and steps, and water for the journey.", "Sun protection, a small amount of cash and your return driver's contact details.", "Time in your itinerary for bridge traffic rather than a tightly scheduled next appointment."],
    avoid: ["Assuming the shortest line across the river is an available road or pedestrian route.", "Touching museum displays or photographing where signs prohibit it.", "Depending on a seasonal pontoon crossing or an unconfirmed boat service for your return."],
    access: "The fort is a historic building with uneven surfaces and stepped areas. Check which museum spaces are open and whether current access suits your group. A road transfer is generally easier to plan than an unconfirmed river crossing.",
    journeys: [
      { mode: "Car / taxi", time: "45–80 min by road", walk: "+ 5–15 min walk", directions: "Travel towards the Lanka / Samne Ghat side and cross by a currently permitted road bridge to Ramnagar. Continue to the fort's visitor entrance; the driver should choose the crossing according to live restrictions.", mapMode: "driving" },
      { mode: "Auto / e-rickshaw", time: "60–95 min by road", walk: "+ 5–15 min walk", directions: "Arrange an auto authorised and willing to cross to Ramnagar, agreeing the bridge route and return fare. A local e-rickshaw may require a transfer; confirm the full journey before boarding.", mapMode: "driving" },
      { mode: "Walking", time: "Not recommended as a hotel-to-fort walk", directions: "The river crossing makes this unsuitable for a simple old-city walk. We do not publish a verified pedestrian bridge itinerary; arrange a road transfer instead." },
    ], transportNote: `${sharedTransport} A private boat visit is a separate, weather-dependent arrangement from an operating ghat, with an onward walk to the fort. Confirm permissions, landing access, life jackets and the return before paying; no fixed boat time is promised here.`, nearby: ["bhu", "assi"],
  },
  bhu: {
    tagline: "A temple within a green campus.", duration: "Allow 1–1½ hours at the temple, plus time for a campus walk.",
    bestTime: "Choose the early morning or a late-afternoon visit during the published opening windows. Allow for the midday closure and remember that this is a working university campus.", season,
    hours: [{ label: "Temple visiting windows", detail: "Incredible India lists 4:00 am–12:00 noon and 1:00–9:00 pm. Confirm daily worship interruptions and campus entry arrangements before travel." }],
    highlights: ["See the New Vishwanath Temple's tall spire and spacious campus setting.", "Enjoy a gentle walk along permitted campus roads; other university attractions have their own opening and admission rules."],
    carry: ["Modest clothing, easily removed footwear and water for the campus walk.", "Identification in case it is requested at campus entry.", "The exact destination name: New Vishwanath Temple, BHU, rather than the old-city Kashi Vishwanath Temple."],
    avoid: ["Giving only 'Vishwanath Temple' as your destination and being driven to the wrong shrine.", "Arriving during the noon closure or entering academic / residential areas without permission.", "Treating quiet worship or university spaces as unrestricted photo locations."],
    access: "BHU is a large campus, so entering the university does not mean you have reached the temple. Agree a suitable drop-off and pickup point, and check the final approach if anyone needs help with walking or steps.",
    journeys: [
      { mode: "Car / taxi", time: "40–65 min by road", walk: "+ 5–15 min walk", directions: "Head south towards Bhelupur / Durgakund and Lanka, enter BHU through a permitted visitor gate, then follow campus directions to New Vishwanath Temple.", mapMode: "driving" },
      { mode: "Auto / e-rickshaw", time: "45–75 min by road", walk: "+ 5–15 min walk", directions: "Ask for New Vishwanath Temple inside BHU via Lanka. Confirm whether the vehicle can continue inside the campus or whether a permitted local transfer is needed.", mapMode: "driving" },
      { mode: "Walking", time: "120–165 min", directions: "This is a long walk south via the Bhelupur / Lanka side, followed by the campus approach. A vehicle is more practical for most guests, especially in hot weather.", mapMode: "walking" },
    ], transportNote: sharedTransport, nearby: ["durga", "assi", "ramnagar"],
  },
  durga: {
    tagline: "Red temple towers beside the kund.", duration: "Allow 45–60 minutes, longer during festival queues.",
    bestTime: "Visit in the morning or after the afternoon reopening. Navratri offers a special devotional atmosphere but also larger crowds; allow more time and follow local queue arrangements.", season,
    hours: [{ label: "Published temple hours", detail: "Incredible India lists 5:00 am–12:00 noon and 4:00–9:00 pm. Confirm same-day worship and festival arrangements locally before leaving." }],
    highlights: ["See the red temple exterior and the setting around Durga Kund.", "Combine the visit with the Assi neighbourhood or BHU, allowing separately for each temple's opening window."],
    carry: ["Modest clothing, a small bag and footwear that is easy to remove.", "Water for the journey, small cash for any offerings you choose, and a secure place for glasses or loose belongings.", "Your driver's number and an agreed pickup point outside the busiest approach."],
    avoid: ["Feeding or approaching monkeys, and leaving food or loose belongings exposed.", "Standing at the edge of the water tank or blocking temple queues for photographs.", "Assuming photography or entry to every shrine area is permitted; ask the attendants."],
    access: "Expect a busy neighbourhood approach, footwear removal and possible steps or queues. Discuss the best drop-off and current assistance with the hotel if a member of your group has limited mobility.",
    journeys: [
      { mode: "Car / taxi", time: "25–45 min by road", walk: "+ 5–10 min walk", directions: "Head south from Jagatganj via Chetganj / Luxa towards Bhelupur and Durgakund. Use a legal drop-off near the temple approach, then continue on foot.", mapMode: "driving" },
      { mode: "Auto / e-rickshaw", time: "30–50 min by road", walk: "+ 5–10 min walk", directions: "Ask for Durga Kund Temple in Durgakund, via Bhelupur. Agree a pickup point clear of the entrance and market traffic.", mapMode: "driving" },
      { mode: "Walking", time: "80–110 min", directions: "Follow a mapped street route south towards Bhelupur and Durgakund. Take care at busy crossings and plan a vehicle return if the heat or distance is tiring.", mapMode: "walking" },
    ], transportNote: sharedTransport, nearby: ["assi", "bhu"],
  },
  namo: {
    tagline: "A wider view of the Ganges.", duration: "Allow 1–1½ hours for a relaxed riverfront visit.",
    bestTime: "Choose morning light or the late afternoon for a promenade walk. Check event-day access first; the managed riverfront can have different entry arrangements from the older open ghats.", season,
    hours: [{ label: "Managed entry", detail: "A reliable fixed daily opening window was not published on the official Kashi listing at our review. Confirm current entry hours, any ticket requirements and event closures locally before departure." }],
    highlights: ["See the contemporary folded-hands landmark and open riverfront spaces.", "Enjoy views of the Ganges and the Malviya Bridge area; our photograph shows this river-facing outlook."],
    carry: ["Water, sun protection and comfortable shoes for the open promenade.", "A charged phone, identification and a payment method if entry or parking charges apply that day.", "A light layer for a cool-season evening by the river."],
    avoid: ["Assuming that a 24-hour listing for another ghat applies to this managed site.", "Entering closed event areas, crossing barriers or going down to unsafe river edges.", "Flying a drone without the required permissions; follow local security restrictions."],
    access: "Check the current public entry, parking and usable accessible route before travelling. Do not assume every viewing platform or river-level area is step-free or open during events and high water.",
    journeys: [
      { mode: "Car / taxi", time: "25–45 min by road", walk: "+ 5–15 min walk", directions: "Travel towards the Maidagin / Machhodari and Rajghat side of the city, near Malviya Bridge, then follow signs to the currently open Namo Ghat entrance and parking.", mapMode: "driving" },
      { mode: "Auto / e-rickshaw", time: "30–50 min by road", walk: "+ 5–15 min walk", directions: "Ask for Namo Ghat's current public entrance near the Rajghat / Malviya Bridge area. Confirm the drop-off and return point because event diversions can change access.", mapMode: "driving" },
      { mode: "Walking", time: "65–95 min", directions: "Use a mapped street route towards Machhodari / Rajghat and the signed entrance. Do not assume the lower riverfront steps form an uninterrupted route from the old city.", mapMode: "walking" },
    ], transportNote: `${sharedTransport} Any boat connection requires a separate arrangement at an operating boarding ghat; confirm landing permission and river conditions. It is not a direct service from the hotel.`, nearby: ["sarnath", "kashi-vishwanath", "dashashwamedh"],
  },
};

export function hotelDirections(destination: string, mode: "driving" | "walking" | "transit" = "driving") {
  const query = new URLSearchParams({ api: "1", origin: "Hotel Pradeep, Jagatganj, Varanasi, Uttar Pradesh", destination, travelmode: mode });
  return `https://www.google.com/maps/dir/?${query.toString()}`;
}
