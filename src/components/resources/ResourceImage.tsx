"use client";

import Image from "next/image";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { type Swiper as SwiperType } from "swiper/types";
import { Thumbs, Autoplay } from "swiper/modules";
import { StaticImageData } from "next/image";

import "swiper/css";
import clsx from "clsx";

export default function ResourceDiv({
  heading,
  description,
  images,
}: {
  heading: string;
  description?: string;
  images: string[];
}) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const [isActiveIndex, setIsActiveIndex] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center max-w-sm sm:max-w-md gap-6 shrink-0">
      <div className="text-center space-y-1 max-w-sm">
        <h1 className="text-xl xs:text-2xl font-semibold">{heading}</h1>

        <p className="xs:text-sm text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
          molestiae culpa nam doloremque non temporibus? In placeat, labore
          earum aspernatur, molestias rerum odit, iure esse ad velit vitae animi
          perferendis.
        </p>
      </div>

      <aside className="w-full space-y-3">
        {/* main swiper */}
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
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <a
                href={src}
                target="_blank"
                rel="noopener noreferrer"
                title="Click to view larger image"
                className="block border border-blue-100 hover:border-primary rounded-md p-1 xs:hover:p-1.5 transition-all duration-300"
              >
                <Image
                  src={src}
                  alt={heading}
                  width={300}
                  height={200}
                  className={"w-full h-52 xs:h-60 md:h-72 rounded-md"}
                />
              </a>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Thumbnail(s) */}
        <Swiper
          spaceBetween={5}
          slidesPerView={images.length}
          modules={[Thumbs]}
          watchSlidesProgress
          onSwiper={setThumbsSwiper}
        >
          {images.map((src, index) => (
            <SwiperSlide
              key={index}
              className="bg-white border border-blue-100 rounded-md max-w-fit"
            >
              <Image
                src={src}
                alt={heading}
                width={56}
                height={56}
                className={clsx("size-12 scale-90 rounded-md", {
                  "ring ring-primary p-0.5": isActiveIndex === index,
                  "cursor-pointer": isActiveIndex !== index,
                })}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </aside>
    </div>
  );
}
