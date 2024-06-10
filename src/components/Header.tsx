"use client";

import Image, { StaticImageData } from "next/image";
import React from "react";

import { motion } from "framer-motion";
import { d } from "@/lib";
import clsx from "clsx";

type HeaderProps = {
  headerBg?: StaticImageData | string;
  heading: string;
  tagline?: string;
};

export default function Header({ headerBg, heading, tagline }: HeaderProps) {
  return (
    <header className={clsx(`relative w-full `)}>
      {headerBg && (
        <Image
          src={headerBg}
          alt={"header background"}
          className="absolute top-0 left-0 -z-10 size-full opacity-90"
        />
      )}

      <div
        className={clsx(
          "flex flex-col items-center justify-center gap-4 p-4 z-10",
          {
            "bg-black/65 text-white min-h-[40vh] xs:min-h-[50vh] md:min-h-[70vh]":
              headerBg !== undefined,
            "pt-16 shadow bg-blue-100": headerBg === undefined,
          }
        )}
      >
        <motion.h1
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={d.transition}
          className="capitalize text-center text-2xl xs:text-3xl md:text-4xl max-w-sm md:max-w-2xl font-bold text-secondary"
        >
          {heading}
        </motion.h1>
{!tagline &&       <hr />}
        {tagline && (
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.5, ease: "linear" }}
            className="max-w-xl text-center"
          >
            {tagline}
          </motion.p>
        )}
      </div>
    </header>
  );
}
