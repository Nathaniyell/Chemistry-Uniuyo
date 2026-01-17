"use client";
import React from "react";
import { recentNews } from "@/lib";
import { notFound } from "next/navigation";
import "swiper/css";
import { CiCalendar } from "react-icons/ci";
import { Breadcrumbs } from "@/components";
import SwiperWithNavigation from "@/components/SwiperWithNavigation";


const createSlug = (title: string): string => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "") // Remove special characters except spaces and hyphens
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/-+/g, "-") // Replace multiple hyphens with single hyphen
    .trim();
};

const Page = ({ params }: { params: { slug: string } }) => {
  // Try to find news by slug matching
  let filteredNews = recentNews.find(
    (news) => createSlug(news.title) === params.slug.toLowerCase()
  );

  // Fallback: try to decode and match if slug doesn't match (for backward compatibility)
  if (!filteredNews) {
    const newsTitleFormatted = decodeURIComponent(params.slug.replaceAll("-", " "));
    filteredNews = recentNews.find(
      (news) => news.title.toLocaleLowerCase() === newsTitleFormatted.toLocaleLowerCase()
    );
  }

  if (!filteredNews) notFound();

  const newsTitleFormatted = filteredNews.title;

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
      case "CBT Registration for CHM 111 and CHM 117":
        return {
          text: "Click here to register",
          href: "https://cbt.chemistry.uniuyo.edu.ng"
        };
      case "UNIUYO Releases New Guidelines for CBT Exam Registration":
        return {
          text: "Download updated timetable",
          href: "/2024-2025 FIRST SEMESTER EXAM TIMETABLE-Updated.pdf"
        };
      default:
        return null;
    }
  };

  const downloadLink = getDownloadLink();

  return (
    <article className="min-h-screen bg-slate-50">
      <div className="max-w-5xl mx-auto">
        <Breadcrumbs
          root={{ title: "News", href: `/recent-news` }}
          array={[
            {
              title: `${newsTitleFormatted.split(" ").slice(0, 4).join(" ")}...`,
              href: `/recent-news/${createSlug(newsTitleFormatted)}`,
            },
          ]}
        />
        <div className="px-4 py-6 md:py-10">
          <header className="mt-4 mb-12 text-center">
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
              <div className="relative aspect-[16/9]">
                <SwiperWithNavigation pictures={pictures} />
              </div>
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
                <div className="h-2" />
              </React.Fragment>
            ))}
          </div>

          <footer className="mt-4 max-w-4xl mx-auto">
            {writtenBy && (
              <p className="text-gray-600">
                <span className="font-medium">Written by:</span>{" "}
                <span className="text-blue-950">{writtenBy}</span>
              </p>
            )}

            {downloadLink && (
              <a
                href={downloadLink.href}
                target="_blank"
                download
                className="inline-flex items-center px-6 py-3 bg-primary hover:bg-primary/90 text-white rounded-md transition-colors duration-200"
              >
                {downloadLink.text}
              </a>
            )}
          </footer>
        </div>
      </div>
    </article>
  );
};

export default Page;