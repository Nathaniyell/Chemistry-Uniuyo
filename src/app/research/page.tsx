import { Breadcrumbs, Header, Main, ReSection } from "@/components";
import { publications } from "@/lib";
import type { Metadata } from "next/types";

import headerBg from "../../../public/images/researchbg.jpg";
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
      <section className="w-full">
        <Header heading="Research" />
        <Breadcrumbs array={[{ title: "Research", href: "/research" }]} />
      </section>

      <Suspense
        key={filterby + search + currentPage}
        fallback={
          <div className="size-48 flex items-center justify-center">
            loading...
          </div>
        }
      >
        <ReSection
          type=""
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
