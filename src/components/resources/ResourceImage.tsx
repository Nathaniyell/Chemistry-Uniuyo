"use client";

import React, { useState } from "react";
import { type Swiper as SwiperType } from "swiper/types";
import ThumbsSlider from "../ThumbsSlider";
import SwiperWithNavigation from "../SwiperWithNavigation";
import { StaticImageData } from "next/image";
import FramerAnimation from "@/utils/framer-animation";


export default function ResourceDiv({
  heading,
  description,
  images,
}: {
  heading: string;
  description?: string;
  images: string[] | StaticImageData[];
}) {
  return (
    <FramerAnimation className="flex flex-col items-center justify-center w-11/12 mx-auto gap-6 shrink-0">
      <div className="text-center space-y-1">
        <h1 className="text-xl xs:text-2xl font-semibold">{heading}</h1>

        {description && (
          <p className="xs:text-sm text-gray-500">{description}</p>
        )}
      </div>

      <SwiperWithNavigation pictures={images}  />
    </FramerAnimation>
  );
}
