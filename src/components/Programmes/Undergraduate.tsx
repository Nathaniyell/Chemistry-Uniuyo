"use client";

import React from "react";
import { Courses, OurStudent } from ".";
import {
  AcademicCapIcon,
  ClockIcon,
  UserGroupIcon,
} from "@heroicons/react/16/solid";
import { studentsData } from "@/lib";

export default function Undergraduate() {
  return (
    <section>
      <OurStudent
        Icon={UserGroupIcon}
        heading="meet our students"
        array={studentsData}
      />

      <OurStudent
        Icon={ClockIcon}
        heading={`duration of degree (B.Sc)`}
        duration={
          "The Department of Chemistry offers a four-year degree programme. the minimum period allowed is four (4) years while the maximum period allowed is six (6) years. Any student who fails to complete the requirements and graduate within the time allowed goes back without a degree. To qualify for a B.Sc. degree in Chemistry, a candidate will normally spend a minimum period of four academic sessions (for UTME candidates) or three academic sessions (for Direct Entry candidates) and a maximum of six academic sessions (for UTME candidates) or five academic sessions (for Direct Entry candidates). Direct Entry candidates are usually admitted into the second year of the four year programme. In addition, Direct Entry candidates may e required to offer all the GST courses of year one(1) if not already offered and passed in an institution of similar standing."
        }
      />
      <Courses
        Icon={AcademicCapIcon}
        heading={`Undergraduate courses`}
        type="undergraduate"
      />
    </section>
  );
}
