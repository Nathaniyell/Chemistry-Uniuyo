"use client";
import { useRouter } from "next/navigation";

import { RecentNews } from "@/lib";
import { useState } from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { type Swiper as SwiperType } from "swiper/types";
import { Thumbs, Autoplay } from "swiper/modules";
import "swiper/css";
import clsx from "clsx";
import { CiCalendar } from "react-icons/ci";
import ThumbsSlider from "@/components/ThumbsSlider";

const newsTitles = RecentNews.map((news) => news.title);
const Page = ({ params }: { params: { slug: string } }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const [isActiveIndex, setIsActiveIndex] = useState(0);

  const router = useRouter();
  const newsTitleFormatted = params.slug;
  const filteredNews = RecentNews.filter(
    (news) =>
      news.title.toLocaleLowerCase() ===
      newsTitleFormatted.replaceAll("-", " ").toLocaleLowerCase()
  )[0];

  if (!filteredNews) notFound();

  const { title, pictures, date, description } = filteredNews;
  return (
    <div className="bg-slate-100 px-5 pt-5 pb-10 md:p-10">
      <section className="w-full space-y-3">
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
    </div>
  );
};

export default Page;
