import { Lusitana } from "next/font/google";

const lusitana = Lusitana({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lusitana",
  fallback: ["Impact", "Georgia", "serif"],
});

export { lusitana };
