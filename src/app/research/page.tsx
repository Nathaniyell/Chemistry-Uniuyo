import { Header, Main, ReSection } from "@/components";
import { articleInfo, journalInfo, publications } from "@/lib";
import type { Metadata } from "next/types";

import headerBg from "../../../public/images/researchbg.jpg";

export const metadata: Metadata = {
  title:
    "Exploring Innovative Frontiers: Chemistry Department's Cutting-Edge Research Initiatives",
  description:
    "Embark on a journey of discovery with the Chemistry Department's dynamic research initiatives at the University of Uyo. Browse through an array of research work carried out by our dedicated tutors, uncovering innovative solutions and pushing the boundaries of scientific knowledge. Our commitment to excellence fuels a culture of exploration, fostering advancements that shape the future of chemistry and beyond. Join us in the pursuit of cutting-edge insights and transformative breakthroughs within the realm of chemical sciences.",
};

export default async function Research() {
  return (
    <Main>
      <Header headerBg={headerBg} heading={"publications & research reports"} />

      <ReSection
        type="publication"
        cardsArray={publications}
        filterButtonArray={[
          "organic",
          "inorganic",
          "physical",
          "analytical",
          "environmental",
        ]}
      />
    </Main>
  );
}
