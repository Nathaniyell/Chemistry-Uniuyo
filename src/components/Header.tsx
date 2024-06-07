"use client";

import Image, { StaticImageData } from "next/image";
import React from "react";

import { motion } from "framer-motion";
import { d } from "@/lib";

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

      <div className="flex flex-col items-center justify-center gap-3 bg-black/60 text-white min-h-[40vh] xs:min-h-[50vh] md:min-h-[70vh] p-4 z-10">
        <motion.h1
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={d.transition}
          className="capitalize text-center text-3xl md:text-5xl max-w-sm md:max-w-xl font-bold"
        >
          {heading}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-center max-w-xl"
        >
          {tagline}
        </motion.p>
      </div>
    </header>
  );
}
