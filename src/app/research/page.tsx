import { Main, ReSection } from "@/components";
import { publications } from "@/lib";
import type { Metadata } from "next/types";
import { Suspense } from "react";
import { chemistryUnits } from "@/lib/data";

export const metadata: Metadata = {
  title:
    "Exploring Innovative Frontiers: Chemistry Department's Cutting-Edge Research Initiatives",
  description:
    "Embark on a journey of discovery with the Chemistry Department's dynamic research initiatives at the University of Uyo. Browse through an array of research work carried out by our dedicated tutors, uncovering innovative solutions and pushing the boundaries of scientific knowledge. Our commitment to excellence fuels a culture of exploration, fostering advancements that shape the future of chemistry and beyond. Join us in the pursuit of cutting-edge insights and transformative breakthroughs within the realm of chemical sciences.",
};

export default async function Research({
  searchParams: { filterby, search, currentPage },
}: {
  searchParams: { filterby: string; search: string; currentPage: string };
}) {
  return (
    <Main>
      <Suspense
        key={filterby + search + currentPage}
        fallback={
          <div className="size-48 flex items-center justify-center">
            loading...
          </div>
        }
      >
        <section className="bg-gradient-to-b from-blue-50 to-white">
          <div className="max-w-7xl mx-auto">
            <div className="py-12 md:py-16 px-4 text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-950 mb-8">
                Research Publications
              </h1>
              <p className="max-w-3xl mx-auto text-gray-600 text-lg">
                Explore groundbreaking research and publications from our students, showcasing our commitment to advancing chemical sciences and solving real-world challenges.
              </p>
            </div>
          </div>
        </section>

        <ReSection
          cardsArray={publications}
          filterButtonArray={chemistryUnits}
          filterby={filterby || ""}
          search={search || ""}
          currentPage={Number(currentPage) || 1}
        />
      </Suspense>
    </Main>
  );
}
