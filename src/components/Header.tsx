import Image, { StaticImageData } from "next/image";
import React from "react";

type HeaderProps = {
  headerBg: StaticImageData | string;
  heading: string;
  tagline?: string;
};

export default function Header({ headerBg, heading, tagline }: HeaderProps) {
  return (
    <header className="relative min-h-[62vh] md:min-h-[65vh] w-screen flex flex-col items-center justify-center px-3 p-1 sm:px-0">
      <Image
        src={headerBg}
        alt={"header background"}
        className="absolute top-0 left-0 -z-10 h-full w-full opacity-90"
      />

      <div className="container flex flex-col items-center justify-center gap-3 bg-blue-950 text-white bg-opacity-20 backdrop-blur w-[97%] max-w-[500px] rounded-md p-4 z-10">
        <h1 className="capitalize text-center text-[1.7rem] sm:text-2xl lg:text-3xl font-bold">
          {heading}
        </h1>

        <p className="text-center">{tagline}</p>
      </div>
    </header>
  );
}
