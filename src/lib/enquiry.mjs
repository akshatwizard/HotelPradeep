export function localDate(date = new Date()) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}
export function nextDate(value) {
  const date = new Date(`${value}T12:00:00`);
  date.setDate(date.getDate() + 1);
  return Number.isNaN(date.getTime()) ? "" : localDate(date);
}
export function escapeHtml(value) {
  return String(value ?? "").replace(
    /[&<>"']/g,
    (char) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        char
      ],
  );
}
const isDate = (value) =>
  /^\d{4}-\d{2}-\d{2}$/.test(value) &&
  !Number.isNaN(new Date(`${value}T12:00:00`).getTime()) &&
  localDate(new Date(`${value}T12:00:00`)) === value;
export function validateEnquiry(body, kind, today = localDate()) {
  if (!body || typeof body !== "object" || Array.isArray(body))
    return { error: "Please enter your enquiry details." };
  const fields = [
    "name",
    "email",
    "phone",
    "message",
    "checkIn",
    "checkOut",
    "roomType",
    "noOfRooms",
    "noOfPersons",
    "website",
  ];
  /** @type {Record<string, string>} */
  const data = {};
  for (const field of fields) {
    if (
      body[field] != null &&
      typeof body[field] !== "string" &&
      typeof body[field] !== "number"
    )
      return { error: "Please check your form details." };
    data[field] = String(body[field] ?? "").trim();
    if (data[field].length > (field === "message" ? 3000 : 200))
      return { error: "One of your entries is too long." };
  }
  if (data.website) return { error: "Unable to submit this enquiry." };
  if (data.name.length < 2) return { error: "Please enter your name." };
  if (
    !/^[+\d\s().-]{7,25}$/.test(data.phone) ||
    data.phone.replace(/\D/g, "").length < 7
  )
    return { error: "Please enter a valid phone number." };
  if (
    (kind === "feedback" || data.email) &&
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)
  )
    return { error: "Please enter a valid email address." };
  if (!data.message) return { error: "Please add a message." };
  if (kind === "booking") {
    if (!isDate(data.checkIn) || !isDate(data.checkOut))
      return { error: "Please select valid check-in and check-out dates." };
    if (data.checkIn < today)
      return { error: "Check-in cannot be in the past." };
    if (data.checkOut <= data.checkIn)
      return { error: "Check-out must be after check-in." };
    if (!["Delux", "Super Delux", "Executives"].includes(data.roomType))
      return { error: "Please choose a room type." };
    if (
      ![data.noOfRooms, data.noOfPersons].every(
        (value) =>
          /^\d+$/.test(value) && Number(value) >= 1 && Number(value) <= 1000,
      )
    )
      return { error: "Please enter valid numbers of rooms and guests." };
  }
  return { data };
}
