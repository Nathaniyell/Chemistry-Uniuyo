"use client";

import React from "react";
import { Section } from "..";
import { Courses, OurStudent } from ".";
import {
  AcademicCapIcon,
  ClockIcon,
  UserGroupIcon,
} from "@heroicons/react/16/solid";
import { studentsData } from "@/lib";

export default function ProgrammesSection({
  programme,
}: {
  programme: "undergraduate" | "postgraduate";
}) {
  return (
    <Section>
      <h1 className="w-full capitalize font-medium text-lg xs:text-xl lg:text-2xl px-1">
        {programme} Programme
      </h1>

      <div className="w-full h-full grid lg:grid-cols-2 gap-4 gap-y-8">
        {programme === "undergraduate" && (
          <OurStudent
            Icon={UserGroupIcon}
            heading="meet our students"
            array={studentsData}
          />
        )}

        <OurStudent
          Icon={ClockIcon}
          heading={`duration of degree ${
            programme == "undergraduate" ? "(B.Sc)" : "(M.Sc)"
          }`}
          duration={
            programme === "undergraduate"
              ? "The Department of Chemistry offers a four-year degree programme. the minimum period allowed is four (4) years while the maximum period allowed is six (6) years. Any student who fails to complete the requirements and graduate within the time allowed goes back without a degree. To qualify for a B.Sc. degree in Chemistry, a candidate will normally spend a minimum period of four academic sessions (for UTME candidates) or three academic sessions (for Direct Entry candidates) and a maximum of six academic sessions (for UTME candidates) or five academic sessions (for Direct Entry candidates). Direct Entry candidates are usually admitted into the second year of the four year programme. In addition, Direct Entry candidates may e required to offer all the GST courses of year one(1) if not already offered and passed in an institution of similar standing."
              : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ipsa a quasi. Minima nostrum ipsam dignissimos ab architecto animi, itaque eveniet culpa similique a libero veritatis impedit quia fugiat ut, cupiditate dolor, nisi minus deserunt voluptate nesciunt optio modi! Quam quos dicta dolorum facere consequuntur voluptatibus non architecto, eius minima."
          }
        />
        {programme === "postgraduate" && (
          <OurStudent
            Icon={ClockIcon}
            heading={"Duration of degree (Ph.D)"}
            duration={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ipsa a quasi. Minima nostrum ipsam dignissimos ab architecto animi, itaque eveniet culpa similique a libero veritatis impedit quia fugiat ut, cupiditate dolor, nisi minus deserunt voluptate nesciunt optio modi! Quam quos dicta dolorum facere consequuntur voluptatibus non architecto, eius minima."
            }
          />
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
