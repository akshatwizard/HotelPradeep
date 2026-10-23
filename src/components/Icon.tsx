import type { SVGProps } from "react";

const paths = {
  arrow: "M4 12h16m-6-6 6 6-6 6",
  diagonal: "M6 18 18 6M6 6h12v12",
  chevron: "m9 5 7 7-7 7",
  close: "m6 6 12 12M6 18 18 6",
  menu: "M4 7h16M4 12h16M4 17h16",
  check: "m5 12 4 4L19 6",
  phone: "M7 3 4 5c-2 5 10 17 15 15l2-3-5-4-2 2-5-5 2-2-4-5Z",
  mail: "M3 5h18v14H3V5Zm0 1 9 7 9-7",
  pin: "M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0ZM9 10a3 3 0 1 0 6 0 3 3 0 1 0-6 0",
  bed: "M3 18V7m18 11V7M3 16h18M3 10h18M6 10V6h12v4M3 16v4m18-4v4",
  wifi: "M3 8a15 15 0 0 1 18 0M6 12a10 10 0 0 1 12 0m-9 4a5 5 0 0 1 6 0m-3 4h.01",
  coffee: "M4 4h12v10a6 6 0 0 1-12 0V4Zm12 1h3a3 3 0 0 1 0 6h-3M3 21h15",
  people:
    "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2m20 0v-2a4 4 0 0 0-3-3.9M9 3a4 4 0 1 0 0 8 4 4 0 1 0 0-8m8 0a4 4 0 0 1 0 8",
  clock: "M12 3a9 9 0 1 0 0 18 9 9 0 1 0 0-18m0 4v5l4 2",
  car: "m5 7 2-4h10l2 4 2 4v7H3v-7l2-4ZM3 10h18M6 14h2m8 0h2M5 18v3m14-3v3",
  star: "m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9L12 3Z",
  play: "m9 5 11 7-11 7V5Z",
  calendar: "M4 5h16v16H4V5Zm0 5h16M8 3v4m8-4v4",
  sparkle: "m12 3 3 6 6 3-6 3-3 6-3-6-6-3 6-3 3-6Z",
  shield: "m12 3 8 3v6c0 5-8 10-8 10S4 17 4 12V6l8-3Zm-4 9 3 3 5-6",
  lift: "M4 3h16v18H4V3Zm4 6 4-4 4 4m-8 6 4 4 4-4",
  wash: "M4 3h16v18H4V3Zm0 4h16M7 5h.01M9 5h.01m-2 9a5 5 0 1 0 10 0 5 5 0 1 0-10 0m0 0c3-3 7 3 10 0",
} as const;

export type IconName = keyof typeof paths;
export default function Icon({
  name,
  ...props
}: SVGProps<SVGSVGElement> & { name: IconName }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d={paths[name]} />
    </svg>
  );
}
