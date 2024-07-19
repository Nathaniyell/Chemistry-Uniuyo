import type { Metadata } from "next";
import { Footer, NavBar } from "@/components";
import { Providers, raleway } from "@/context";
import React from "react"

import "../styles/globals.css";

export const metadata: Metadata = {
  title: {
    template: "%s | Chemistry Department, University of Uyo",
    default: "Welcome to the Department of Chemistry, University of Uyo",
  },
  description: "Browse through our amazing variety of courses",
  keywords: ["Chemistry", "Reaction", "Research", "Science", "Laboratory", "Professor of Chemistry", "Innovation", "Organic Chemistry", "Inorganic Chemistry", "Analytical Chemistry", "Environmental Chemistry", "Physical Chemistry"],
  authors: [
    { name: "Nathaniel Essien", url: "https://nathanielessien.vercel.app" },

    {
      name: "Clever Akanimoh",
      url: "",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${raleway.variable} font-raleway antialiased`}>
      <body className="scroll-smooth !leading-loose">
        <Providers>
          <React.Suspense>
          <NavBar />
          <div className="mt-[4.3rem] lg:mt-[5rem]">

          {children}
          </div>
          <Footer />
          </React.Suspense>
        </Providers>
      </body>
    </html>
  );
}
