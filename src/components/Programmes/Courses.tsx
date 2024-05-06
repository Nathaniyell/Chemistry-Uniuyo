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

type CoursesProps = {
  Icon: ElementType;
  heading: string;
  type: string;
};

export default function Courses({ Icon, heading, type }: CoursesProps) {
  const [currentCourseByLevel, setCurrentCourseByLevel] = React.useState({
    courses: "100_level",
  });
  return (
    <Div className="self-start bg-blue-50 flex-col my-12 overflow-hidden">
      <Div className="bg-white w-full items-center">
        <Icon className="h-6 text-xl bg-secondary rounded-full p-1 text-white" />
        <h3 className="capitalize font-bold">{heading}</h3>
      </Div>

      <CourseByLevel
        level={"100 level"}
        firstSemesterArray={level100courses}
        secondSemesterArray={level100coursesSecond}
        currentCourseByLevel={currentCourseByLevel}
        setCurrentCourseByLevel={setCurrentCourseByLevel}
      />

      <CourseByLevel
        level={"200 level"}
        firstSemesterArray={level200courses}
        secondSemesterArray={level200coursesSecond}
        currentCourseByLevel={currentCourseByLevel}
        setCurrentCourseByLevel={setCurrentCourseByLevel}
      />

      <CourseByLevel
        level={"300 level"}
        firstSemesterArray={level300courses}
        secondSemesterArray={level300coursesSecond}
        currentCourseByLevel={currentCourseByLevel}
        setCurrentCourseByLevel={setCurrentCourseByLevel}
      />
      <CourseByLevel
        level={"400 level"}
        firstSemesterArray={level400courses}
        secondSemesterArray={level400coursesSecond}
        currentCourseByLevel={currentCourseByLevel}
        setCurrentCourseByLevel={setCurrentCourseByLevel}
      />
    </Div>
  );
}

type CourseByLevelProps = {
  currentCourseByLevel: {
    courses: string;
  };
  setCurrentCourseByLevel: React.Dispatch<
    React.SetStateAction<{
      courses: string;
    }>
  >;
  level: string;
  firstSemesterArray: {
    code: string;
    title: string;
    prerequisite: string;
    semester: string;
    credit_hrs: number;
    desc: string;
  }[];
  secondSemesterArray: {
    code: string;
    title: string;
    prerequisite: string;
    semester: string;
    credit_hrs: number;
    desc: string;
  }[];
};

const CourseByLevel = ({
  currentCourseByLevel,
  setCurrentCourseByLevel,
  level,
  firstSemesterArray,
  secondSemesterArray,
}: CourseByLevelProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setCurrentCourseByLevel({
      courses: e.target.value,
    });

  // const totalFirstCh = firstSemesterArray.reduce((prev, curr) => {})

  return (
    <Div className="bg-white flex-col justify-center gap-y-0 overflow-hidden">
      <label
        htmlFor={level.replaceAll(" ", "_")}
        className={clsx(
          "w-full h-full flex items-center gap-2 font-semibold cursor-pointer",
          {
            "border-b pb-2 mb-4 text-secondary pointer-events-none":
              currentCourseByLevel.courses ===
              level.trim().replaceAll(" ", "_"),
          }
        )}
      >
        {currentCourseByLevel.courses === level.trim().replaceAll(" ", "_") ? (
          <MinusCircleIcon className="h-4 text-gray-400" />
        ) : (
          <PlusCircleIcon className="h-4 text-gray-400" />
        )}

        <span>{level}</span>
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

      <div className="peer-checked:h-full h-0 p-0 flex flex-col gap-8 overflow-hidden transition-all duration-300">
        <div>
          <h1 className="capitalize font-semibold text-lg xs:text-xl md:text-2xl mb-4">
            first semester
          </h1>
          {/* smaller screen use div */}
          <section className="space-y-4 divide-y divide-blue-100 md:hidden">
            {firstSemesterArray.map((a, i) => (
              <div key={i} className="pt-4 space-y-1">
                <div className="flex gap-1 items-center justify-between">
                  <h1 className="max-w-[84%] text-lg font-medium text-blue-950 text-wrap">
                    {a.title}
                  </h1>
                  <span className="text-sm font-semibold uppercase">
                    {a.code}
                  </span>
                </div>

                <div className="space-y-1">
                  <p>{a.desc}</p>
                  {a.prerequisite && <p>Prerequisite: {a.prerequisite}</p>}
                  <div className="flex justify-between gap-1 items-center">
                    <span>
                      {a.credit_hrs} credit hour{a.credit_hrs > 1 && "s"}
                    </span>
                    <span>{a.semester} semester</span>
                  </div>
                </div>
              </div>
            ))}
          </section>

          {/* larger screens use table */}
          <table className="w-full overflow-x-auto hidden md:table">
            <thead>
              <tr className="text-left capitalize w-full">
                <th className="text-center">S/N</th>
                <th className="min-w-[100px]">course code</th>
                <th className="min-w-[100px]">course title</th>
                <th className="min-w-[100px]">credit hours</th>
                <th className="min-w-[100px]">pre-requisite</th>
                <th className="min-w-[100px]">course description</th>
              </tr>
            </thead>
            <tbody>
              {firstSemesterArray.map((a, i) => (
                <tr key={a.code} className="odd:bg-grayLine rounded-xl">
                  <td className="text-center">{i + 1}</td>
                  <td className="uppercase">{a.code}</td>
                  <td>{a.title}</td>
                  <td>{a.credit_hrs}</td>
                  <td>{a.prerequisite ? a.prerequisite : "-"}</td>
                  <td>{a.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div>
          <h1 className="capitalize font-semibold text-lg xs:text-xl md:text-2xl my-4">
            second semester
          </h1>
          {/* smaller screen use div */}
          <section className="space-y-4 divide-y divide-blue-100 md:hidden">
            {secondSemesterArray.map((a, i) => (
              <div key={i} className="pt-4 space-y-1">
                <div className="flex gap-1 items-center justify-between">
                  <h1 className="max-w-[84%] text-lg font-medium text-blue-950 text-wrap">
                    {a.title}
                  </h1>
                  <span className="text-sm font-semibold uppercase">
                    {a.code}
                  </span>
                </div>

                <div className="space-y-1">
                  <p>{a.desc}</p>
                  {a.prerequisite && <p>Prerequisite: {a.prerequisite}</p>}
                  <div className="flex justify-between gap-1 items-center">
                    <span>
                      {a.credit_hrs} credit hour{a.credit_hrs > 1 && "s"}
                    </span>
                    <span>{a.semester} semester</span>
                  </div>
                </div>
              </div>
            ))}
          </section>

          {/* larger screens use table */}
          <table className="w-full hidden md:table">
            <thead>
              <tr className="text-left capitalize">
                <th className="text-center">S/N</th>
                <th className="min-w-[100px]">course code</th>
                <th className="min-w-[100px]">course title</th>
                <th className="min-w-[100px]">credit hours</th>
                <th className="min-w-[100px]">pre-requisite</th>
                <th className="min-w-[100px]">course description</th>
              </tr>
            </thead>
            <tbody>
              {secondSemesterArray.map((a, i) => (
                <tr key={a.code} className="odd:bg-grayLine">
                  <td className="text-center">{i + 1}</td>
                  <td className="uppercase">{a.code}</td>
                  <td>{a.title}</td>
                  <td>{a.credit_hrs}</td>
                  <td>{a.prerequisite ? a.prerequisite : "-"}</td>
                  <td>{a.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Div>
  );
};
