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
      <section className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto">
          <Breadcrumbs
            array={[{ title: `${programme}`, href: `/programmes/${programme}` }]}
          />
          <div className="py-8 md:py-12 px-4">
            <Header heading={`${programme} Programme`} />
          </div>
        </div>
      </section>

      <section className="container px-2 xs:px-4 space-y-8 lg:max-w-screen-lg mb-14">
        {programme === "undergraduate" && <Undergraduate />}
        {programme === "postgraduate" && <Postgraduate />}
      </section>
    </Main>
  );
}
