"use client";

import { AcademicCapIcon } from "@heroicons/react/16/solid";
import React, { useState } from "react";
import Courses from "./Courses";
import clsx from "clsx";
import { Button } from "../HTMLTags";
import { postgraduateDetails } from "@/lib/postgraduate";
import { OurStudent } from ".";
import { motion } from "framer-motion";

export default function Postgraduate() {
  const [programmeType, setProgrammeType] = useState("msc");
  return (
    <motion.section className="w-full h-full flex flex-col gap-4 gap-y-8">
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
      <div className="space-y-8">
        {postgraduateDetails.map(({ heading, description, icon }, index) => (
          <OurStudent
            key={index}
            heading={`${heading} (${
              programmeType === "phd" ? "Ph.D" : "M.Sc"
            })`}
            duration={
              programmeType === "phd"
                ? description
                : description
                    .replaceAll("M.Sc", "B.Sc")
                    .replaceAll("Ph.D", "M.Sc")
            }
            Icon={icon}
          />
        ))}
      </div>
      <Courses
        Icon={AcademicCapIcon}
        heading={`${
          programmeType === "phd" ? "Ph.D" : "M.Sc"
        } Postgraduate Courses`}
        type={programmeType}
      />
    </motion.section>
  );
}
