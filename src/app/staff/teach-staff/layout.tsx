import type { Metadata } from "next";


export const metadata: Metadata = {
  title: 'Teaching Staff',

  description: "Explore the profiles of our esteemed teaching staff who are committed to delivering top-notch education in the Department of Chemistry at the University of Uyo. Learn more about their academic backgrounds, research interests, and contributions to the field of chemistry.",

  keywords: [
    "Teaching staff",
    "University of Uyo",
    "Department of Chemistry",
    "Staff profiles",
    "Academic staff",
    "Chemistry educators",
    "Chemistry Staff",
    "Chemistry Teachers",
    "Research interests",
    "Academic background",
    "Professor of Chemistry"
  ]
};


export default function Page({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>

      {children}

    </>

  );
}
