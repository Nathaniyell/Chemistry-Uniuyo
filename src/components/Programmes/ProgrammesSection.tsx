"use client";

import React, { useState } from "react";
import { Section } from "..";
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

export default function ProgrammesSection({
  programme,
}: {
  programme: "undergraduate" | "postgraduate";
}) {
  const [programmeType, setProgrammeType] = useState("msc");
  return (
    <Section>
      <div></div>
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
            Icon={SiMinds}
            heading={"PHILOSOPHY OF THE PROGRAMME (Ph.D)"}
            duration={
              "The Ph.D. programme of the Department of Chemistry is designed to produce well equipped chemists for various research centres, industries, and various other establishments within and outside Nigeria. The programme will also prepare graduates for teaching career in the Universities, Polytechnics, Colleges of Education and other institutions of higher learning. The courses are therefore designed to give a balanced overview of each discipline at the Ph.D level. It is hoped that the programme will enable the students on graduation to have the knowledge and acquire the skills which will equip them take full responsibilities of management in industrial establishment, research and academic institutions."
            }
          />
        )}
        {programme === "postgraduate" && (
          <OurStudent
            Icon={ListBulletIcon}
            heading={"OBJECTIVES OF THE PROGRAMME (Ph.D)"}
            duration={`In line with the vision of the University of Uyo, the department shall strive towards sustainable human and technological development through the utilization of the vast natural resources available within its environs in teaching, research and community service while maintaining a good conducive and friendly environment for life. To actualise this vision, the department shall lay emphasis on academic and research-oriented programmes that will lead to personal and project development such as:\nTraining the students in advanced contemporary methods that will equip them to carry out researches in their areas of specialization.\nEquipping the students with skills that will enable them identify, analyze and control wastes in the environment.\nModifying locally available raw materials and wastes into industrial input.\nSynthesizing and/or formulating new industrial and commercial products using locally available feedstock.\nUtilizing available natural resources/solid minerals to manufacture materials needed for the upkeep of man.\nTraining of qualified chemists for secondary school system, research institutions and industries as well as meeting the manpower requirements of non-academic institutions.`}
          />
        )}
        {programme === "postgraduate" && (
          <OurStudent
            Icon={DocumentIcon}
            heading={"ADMISSION REQUIREMENTS (Ph.D)"}
            duration={`Admission is open to candidates with M.Sc. degree from the University of Uyo or any other recognized university within and outside Nigeria recognize and approved by the Senate of the must have had five credit passes including University of Uyo. Such prospective students Chemistry, Physics, English Language and Mathematics at the School Certificate level. Candidates must have successfully completed a degree programme or its equivalent in the corresponding area of study at M.Sc. level and must have passed at a level not lower than B. Choice of courses to be offered shall depend on the candidate's performance at the M.Sc. level and on the transcript.`}
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
