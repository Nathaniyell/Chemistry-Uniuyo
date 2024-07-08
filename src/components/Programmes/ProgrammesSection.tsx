"use client";

import React, { useState } from "react";
import { Button, Section } from "..";
import { Courses, OurStudent } from ".";
import {
  AcademicCapIcon,
  ClockIcon,
  DocumentIcon,
  UserGroupIcon,
} from "@heroicons/react/16/solid";
import { studentsData } from "@/lib";
import { ListBulletIcon } from "@heroicons/react/24/outline";
import { SiMinds } from "react-icons/si";
import clsx from "clsx";
import { MdAdminPanelSettings } from "react-icons/md";
import PostgraduatePhd from "./phd";
import PostgraduateMsc from "./msc";
import UndergraduateBsc from "./bsc";

export default function ProgrammesSection({
  programme,
}: {
  programme: "undergraduate" | "postgraduate";
}) {
  const [programmeType, setProgrammeType] = useState("phd");

  return (
    <Section>
      {programme === "postgraduate" && (
        <div className="w-full flex items-center gap-2">
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
        </div>
      )}
      <div className="w-full h-full grid lg:grid-cols-2 gap-4 gap-y-8">
        {programme === "undergraduate" && <UndergraduateBsc />}

        {programme === "postgraduate" && programmeType === "phd" && (
          <PostgraduatePhd />
        )}

        {programme === "postgraduate" && programmeType === "msc" && (
          <PostgraduateMsc />
        )}
      </div>

      {programme === "undergraduate" && (
        <Courses
          Icon={AcademicCapIcon}
          heading={`${programme} courses`}
          type={programme}
        />
      )}
    </Section>
  );
}
