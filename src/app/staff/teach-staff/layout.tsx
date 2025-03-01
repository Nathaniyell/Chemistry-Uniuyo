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


export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen pb-10">
      <section className="bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="py-12 md:py-16 px-4 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-950 mb-8">
              Teaching Staff
            </h1>
            <p className="max-w-3xl mx-auto text-gray-600 text-lg">
              Meet our distinguished faculty members who are dedicated to excellence in teaching, research, and mentorship in the field of chemistry.
            </p>
          </div>
        </div>
      </section>

      {children}
    </main>
  );
}
