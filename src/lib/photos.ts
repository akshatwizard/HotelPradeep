import { hotelPhotos as photo } from "./photo-sources";

export { hotelPhotos as photos } from "./photo-sources";

// Provisional assignments approved for the redesign preview on 23 October 2026.
// Confirm these with the client before treating them as verified room categories.
// Source filenames and numbered contact-sheet IDs are in scripts/hotel-photo-plan.json.
// Change only these lists to update room cards, room carousels, and room tariffs.
export const roomPhotoAssignments = {
  delux: [photo.roomKingWide, photo.roomKingBed, photo.roomKingDesk, photo.bathroomPattern],
  "super-delux": [photo.roomArchedWide, photo.roomArchedBed, photo.roomArchedWindows, photo.roomArchedDesk],
  executive: [photo.roomCarpetWide, photo.roomCarpetBed, photo.roomCarpetSeating, photo.bathroomModern],
};

export const photoAlbums = {
  front: [photo.facadeDusk, photo.facadeNight, photo.facadeDaylight, photo.facadeStreet, photo.entranceEvening, photo.facadeAerial],
  dining: [photo.diningRoom, photo.diningTables, photo.diningBuffet, photo.diningWide, photo.diningDaylight, photo.terraceEvening, photo.terraceTables, photo.terraceGarden, photo.terraceLounge, photo.terraceDaylight, photo.terraceDining, photo.barLounge, photo.barInterior, photo.barTables, photo.barCounter],
  reception: [photo.receptionDesk, photo.lobbyWide, photo.lobbySeating, photo.lobbyCorridor, photo.lobbyArrival, photo.receptionWelcome, photo.lobbyWindows, photo.lobbyTables, photo.lobbySunlight],
  rooms: [photo.roomCarpetWide, photo.roomCarpetWindows, photo.roomCarpetBed, photo.roomCarpetSeating, photo.bathroomModern, photo.bathroomVanity, photo.roomKingWide, photo.roomKingBed, photo.roomKingDesk, photo.bathroomPattern, photo.roomArchedWide, photo.roomArchedBed, photo.roomArchedWindows, photo.roomArchedDesk, photo.roomTwinWide, photo.roomTwinBeds, photo.bathroomClassic, photo.roomClassicWide, photo.roomClassicBed],
  parking: [photo.courtyardWide, photo.courtyardGarden, photo.parkingGarden, photo.parkingCourtyard, photo.parkingHeritage],
};
