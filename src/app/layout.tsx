import type { Metadata } from "next";
import { Footer, NavBar } from "@/components";
import { Providers, raleway } from "@/context";

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
      <body className="scroll-smooth">
        <Providers>
          <NavBar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
