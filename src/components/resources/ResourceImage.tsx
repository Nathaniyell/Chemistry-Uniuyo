"use client";

import React, { useState } from "react";
import { type Swiper as SwiperType } from "swiper/types";
import ThumbsSlider from "../ThumbsSlider";

export default function ResourceDiv({
  heading,
  description,
  images,
}: {
  heading: string;
  description?: string;
  images: string[];
}) {
  return (
    <div className="flex flex-col items-center justify-center max-w-sm sm:max-w-md gap-6 shrink-0">
      <div className="text-center space-y-1 max-w-sm">
        <h1 className="text-xl xs:text-2xl font-semibold">{heading}</h1>

        {description && (
          <p className="xs:text-sm text-gray-500">{description}</p>
        )}
      </div>

      <ThumbsSlider images={images} heading={heading} />
    </div>
  );
}
