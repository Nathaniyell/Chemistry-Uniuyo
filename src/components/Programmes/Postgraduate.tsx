"use client";

import { AcademicCapIcon } from "@heroicons/react/16/solid";
import React, { useState } from "react";
import Courses from "./Courses";
import clsx from "clsx";
import { Button } from "../HTMLTags";
import { postgraduateDetails } from "@/lib/postgraduate";
import { OurStudent } from ".";
import { motion } from "framer-motion";
import { animateDiv } from "@/lib/framerAnimation";

export default function Postgraduate() {
  const [programmeType, setProgrammeType] = useState("msc");
  return (
    <section className="w-full space-y-8">
      <header className="w-full flex items-center gap-2">
        <Button
          className={clsx({
            "bg-primary text-white": programmeType === "msc",
          })}
          onClick={() => setProgrammeType("msc")}
        >
          M.Sc
        </Button>
        <Button
          className={clsx({
            "bg-primary text-white": programmeType === "phd",
          })}
          onClick={() => setProgrammeType("phd")}
        >
          Ph.D
        </Button>
      </header>
      <motion.div
        initial={animateDiv.initial}
        animate={animateDiv.whileInView}
        transition={animateDiv.transition}
        className="space-y-8"
      >
        {postgraduateDetails.map(({ heading, description, icon }, index) => (
          <OurStudent
            key={index}
            heading={`${
              programmeType === "phd"
                ? heading.toLowerCase()
                : heading.toLowerCase().replace("thesis", "dissertation")
            } (${programmeType === "phd" ? "Ph.D" : "M.Sc"})`}
            duration={
              programmeType === "phd"
                ? description
                : description
                    .replaceAll("M.Sc", "B.Sc")
                    .replaceAll("Ph.D", "M.Sc")
                    .replace("12", "6")
                    .replace("thesis", "dissertation")
            }
            Icon={icon}
          />
        ))}
      </motion.div>
      <Courses
        Icon={AcademicCapIcon}
        heading={`${
          programmeType === "phd" ? "Ph.D" : "M.Sc"
        } Postgraduate Courses`}
        type={programmeType}
      />
    </section>
  );
}
