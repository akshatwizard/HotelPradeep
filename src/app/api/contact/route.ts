import { sendEnquiry } from "@/lib/send-enquiry.mjs";
export const runtime = "nodejs";
export async function POST(request: Request) {
  return sendEnquiry(request, "booking");
}
