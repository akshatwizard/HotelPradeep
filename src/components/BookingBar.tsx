"use client";
import { useState } from "react";
import { useBooking } from "./BookingProvider";
import { localDate, nextDate } from "@/lib/enquiry.mjs";
import Icon from "./Icon";

export default function BookingBar() {
  const open = useBooking();
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  return (
    <div className="booking-bar-wrap shell">
      <form
        className="booking-bar"
        onSubmit={(event) => {
          event.preventDefault();
          const data = Object.fromEntries(
            new FormData(event.currentTarget),
          ) as Record<string, string>;
          open(data);
        }}
      >
        <div className="booking-bar-label">
          <Icon name="calendar" />
          <span>
            YOUR STAY
            <br />
            <strong>Starts here.</strong>
          </span>
        </div>
        <label>
          Check-in
          <input
            aria-label="Check-in date"
            type="date"
            name="checkIn"
            min={localDate()}
            value={checkIn}
            onChange={(event) => {
              setCheckIn(event.target.value);
              if (checkOut <= event.target.value) setCheckOut("");
            }}
            required
          />
        </label>
        <label>
          Check-out
          <input
            aria-label="Check-out date"
            type="date"
            name="checkOut"
            min={checkIn ? nextDate(checkIn) : nextDate(localDate())}
            value={checkOut}
            onChange={(event) => setCheckOut(event.target.value)}
            required
          />
        </label>
        <label>
          Guests
          <select
            name="noOfPersons"
            defaultValue="2"
            aria-label="Number of guests"
          >
            {Array.from({ length: 10 }, (_, index) => (
              <option value={index + 1} key={index}>
                {String(index + 1).padStart(2, "0")}{" "}
                {index ? "guests" : "guest"}
              </option>
            ))}
          </select>
        </label>
        <label>
          Rooms
          <select
            name="noOfRooms"
            defaultValue="1"
            aria-label="Number of rooms"
          >
            {Array.from({ length: 10 }, (_, index) => (
              <option value={index + 1} key={index}>
                {String(index + 1).padStart(2, "0")} {index ? "rooms" : "room"}
              </option>
            ))}
          </select>
        </label>
        <button className="button" type="submit">
          Enquire now
          <Icon name="arrow" />
        </button>
      </form>
    </div>
  );
}
