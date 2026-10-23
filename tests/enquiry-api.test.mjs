import test from "node:test";
import assert from "node:assert/strict";
import { sendEnquiry } from "../src/lib/send-enquiry.mjs";

const details = {
  name: "A Guest",
  email: "guest@example.com",
  phone: "+91 98765 43210",
  message: '<script>alert("test")</script>',
  roomType: "Delux",
  checkIn: "2099-11-01",
  checkOut: "2099-11-03",
  noOfRooms: "1",
  noOfPersons: "2",
};
const request = (data) =>
  new Request("https://hotelpradeep.com/api/contact", {
    method: "POST",
    body: JSON.stringify(data),
  });
test("invalid booking returns 400 and never attempts delivery", async () => {
  let sent = false;
  const response = await sendEnquiry(request({}), "booking", {
    apiKey: "test",
    send: async () => {
      sent = true;
    },
  });
  assert.equal(response.status, 400);
  assert.equal(sent, false);
});
test("malformed JSON and oversized requests have distinct failure statuses", async () => {
  const malformed = await sendEnquiry(
    new Request("https://hotelpradeep.com/api/contact", {
      method: "POST",
      body: "bad JSON",
    }),
    "booking",
  );
  assert.equal(malformed.status, 400);
  const oversized = await sendEnquiry(
    request({ message: "x".repeat(12001) }),
    "booking",
  );
  assert.equal(oversized.status, 413);
});
test("missing email configuration returns 503 instead of false success", async () => {
  const response = await sendEnquiry(request(details), "booking", {
    apiKey: "",
  });
  assert.equal(response.status, 503);
});
test("provider errors and exceptions return 502 without leaking provider details", async () => {
  for (const send of [
    async () => ({ error: { message: "sensitive provider detail" } }),
    async () => {
      throw new Error("sensitive provider detail");
    },
  ]) {
    const response = await sendEnquiry(request(details), "booking", {
      apiKey: "test",
      send,
    });
    assert.equal(response.status, 502);
    assert.equal(
      (await response.text()).includes("sensitive provider detail"),
      false,
    );
  }
});
test("successful booking escapes HTML and preserves the hotel recipient and reply address", async () => {
  let payload;
  const response = await sendEnquiry(request(details), "booking", {
    apiKey: "test",
    send: async (value) => {
      payload = value;
      return { data: { id: "mock-email" } };
    },
  });
  assert.equal(response.status, 200);
  assert.deepEqual(payload.to, ["info@hotelpradeep.com"]);
  assert.equal(payload.replyTo, "guest@example.com");
  assert.equal(payload.html.includes("<script>"), false);
  assert.ok(payload.html.includes("&lt;script&gt;"));
});
test("feedback uses its own subject and does not require room fields", async () => {
  let payload;
  const response = await sendEnquiry(
    request({
      name: details.name,
      email: details.email,
      phone: details.phone,
      message: "A hotel enquiry",
    }),
    "feedback",
    {
      apiKey: "test",
      send: async (value) => {
        payload = value;
        return { data: { id: "mock-email" } };
      },
    },
  );
  assert.equal(response.status, 200);
  assert.ok(payload.subject.includes("Feedback"));
});
