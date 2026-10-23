import test from "node:test";
import assert from "node:assert/strict";
import {
  localDate,
  nextDate,
  validateEnquiry,
  escapeHtml,
} from "../src/lib/enquiry.mjs";

const booking = {
  name: "A Guest",
  phone: "+91 98765 43210",
  email: "guest@example.com",
  checkIn: "2026-11-01",
  checkOut: "2026-11-03",
  roomType: "Delux",
  noOfRooms: "1",
  noOfPersons: "2",
  message: "Please confirm availability.",
};
test("accepts a valid booking and permits an omitted booking email", () => {
  assert.ok(validateEnquiry(booking, "booking", "2026-10-23").data);
  assert.ok(
    validateEnquiry({ ...booking, email: "" }, "booking", "2026-10-23").data,
  );
});
test("rejects past, reversed, impossible and same-day checkout dates", () => {
  for (const dates of [
    { checkIn: "2026-10-22" },
    { checkOut: "2026-11-01" },
    { checkOut: "2026-10-31" },
    { checkIn: "2026-02-30" },
  ])
    assert.ok(
      validateEnquiry({ ...booking, ...dates }, "booking", "2026-10-23").error,
    );
});
test("rejects malformed quantities and unknown room categories", () => {
  for (const fields of [
    { noOfRooms: "0" },
    { noOfRooms: "1.5" },
    { noOfPersons: "two" },
    { roomType: "Unknown" },
  ])
    assert.ok(
      validateEnquiry({ ...booking, ...fields }, "booking", "2026-10-23").error,
    );
});
test("validates feedback, contact details, object shapes and message bounds", () => {
  assert.ok(validateEnquiry(booking, "feedback").data);
  for (const body of [
    null,
    [],
    {},
    { ...booking, email: "" },
    { ...booking, name: ["Guest"] },
    { ...booking, phone: "abc" },
    { ...booking, message: "x".repeat(3001) },
    { ...booking, website: "spam" },
  ])
    assert.ok(validateEnquiry(body, "feedback").error);
});
test("calendar dates do not use UTC conversion and roll over month/year boundaries", () => {
  assert.equal(localDate(new Date(2026, 9, 23, 0, 5)), "2026-10-23");
  assert.equal(nextDate("2026-12-31"), "2027-01-01");
  assert.equal(nextDate("2028-02-28"), "2028-02-29");
  assert.equal(nextDate("invalid"), "");
});
test("escapes email HTML while preserving readable messages", () => {
  assert.equal(
    escapeHtml("<script>\"x\" & 'y'</script>"),
    "&lt;script&gt;&quot;x&quot; &amp; &#39;y&#39;&lt;/script&gt;",
  );
});
