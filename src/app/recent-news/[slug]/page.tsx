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

  const getDownloadLink = () => {
    switch (title) {
      case "School Management Approves Academic Calendar for New Sessions":
        return {
          text: "Download Academic Calendar",
          href: "/academic-calendar.pdf"
        };
      case "Department of Chemistry releases lecture schedule for General CHemistry I":
        return {
          text: "Download Lecture Schedule",
          href: "/chm111-lecture-schedule.pdf"
        };
      case "School Management Approves Academic Calendar for Year one and Year Two Students":
        return {
          text: "Download approved academic calender",
          href: "/approved-academic-calender-2025.pdf"
        };
      case "Chemistry Department organizes makeup practicals for new students":
        return {
          text: "Download makeup practicals schedule",
          href: "/CHM117-lecture-schedule.docx"
        };
      default:
        return null;
    }
  };

  const downloadLink = getDownloadLink();

  return (
    <article className="min-h-screen bg-slate-50">
      <div className="max-w-5xl mx-auto px-4 py-6 md:py-10">
        <Breadcrumbs
          root={{ title: "News", href: `/recent-news` }}
          array={[
            {
              title: `${newsTitleFormatted.split("-").slice(0, 4).join(" ")}...`,
              href: `/recent-news/${newsTitleFormatted}`,
            },
          ]}
        />

        <header className="mt-8 mb-12 text-center">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-950 mb-4">
            {title}
          </h1>
          {date && (
            <time className="inline-flex items-center gap-2 text-primary/80 text-sm md:text-base">
              <CiCalendar className="text-lg" />
              {date}
            </time>
          )}
        </header>

        {pictures.length > 0 && (
          <div className="mb-12 max-w-4xl mx-auto">
            <SwiperWithNavigation pictures={pictures} />
          </div>
        )}

        <div className="prose prose-lg max-w-4xl text-justify mx-auto text-gray-700">
          {description.map((item, index) => (
            <React.Fragment key={index}>
              {item.split(/(<ul>.*?<\/ul>|".*?")/).map((part, partIndex) => {
                if (part?.startsWith("<ul>")) {
                  return <div dangerouslySetInnerHTML={{ __html: part }} key={partIndex} />;
                } else if (partIndex % 2 === 1) {
                  return <span className="font-medium text-blue-950" key={partIndex}>{part.slice(1, -1)}</span>;
                }
                return part;
              })}
              <div className="h-6" />
            </React.Fragment>
          ))}
        </div>

        <footer className="mt-12 max-w-3xl mx-auto">
          {writtenBy && (
            <p className="text-sm text-gray-600 mb-4">
              <span className="font-medium">Written by:</span>{" "}
              <span className="text-blue-950">{writtenBy}</span>
            </p>
          )}

          {downloadLink && (
            <a
              href={downloadLink.href}
              download
              className="inline-flex items-center px-6 py-3 bg-primary hover:bg-primary/90 text-white rounded-md transition-colors duration-200"
            >
              {downloadLink.text}
            </a>
          )}
        </footer>
      </div>
    </article>
  );
};

export default Page;
