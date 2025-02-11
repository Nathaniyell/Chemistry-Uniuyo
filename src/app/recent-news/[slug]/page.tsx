"use client";
import React from "react";
import { recentNews } from "@/lib";
import { notFound } from "next/navigation";
import "swiper/css";
import { CiCalendar } from "react-icons/ci";
import { Breadcrumbs } from "@/components";
import SwiperWithNavigation from "@/components/SwiperWithNavigation";


const newsTitles = recentNews.map((news) => news.title);
const Page = ({ params }: { params: { slug: string } }) => {
  const newsTitleFormatted = params.slug;
  const filteredNews = recentNews.filter(
    (news) =>
      news.title.toLocaleLowerCase() ===
      newsTitleFormatted.replaceAll("-", " ").toLocaleLowerCase()
  )[0];

  if (!filteredNews) notFound();

  const { title, pictures, date, description, writtenBy } = filteredNews;
  return (
    <div className="bg-slate-100  px-4 pt-4 pb-10 md:p-10">
      <Breadcrumbs
        root={{ title: "News", href: `/recent-news` }}
        array={[
          {
            title: `${newsTitleFormatted.split("-").slice(0, 4).join(" ")}...`,
            href: `/recent-news/${newsTitleFormatted}`,
          },
        ]}
      />

      <section className="w-full md:w-10/12 mx-auto space-y-6 mt-4">
        <h1 className="text-xl xs:text-2xl font-semibold text-center text-blue-950 mb-2">
          {title}
        </h1>
        {date && (
          <p className="mt-2 text-primary text-center text-base flex items-center gap-2">
            <CiCalendar className="text-lg" />
            {date}
          </p>
        )}
        <SwiperWithNavigation pictures={pictures} />
      </section>
      <div className="mt-3 md:w-10/12 mx-auto">
        <p className="text-base text-gray-700 leading-loose">
          {" "}
          {description.map((item, index) => (
            <React.Fragment key={index}>
              {item.split(/(<ul>.*?<\/ul>|".*?")/).map((part, partIndex) => {
                if (part?.startsWith("<ul>")) {
                  return <div dangerouslySetInnerHTML={{ __html: part }} key={partIndex} />;
                } else if (partIndex % 2 === 1) {
                  return <span className="font-semibold" key={partIndex}>{part.slice(1, -1)}</span>;
                }
                return part;
              })}
              <span className="block h-[0.4rem]"></span>
            </React.Fragment>
          ))}
        </p>
        {writtenBy && <p className="font-semibold mb-2"><span className="text-gray-500 font-normal">written by: </span>{writtenBy}</p>}
        {title === "School Management Approves Academic Calendar for New Sessions" &&
          <a className="text-primary underline" href="/academic-calendar.pdf" download>
            Download Academic Calendar
          </a>
        }
        {title === "Department of Chemistry releases lecture schedule for General CHemistry I" &&
          <a className="text-primary underline" href="/chm111-lecture-schedule.pdf" download>
            Download Lecture Schedule
          </a>
        }
        {title === "School Management Approves Academic Calendar for Year one and Year Two Students" &&
          <a className="text-primary underline" href="/approved-academic-calender-2025.pdf" download>
            Download approved academic calender
          </a>
        }
        {title === "Chemistry Department organizes makeup practicals for new students" &&
          <a className="text-primary underline" href="/CHM117-lecture-schedule.docx" download>
            Download makeup practicals schedule
          </a>
        }
      </div>

    </div>
  );
};

export default Page;
