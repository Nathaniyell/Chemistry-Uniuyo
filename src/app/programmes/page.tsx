import { Button, Div, Main, Section } from "@/components";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <Main>
      <Section>
        <Div className=" flex-col sm:flex-row ">
          <ProgrammeButton programme="undergraduate" />
          <ProgrammeButton programme="postgraduate" />
        </Div>
      </Section>
    </Main>
  );
}

const ProgrammeButton = ({ programme }: { programme: string }) => (
  <Button className="w-full sm:w-[200px] h-32 bg-blue-50 bg-opacity-70 hover:bg-opacity-40 border-0 hover:border-primary hover:border hover:text-primary">
    <Link href={`/programmes/${programme}`} className="w-full">
      <h1 className="capitalize font-bold">{programme}</h1>
    </Link>
  </Button>
);
