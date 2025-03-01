import { Button, Div, Main } from "@/components";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <Main>
      <section className="bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="py-12 md:py-16 px-4 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-950 mb-8">
              Academic Programmes
            </h1>
            <p className="max-w-3xl mx-auto text-gray-600 text-lg">
              Discover our comprehensive undergraduate and postgraduate programmes designed to nurture the next generation of chemistry professionals and researchers.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-12">
        <Div className="flex-col sm:flex-row gap-8 justify-center">
          <ProgrammeButton programme="undergraduate" />
          <ProgrammeButton programme="postgraduate" />
        </Div>
      </section>
    </Main>
  );
}

const ProgrammeButton = ({ programme }: { programme: string }) => (
  <Button className="w-full sm:w-[300px] h-40 bg-blue-50 bg-opacity-70 hover:bg-opacity-40 border-0 hover:border-primary hover:border hover:text-primary">
    <Link href={`/programmes/${programme}`} className="w-full">
      <h2 className="capitalize font-bold text-xl">{programme}</h2>
      <p className="text-sm text-gray-600 mt-2">
        {programme === "undergraduate"
          ? "Four-year B.Sc. Chemistry programme"
          : "M.Sc. and Ph.D. programmes in Chemistry"}
      </p>
    </Link>
  </Button>
);
