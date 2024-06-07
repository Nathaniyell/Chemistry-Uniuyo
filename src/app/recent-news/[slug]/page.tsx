"use client"
import { useRouter } from 'next/navigation';

import { RecentNews } from '@/lib';
import { useState } from "react";
import { notFound } from "next/navigation";
import Image from 'next/image';
import { Swiper, SwiperSlide } from "swiper/react";
import { type Swiper as SwiperType } from "swiper/types";
import { Thumbs, Autoplay } from "swiper/modules";
import "swiper/css";
import clsx from "clsx";
import { CiCalendar } from 'react-icons/ci';


const newsTitles = RecentNews.map(news => news.title)
const Page = ({ params }: { params: { slug: string } }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const [isActiveIndex, setIsActiveIndex] = useState(0);

  const router = useRouter();
  const newsTitleFormatted = params.slug;
  const filteredNews = RecentNews.filter(news => news.title.toLocaleLowerCase() === newsTitleFormatted.replaceAll("-", " ").toLocaleLowerCase())[0];

  console.log(filteredNews);
  if (!filteredNews) notFound()

  const { title, pictures, date, description } = filteredNews;
  return (
    <div className='bg-slate-100 p-10'>
      <section className="w-full space-y-3">
      <h1 className="text-xl xs:text-2xl font-semibold text-center mb-2">{title}</h1>
        <Swiper
          // loop
          autoplay={{
            delay: 20000,
            pauseOnMouseEnter: true,
          }}
          modules={[Thumbs, Autoplay]}
          thumbs={{ swiper: thumbsSwiper }}
          onSlideChange={(swiper) => setIsActiveIndex(swiper.activeIndex)}
          className="size-full"
        >
          {pictures.map((pics, index) => (
            <SwiperSlide key={index}>
              <Image
                src={pics}
                alt={title}
                  className={"size-full aspect-h-6"}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Thumbnail(s) */}
        <Swiper
          spaceBetween={5}
          slidesPerView={pictures.length}
          modules={[Thumbs]}
          watchSlidesProgress
          onSwiper={setThumbsSwiper}
        >
          {pictures.map((pics, index) => (
            <SwiperSlide
              key={index}
              className="bg-white rounded-md max-w-fit"
            >
              <Image
                src={pics}
                alt={title}
                width={56}
                height={56}
                className={clsx("size-12 scale-90 rounded-md", {
                  "ring ring-secondary p-0.5": isActiveIndex === index,
                  "cursor-pointer": isActiveIndex !== index,
                })}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      <div className="mt-2">
       
        <p className="text-base text-gray-700">
      {description}
        </p>
      {date && <p className="mt-2 text-black italic text-basae flex items-center gap-2"><CiCalendar className="text-lg" />{date}</p>}
      </div>
    </div>
  )
}

export default Page