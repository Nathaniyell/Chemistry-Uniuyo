import { Breadcrumbs, Header, Main } from "@/components";
import { notFound } from "next/navigation";

import HeaderImage from "@/public/images/Graduation/class018.jpg";
import PostHeaderImage from "@/public/images/chemistry_lab/group-staff.jpg";
import ProgrammesSection from "@/components/Programmes/ProgrammesSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chemistry Programmes",
};

export default function ProgrammesPage({
  params: { programme },
}: {
  params: { programme: "undergraduate" | "postgraduate" };
}) {
  const isProgramme =
    programme === "postgraduate"
      ? true
      : programme === "undergraduate"
      ? true
      : false;

  if (!isProgramme) notFound();

  return (
    <Main>
      <section className="w-full">
        <Breadcrumbs
          array={[
            { title: "Undergraduate", href: "/programmes/undergraduate" },
            { title: "Postgraduate", href: `/programmes/postgraduate` },
          ]}
        />
        <Header
          headerBg={
            programme === "postgraduate" ? PostHeaderImage : HeaderImage
          }
          heading={`${programme} Programme`}
        />
      </section>

      <ProgrammesSection programme={programme} />
    </Main>
  );
}
