import { Breadcrumbs, Header, Main, Section } from "@/components";
import { notFound } from "next/navigation";

import { Metadata } from "next";
import Undergraduate from "@/components/Programmes/Undergraduate";
import Postgraduate from "@/components/Programmes/Postgraduate";

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
        array={[{ title: `${programme}`, href: `/programmes/${programme}` }]}
      />

      <Header heading={`${programme} Programme`} />

      <Section>
        <div className="w-full h-full flex flex-col gap-4 gap-y-8 mx-auto max-w-screen-lg">
          {programme === "undergraduate" && <Undergraduate />}

          {programme === "postgraduate" && <Postgraduate />}
        </div>
      </Section>
    </Main>
  );
}
