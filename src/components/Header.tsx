import Image, { StaticImageData } from "next/image";
import React from "react";

type HeaderProps = {
  headerBg: StaticImageData | string;
  heading: string;
  tagline?: string;
};

export default function Header({ headerBg, heading, tagline }: HeaderProps) {
  return (
    <header className="relative min-h-[50vh] w-screen">
      <Image
        src={headerBg}
        alt={"header background"}
        className="absolute top-0 left-0 -z-10 size-full opacity-90"
      />

      <div className="flex flex-col items-center justify-center gap-3 bg-black/50 text-white min-h-[50vh] xs:min-h-[62vh] md:min-h-[68vh] p-4 z-10">
        <h1 className="capitalize text-center text-3xl md:text-5xl max-w-sm md:max-w-xl font-bold">
          {heading}
        </h1>

        <p className="text-center">{tagline}</p>
      </div>
    </header>
  );
}
