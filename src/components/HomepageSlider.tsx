"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { RouteLinkBtn } from "@/components";
import {
  Autoplay,
  Pagination,
  // Navigation,
  // EffectCreative,
  // EffectCards,
  EffectFade,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/navigation";

type sliderProps = {
  bgImage?: any;
  title: string;
  description?: string;
  greeting?: string;
  btnLink?: string;
};

const HomepageSlider = ({
  bgImage,
  title,
  description,
  greeting,
  btnLink,
}: sliderProps) => {
  return (
    <div className={`relative size-full w-full md:h-full`}>
      <Image priority={true} src={bgImage} alt={title} className="size-full filter brightness-50" />

      {title && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white p-4 h-fit mx-auto w-[95%] md:w-3/4 flex flex-col justify-center gap-4">
          <motion.h1
            animate={{ x: 0, opacity: 1 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{
              type: "spring",
              stiffness: 100,
              delay: 0.3,
              duration: 0.7,
            }}
            className="uppercase font-bold text-xl md:text-3xl lg:text-4xl"
          >
            <span className="uppercase font-normal text-lg md:text-xl">
              {greeting} <br />
            </span>
            {title}
          </motion.h1>
          <motion.p
            className="hidden md:block text-sm md:text-lg leading-loose font-[500]"
            animate={{ x: 0, opacity: 1 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{
              type: "spring",
              stiffness: 100,
              delay: 0.3,
              duration: 0.7,
            }}
          >
            {description}
          </motion.p>
          {btnLink && (
            <motion.div
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                delay: 1.5,
                duration: 0.8,
              }}
            >
              <RouteLinkBtn className="md:text-xl !w-[60%] lg:!w-[30%]" href={btnLink} arrow >
                Read more
              </RouteLinkBtn>
            </motion.div>
          )}
        </div>
      )}
    </div>
  );
};

export default HomepageSlider;
