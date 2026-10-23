import { Resend } from "resend";
import { escapeHtml, validateEnquiry } from "./enquiry.mjs";

export async function sendEnquiry(request, kind, options = {}) {
  let body;
  try {
    const text = await request.text();
    if (text.length > 12000)
      return Response.json(
        { message: "Your enquiry is too long." },
        { status: 413 },
      );
    body = JSON.parse(text);
  } catch {
    return Response.json(
      { message: "Please submit a valid enquiry." },
      { status: 400 },
    );
  }
  // Validate against the hotel's calendar, independent of the function region.
  const today = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Kolkata",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date());
  const result = validateEnquiry(body, kind, today);
  if (result.error || !result.data)
    return Response.json(
      { message: result.error || "Please check your details." },
      { status: 400 },
    );
  const key = options.apiKey ?? process.env.RESEND_API_KEY;
  if (!key)
    return Response.json(
      {
        message:
          "Email enquiries are temporarily unavailable. Please call +91 7408423503.",
      },
      { status: 503 },
    );
  const data = result.data;
  const rows =
    kind === "booking"
      ? [
          ["Name", data.name],
          ["Email", data.email],
          ["Contact number", data.phone],
          ["Check-in", data.checkIn],
          ["Check-out", data.checkOut],
          ["Room type", data.roomType],
          ["Rooms", data.noOfRooms],
          ["Guests", data.noOfPersons],
          ["Message", data.message],
        ]
      : [
          ["Name", data.name],
          ["Email", data.email],
          ["Contact number", data.phone],
          ["Message", data.message],
        ];
  try {
    const send =
      options.send || ((payload) => new Resend(key).emails.send(payload));
    const sent = await send({
      from:
        process.env.RESEND_FROM_EMAIL ||
        "Hotel Pradeep <onboarding@resend.dev>",
      to: ["info@hotelpradeep.com"],
      ...(data.email ? { replyTo: data.email } : {}),
      subject:
        kind === "booking"
          ? "New Room Booking Enquiry from Hotel Pradeep Website"
          : "Feedback Message from Hotel Pradeep Website Contact Page",
      html: `<h2>${kind === "booking" ? "Room booking enquiry" : "Contact enquiry"} — Hotel Pradeep</h2><table>${rows.map(([label, value]) => `<tr><th align="left" style="padding:8px">${label}</th><td style="padding:8px;white-space:pre-wrap">${escapeHtml(value)}</td></tr>`).join("")}</table>`,
      text: rows.map(([label, value]) => `${label}: ${value}`).join("\n"),
    });
    if (sent.error || !sent.data?.id)
      return Response.json(
        {
          message:
            "Unable to send your enquiry. Please try again or call +91 7408423503.",
        },
        { status: 502 },
      );
    return Response.json(
      { message: "Enquiry sent successfully." },
      { status: 200 },
    );
  } catch {
    return Response.json(
      {
        message:
          "Unable to send your enquiry. Please try again or call +91 7408423503.",
      },
      { status: 502 },
    );
  }
}
