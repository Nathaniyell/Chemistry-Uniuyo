import type { Metadata } from "next";
import { Footer, NavBar } from "@/components";
import { Providers, raleway } from "@/context";
import React from "react"
import "../styles/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://chemistry.uniuyo.edu.ng'),
  title: {
    template: "%s | Chemistry Department, University of Uyo",
    default: "Welcome to the Department of Chemistry, University of Uyo",
  },
  description: "Discover world-class chemistry education at the University of Uyo. Offering comprehensive programs in Organic, Inorganic, Analytical, Environmental, and Physical Chemistry with state-of-the-art research facilities.",
  keywords: [
    "Chemistry Department Uniuyo",
    "University of Uyo Chemistry",
    "Chemistry Degree Nigeria",
    "Chemistry", "Reaction", "Research", "Science", "Laboratory", "Professor of Chemistry", "Innovation", "Organic Chemistry", "Inorganic Chemistry", "Analytical Chemistry", "Environmental Chemistry", "Physical Chemistry", "Uniuyo", "Uniuyo logo", "Chemistry Staff", "Chemistry teacher", "University of Uyo Logo", "Uniuyo Calender"
  ],
  authors: [
    { name: "Nathaniel Essien", url: "https://nathanielessien.vercel.app" },

    {
      name: "Clever Akanimoh",
      url: "",
    },
  ],
  openGraph: {
    type: 'website',
    locale: 'en_NG',
    title: 'Chemistry Department - University of Uyo',
    description: 'Discover world-class chemistry education at the University of Uyo',
    siteName: 'Chemistry Department, University of Uyo',
    images: [
      {
        url: "/public/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: 'Chemistry Department University of Uyo'
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chemistry Department - University of Uyo',
    description: 'Discover world-class chemistry education at the University of Uyo',
    images: ['/public/images/logo.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'UePvO3iGA7E-8QyjgH4STYw1y6s6TnIjdJwNP6VuJhI',
  },
  alternates: {
    canonical: 'https://chemistry.uniuyo.edu.ng',
  },
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
