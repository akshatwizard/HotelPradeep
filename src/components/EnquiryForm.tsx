"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { localDate, nextDate, validateEnquiry } from "@/lib/enquiry.mjs";
import Icon from "./Icon";

export type BookingDetails = {
  checkIn?: string;
  checkOut?: string;
  noOfRooms?: string;
  noOfPersons?: string;
  roomType?: string;
};
export default function EnquiryForm({
  kind = "booking",
  initial = {},
}: {
  kind?: "booking" | "feedback";
  initial?: BookingDetails;
}) {
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");
  const [checkIn, setCheckIn] = useState(initial.checkIn || "");
  const [checkOut, setCheckOut] = useState(initial.checkOut || "");
  const booking = kind === "booking";
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;
    const data = Object.fromEntries(new FormData(event.currentTarget));
    const result = validateEnquiry(data, kind);
    if (result.error) {
      setStatus("error");
      setMessage(result.error);
      return;
    }
    setStatus("sending");
    setMessage("Sending your enquiry…");
    try {
      const response = await fetch(booking ? "/api/contact" : "/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (!response.ok)
        throw new Error(
          result.message ||
            "Unable to send your enquiry. Please call the hotel.",
        );
      setStatus("success");
      setMessage("Enquiry sent. We will reply within 24–48 hours.");
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "Unable to send. Please try again.",
      );
    }
  }
  if (status === "success")
    return (
      <div className="form-success" role="status">
        <span className="success-icon">
          <Icon name="check" />
        </span>
        <h3>Thank you for reaching out.</h3>
        <p>{message}</p>
        {booking && (
          <p className="small-note">
            This is a reservation enquiry. Your stay is confirmed once the hotel
            contacts you.
          </p>
        )}
        <button
          className="text-link"
          onClick={() => {
            setStatus("idle");
            setMessage("");
          }}
        >
          Send another enquiry
          <Icon name="arrow" />
        </button>
      </div>
    );
  return (
    <form className="enquiry-form" onSubmit={submit}>
      {booking && (
        <div className="form-grid">
          <label>
            Check-in
            <input
              name="checkIn"
              type="date"
              min={localDate()}
              value={checkIn}
              required
              onChange={(event) => {
                const value = event.target.value;
                setCheckIn(value);
                if (checkOut <= value) setCheckOut("");
              }}
            />
          </label>
          <label>
            Check-out
            <input
              name="checkOut"
              type="date"
              min={checkIn ? nextDate(checkIn) : nextDate(localDate())}
              value={checkOut}
              required
              onChange={(event) => setCheckOut(event.target.value)}
            />
          </label>
          <label>
            Guests
            <input
              name="noOfPersons"
              type="number"
              min="1"
              max="1000"
              defaultValue={initial.noOfPersons || "2"}
              required
            />
          </label>
          <label>
            Rooms
            <input
              name="noOfRooms"
              type="number"
              min="1"
              max="1000"
              defaultValue={initial.noOfRooms || "1"}
              required
            />
          </label>
          <label className="span-two">
            Room type
            <select
              name="roomType"
              defaultValue={initial.roomType || ""}
              required
            >
              <option value="">Select your room</option>
              <option value="Delux">Deluxe</option>
              <option value="Super Delux">Super Deluxe</option>
              <option value="Executives">Executive</option>
            </select>
          </label>
        </div>
      )}
      <div className="form-grid">
        <label className={booking ? "span-two" : ""}>
          Your name
          <input
            name="name"
            autoComplete="name"
            placeholder="Full name"
            minLength={2}
            maxLength={200}
            required
          />
        </label>
        <label>
          Phone number
          <input
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="Your contact number"
            maxLength={25}
            required
          />
        </label>
        <label>
          Email{booking && <span className="optional"> (optional)</span>}
          <input
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            maxLength={200}
            required={!booking}
          />
        </label>
        <label className="span-two">
          Message
          <textarea
            name="message"
            placeholder={
              booking ? "Tell us more about your stay…" : "How can we help?"
            }
            rows={3}
            maxLength={3000}
            required
          />
        </label>
      </div>
      <div className="honeypot" aria-hidden="true">
        <label>
          Website
          <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <p
        className={`form-status ${status === "error" ? "form-error" : ""}`}
        role={status === "error" ? "alert" : "status"}
        aria-live="polite"
      >
        {message}
      </p>
      <button
        className="button w-full"
        type="submit"
        disabled={status === "sending"}
      >
        {status === "sending" ? "Sending…" : "Send enquiry"}
        <Icon name="arrow" />
      </button>
      {booking && (
        <p className="small-note">
          Send an enquiry for your preferred dates. Our team will get in touch
          to confirm availability.
        </p>
      )}
    </form>
  );
}
