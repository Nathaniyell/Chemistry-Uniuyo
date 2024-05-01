import type { Metadata } from "next";
import { Footer, NavBar } from "@/components";
import { Providers, lusitana } from "@/context";

import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Welcome to the Department of Chemistry, University of Uyo",
  description: "Browse through our amazing variety of courses",
  authors: [
    { name: "Nathaniel Essien" },
    {
      name: "Clever Akanimoh",
    },
  ],
  metadataBase: new URL("https://chemistry-uniuyo.vercel.sh"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${lusitana.variable} font-serif`}>
      <Providers>
        <body className="scroll-smooth w-full overflow-x-hidden">
          <NavBar />
          {children}
          <Footer />
        </body>
      </Providers>
    </html>
  );
}
