"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useRef,
  useCallback,
} from "react";
import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import EnquiryForm from "./EnquiryForm";
import type { BookingDetails } from "./EnquiryForm";
import Icon from "./Icon";

const BookingContext = createContext<(details?: BookingDetails) => void>(
  () => {},
);
export const useBooking = () => useContext(BookingContext);
export default function BookingProvider({ children }: { children: ReactNode }) {
  const [details, setDetails] = useState<BookingDetails | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const pathname = usePathname();
  const open = useCallback((data: BookingDetails = {}) => setDetails(data), []);
  useEffect(() => {
    setDetails(null);
  }, [pathname]);
  useEffect(() => {
    if (!details) return;
    const element = dialog.current;
    element?.showModal();
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      element?.close();
      document.body.style.overflow = previous;
    };
  }, [details]);
  return (
    <BookingContext.Provider value={open}>
      {children}
      {details && (
        <dialog
          className="booking-dialog"
          ref={dialog}
          aria-labelledby="booking-title"
          onCancel={() => setDetails(null)}
          onClick={(event) => {
            if (event.target === event.currentTarget) setDetails(null);
          }}
        >
          <div className="dialog-content">
            <button
              className="icon-button dialog-close"
              aria-label="Close booking enquiry"
              onClick={() => setDetails(null)}
            >
              <Icon name="close" />
            </button>
            <p className="eyebrow">Your Varanasi stay</p>
            <h2 id="booking-title">
              Make yourself
              <br />
              <em>at home.</em>
            </h2>
            <p className="dialog-description">
              Send an enquiry to Hotel Pradeep.
            </p>
            <EnquiryForm initial={details} />
          </div>
        </dialog>
      )}
    </BookingContext.Provider>
  );
}
export function BookButton({
  children = "Enquire about a stay",
  className = "button",
  roomType,
}: {
  children?: ReactNode;
  className?: string;
  roomType?: string;
}) {
  const open = useBooking();
  return (
    <button
      className={className}
      onClick={() => open(roomType ? { roomType } : {})}
    >
      {children}
      <Icon name="arrow" />
    </button>
  );
}
