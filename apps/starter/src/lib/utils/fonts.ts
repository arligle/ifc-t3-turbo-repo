import localFont from "next/font/local";

export const fontSans = localFont({
  src: "../../styles/fonts/inter/Inter-Regular.ttf",
  variable: "--font-sans",
  display: "swap",
});
export const fontHeading = localFont({
  src: "../../styles/fonts/inter/Inter-SemiBold.ttf",
  variable: "--font-heading",
  weight: "600",
  display: "swap",
});

// @example remote fonts
/* import { Roboto as FontHeading, Inter as FontSans } from "next/font/google";
const fontSans = FontSans({
  subsets: ["latin", "cyrillic"],
  variable: "--font-sans",
});
const fontHeading = FontHeading({
  subsets: ["latin", "cyrillic"],
  variable: "--font-heading",
  weight: "500",
}); */
