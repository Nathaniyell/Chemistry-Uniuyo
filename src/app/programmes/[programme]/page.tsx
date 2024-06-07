import { Breadcrumbs, Header, Main } from "@/components";
import { notFound } from "next/navigation";

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
      <Breadcrumbs
        array={[
          { title: "Undergraduate", href: "/programmes/undergraduate" },
          { title: "Postgraduate", href: `/programmes/postgraduate` },
        ]}
      />

      <Header heading={`${programme} Programme`} />

      <ProgrammesSection programme={programme} />
    </Main>
  );
}
