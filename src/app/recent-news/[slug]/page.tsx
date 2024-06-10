"use client";
import { RecentNews } from "@/lib";

import { notFound } from "next/navigation";


import "swiper/css";

import { CiCalendar } from "react-icons/ci";
import ThumbsSlider from "@/components/ThumbsSlider";
import { Breadcrumbs } from "@/components";

const newsTitles = RecentNews.map((news) => news.title);
const Page = ({ params }: { params: { slug: string } }) => {

 
  const newsTitleFormatted = params.slug;
  const filteredNews = RecentNews.filter(
    (news) =>
      news.title.toLocaleLowerCase() ===
      newsTitleFormatted.replaceAll("-", " ").toLocaleLowerCase()
  )[0];

  if (!filteredNews) notFound();

  const { title, pictures, date, description } = filteredNews;
  return (
    <div className="bg-slate-100 px-4 pt-4 pb-10 md:p-10">
       
       <Breadcrumbs
          root={{ title: "News", href: `/recent-news` }}
          array={[
                { title: `${newsTitleFormatted.split("-").slice(0,4).join(" ")}...`, href: `/recent-news/${newsTitleFormatted}` },
          ]}
        />

      <section className="w-full space-y-6 mt-4">
        <h1 className="text-xl xs:text-2xl font-semibold text-center text-blue-950 mb-2">
          {title}
        </h1>
        {date && (
          <p className="mt-2 text-primary text-center text-base flex items-center gap-2">
            <CiCalendar className="text-lg" />
            {date}
          </p>
        )}
        <ThumbsSlider images={pictures} />
      </section>
      <div className="mt-2">
        <p className="text-base text-gray-700">{description}</p>
     
      </div>
      {/* <Breadcrumbs
          root={{ title: "News", href: `/recent-news` }}
          array={[
                { title: newsTitleFormatted.replaceAll("-", " "), href: `/recent-news/${newsTitleFormatted}` },
          ]}
        /> */}
    </div>
  );
};

export default Page;
