"use client";

import { Div } from "..";
import "swiper/swiper-bundle.css";
import { ElementType } from "react";
import { MinusCircleIcon, PlusCircleIcon } from "@heroicons/react/24/outline";
import React from "react";
import clsx from "clsx";
import {
  level100courses,
  level100coursesSecond,
  level200courses,
  level200coursesSecond,
  level300courses,
  level300coursesSecond,
  level400courses,
  level400coursesSecond,
} from "@/lib";
import { CourseByLevelProps, SemesterType } from "@/types";
import {
  analyticalPhdCourseOne,
  analyticalPhdCourseTwo,
  environmentalPhdCourseOne,
  environmentalPhdCourseTwo,
  industrialPhdCourseOne,
  industrialPhdCourseTwo,
  inorganicPhdCourseTwo,
  organicPhdCourseOne,
  organicPhdCourseTwo,
  phdCourseThreeToSix,
  physicalPhdCourseOne,
  physicalPhdCourseTwo,
  polymerPhdCourseOne,
  polymerPhdCourseTwo,
} from "@/lib/phd";
import {
  analyticalMscCourseOne,
  analyticalMscCourseTwo,
  environmentalMscCourseOne,
  environmentalMscCourseTwo,
  industrialMscCourseOne,
  industrialMscCourseTwo,
  inorganicMscCourseTwo,
  mscCourseThreeToSix,
  organicMscCourseOne,
  organicMscCourseTwo,
  physicalMscCourseOne,
  physicalMscCourseTwo,
  polymerMscCourseOne,
  polymerMscCourseTwo,
} from "@/lib/msc";

type CoursesProps = {
  Icon: ElementType;
  heading: string;
  type?: string;
};

export default function Courses({ Icon, heading, type = "bsc" }: CoursesProps) {
  const [currentCourseByLevel, setCurrentCourseByLevel] = React.useState({
    courses: "100_level",
  });
  return (
    <Div className="self-start bg-blue-50 flex-col my-12 overflow-hidden">
      <Div className="bg-white w-full items-center">
        <Icon className="w-8 text-xl bg-secondary rounded-full p-1 text-white" />
        <h3 className="capitalize text-xl font-medium">{heading}</h3>
      </Div>

      <CourseByLevel
        level={
          type === "phd" || type === "msc"
            ? "Analytical Chemistry"
            : "100 level"
        }
        firstSemesterArray={
          type === "phd"
            ? analyticalPhdCourseOne
            : type === "msc"
            ? analyticalMscCourseOne
            : level100courses
        }
        secondSemesterArray={
          type === "phd"
            ? analyticalPhdCourseTwo
            : type === "msc"
            ? analyticalMscCourseTwo
            : level100coursesSecond
        }
        thirdSemesterArray={
          type === "phd"
            ? phdCourseThreeToSix
            : type === "msc"
            ? mscCourseThreeToSix
            : undefined
        }
        currentCourseByLevel={currentCourseByLevel}
        setCurrentCourseByLevel={setCurrentCourseByLevel}
      />

      <CourseByLevel
        level={
          type === "phd" || type === "msc"
            ? "Environmental Chemistry"
            : "200 level"
        }
        firstSemesterArray={
          type === "phd"
            ? environmentalPhdCourseOne
            : type === "msc"
            ? environmentalMscCourseOne
            : level200courses
        }
        secondSemesterArray={
          type === "phd"
            ? environmentalPhdCourseTwo
            : type === "msc"
            ? environmentalMscCourseTwo
            : level200coursesSecond
        }
        thirdSemesterArray={
          type === "phd"
            ? phdCourseThreeToSix
            : type === "msc"
            ? mscCourseThreeToSix
            : undefined
        }
        currentCourseByLevel={currentCourseByLevel}
        setCurrentCourseByLevel={setCurrentCourseByLevel}
      />

      <CourseByLevel
        level={
          type === "phd" || type === "msc"
            ? "Industrial Chemistry"
            : "300 level"
        }
        firstSemesterArray={
          type === "phd"
            ? industrialPhdCourseOne
            : type === "msc"
            ? industrialMscCourseOne
            : level300courses
        }
        secondSemesterArray={
          type === "phd"
            ? industrialPhdCourseTwo
            : type === "msc"
            ? industrialMscCourseTwo
            : level300coursesSecond
        }
        thirdSemesterArray={
          type === "phd" || type === "msc"
            ? phdCourseThreeToSix
            : type === "msc"
            ? mscCourseThreeToSix
            : undefined
        }
        currentCourseByLevel={currentCourseByLevel}
        setCurrentCourseByLevel={setCurrentCourseByLevel}
      />

      <CourseByLevel
        level={
          type === "phd" || type === "msc" ? "Inorganic Chemistry" : "400 level"
        }
        firstSemesterArray={
          type === "phd"
            ? inorganicPhdCourseTwo
            : type === "msc"
            ? inorganicMscCourseTwo
            : level400courses
        }
        secondSemesterArray={
          type === "phd"
            ? inorganicPhdCourseTwo
            : type === "msc"
            ? inorganicMscCourseTwo
            : level400coursesSecond
        }
        thirdSemesterArray={
          type === "phd"
            ? phdCourseThreeToSix
            : type === "msc"
            ? mscCourseThreeToSix
            : undefined
        }
        currentCourseByLevel={currentCourseByLevel}
        setCurrentCourseByLevel={setCurrentCourseByLevel}
      />

      {(type === "phd" || type === "msc") && (
        <CourseByLevel
          level={"Organic Chemistry"}
          firstSemesterArray={
            type == "phd" ? organicPhdCourseOne : organicMscCourseOne
          }
          secondSemesterArray={
            type === "phd"
              ? organicPhdCourseTwo
              : type === "msc"
              ? organicMscCourseTwo
              : []
          }
          thirdSemesterArray={
            type === "phd"
              ? phdCourseThreeToSix
              : type === "msc"
              ? mscCourseThreeToSix
              : undefined
          }
          currentCourseByLevel={currentCourseByLevel}
          setCurrentCourseByLevel={setCurrentCourseByLevel}
        />
      )}

      {(type === "phd" || type === "msc") && (
        <CourseByLevel
          level={"Physical Chemistry"}
          firstSemesterArray={
            type == "phd" ? physicalPhdCourseOne : physicalMscCourseOne
          }
          secondSemesterArray={
            type === "phd"
              ? physicalPhdCourseTwo
              : type === "msc"
              ? physicalMscCourseTwo
              : []
          }
          thirdSemesterArray={
            type === "phd"
              ? phdCourseThreeToSix
              : type === "msc"
              ? mscCourseThreeToSix
              : undefined
          }
          currentCourseByLevel={currentCourseByLevel}
          setCurrentCourseByLevel={setCurrentCourseByLevel}
        />
      )}

      {(type === "phd" || type === "msc") && (
        <CourseByLevel
          level={"Polymer Chemistry"}
          firstSemesterArray={
            type == "phd" ? polymerPhdCourseOne : polymerMscCourseOne
          }
          secondSemesterArray={
            type === "phd"
              ? polymerPhdCourseTwo
              : type === "msc"
              ? polymerMscCourseTwo
              : []
          }
          thirdSemesterArray={
            type === "phd"
              ? phdCourseThreeToSix
              : type === "msc"
              ? mscCourseThreeToSix
              : undefined
          }
          currentCourseByLevel={currentCourseByLevel}
          setCurrentCourseByLevel={setCurrentCourseByLevel}
        />
      )}
    </Div>
  );
}

const CourseByLevel = ({
  currentCourseByLevel,
  setCurrentCourseByLevel,
  level,
  firstSemesterArray,
  secondSemesterArray,
  thirdSemesterArray,
}: CourseByLevelProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setCurrentCourseByLevel({
      courses: e.target.value,
    });

  return (
    <Div className="bg-white flex-col justify-center gap-y-0 overflow-hidden">
      <label
        htmlFor={level.replaceAll(" ", "_")}
        className={clsx(
          "w-full h-full flex items-center gap-2 font-semibold cursor-pointer px-1 py-2 transition-all duration-300",
          {
            "border-b border-primary/10  mb-4 text-secondary pointer-events-none":
              currentCourseByLevel.courses ===
              level.trim().replaceAll(" ", "_"),
            "text-slate-400 hover:text-black":
              currentCourseByLevel.courses !==
              level.trim().replaceAll(" ", "_"),
          }
        )}
      >
        {currentCourseByLevel.courses === level.trim().replaceAll(" ", "_") ? (
          <MinusCircleIcon className="h-4" />
        ) : (
          <PlusCircleIcon className="h-4" />
        )}

        <span className="text-lg">{level}</span>
      </label>

      <input
        type="radio"
        id={level.trim().replaceAll(" ", "_")}
        name="courses"
        value={level.trim().replaceAll(" ", "_")}
        className="hidden peer"
        onChange={handleChange}
        defaultChecked={level.includes("100")}
      />

      <section className="peer-checked:h-full h-0 p-0 flex flex-col gap-8 overflow-hidden transition-all duration-300">
        <SemesterCourseComponent
          type={level}
          semester="first"
          semesterCourseArray={firstSemesterArray}
        />
        <SemesterCourseComponent
          type={level}
          semester="second"
          semesterCourseArray={secondSemesterArray}
        />
        {thirdSemesterArray && (
          <SemesterCourseComponent
            type={"postgraduate"}
            semester="third"
            semesterCourseArray={thirdSemesterArray}
          />
        )}
      </section>
    </Div>
  );
};

function SemesterCourseComponent({
  semester,
  semesterCourseArray,
  type,
}: SemesterType) {
  return (
    <article className="xs:px-2 px-1">
      <h1 className="capitalize font-semibold text-lg xs:text-xl md:text-2xl mb-4">
        {semester} semester
      </h1>
      {/* smaller screen use div */}
      <section className="space-y-4 divide-y divide-blue-100 md:hidden">
        {semesterCourseArray.map((a, index) => (
          <div key={index} className="pt-4 space-y-1">
            <div className="flex gap-1 items-center justify-between">
              <h1 className="max-w-[84%] text-lg font-medium text-blue-950 text-wrap">
                {a.title}
              </h1>
              <span className="text-sm font-semibold uppercase">{a.code}</span>
            </div>

            <div className="space-y-1">
              {/* <p>{a.desc}</p> */}
              {a.prerequisite && (
                <p>Prerequisite: {a.prerequisite.toUpperCase()}</p>
              )}
              <div className="flex justify-between gap-1 items-center">
                <span>
                  {a.credit_hrs} Credit Hour{a.credit_hrs > 1 && "s"}
                </span>
                <span className="text-slate-400 capitalize text-sm">
                  {a.semester} semester
                </span>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* larger screens use table */}
      <table className="w-full overflow-x-auto hidden md:table">
        <thead>
          <tr className="text-left capitalize w-full">
            <th className="text-center py-8">S/N</th>
            <th className="min-w-[100px]">course code</th>
            <th className="min-w-[100px]">course title</th>
            <th className="min-w-[100px]">credit hours</th>
            {type?.includes("level") && (
              <th className="min-w-[100px]">pre-requisite</th>
            )}
            {/* <th className="min-w-[100px]">course description</th> */}
          </tr>
        </thead>
        <tbody>
          {semesterCourseArray.map((a, index) => (
            <tr key={index} className="odd:bg-blue-50">
              <td className="text-center py-4">{index + 1}</td>
              <td className="uppercase">{a.code}</td>
              <td>{a.title}</td>
              <td>{a.credit_hrs}</td>
              {type?.includes("level") && (
                <td>{a.prerequisite.toUpperCase() || ""}</td>
              )}
              {/* <td>{a.desc}</td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </article>
  );
}
