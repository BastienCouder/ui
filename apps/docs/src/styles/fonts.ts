import { Inter, Josefin_Sans, Kanit } from "next/font/google";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";

export const fontDisplay = Kanit({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400"
});
export const JosephinFont = Kanit({
  variable: "--font-josephin",
  subsets: ["latin"],
  weight: "400",
});

export const geistSans = GeistSans;
export const geistMono = GeistMono;
