import { Main } from "@/components";
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

  const getSubtitle = () => {
    if (programme === "undergraduate") {
      return "Our four-year B.Sc. Chemistry programme provides a strong foundation in chemical principles, laboratory techniques, and practical applications, preparing students for successful careers in chemistry and related fields.";
    }
    return "Our advanced postgraduate programmes (M.Sc. and Ph.D.) offer specialized research opportunities and advanced training in various chemistry disciplines, fostering innovation and academic excellence.";
  };

  return (
    <Main>
      <section className="bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="py-12 md:py-16 px-4 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-950 mb-8 capitalize">
              {programme} Programme
            </h1>
            <p className="max-w-3xl mx-auto text-gray-600 text-lg">
              {getSubtitle()}
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-4">
        {programme === "undergraduate" && <Undergraduate />}
        {programme === "postgraduate" && <Postgraduate />}
      </section>
    </Main>
  );
}
