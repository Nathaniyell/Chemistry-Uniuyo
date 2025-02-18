"use client";

import React from "react";
import { StaticImageData } from "next/image";
import SwiperWithNavigation from "../SwiperWithNavigation";
import FramerAnimation from "@/utils/framer-animation";

export default function ResourceImage({
  heading,
  description,
  images,
}: {
  heading: string;
  description?: string;
  images: string[] | StaticImageData[];
}) {
  return (
    <FramerAnimation className="flex flex-col h-full group">
      {/* Image Container */}
      <div className="relative w-full aspect-[16/10] bg-gray-100">
        <SwiperWithNavigation pictures={images} />
      </div>

      {/* Content */}
      <div className="p-6 flex-1 bg-white group-hover:bg-blue-50/50 transition-colors duration-300">
        <h3 className="text-lg font-semibold text-blue-950 mb-2 group-hover:text-primary transition-colors duration-300">
          {heading}
        </h3>
        {description && (
          <p className="text-sm text-gray-600 line-clamp-2 group-hover:text-gray-700">
            {description}
          </p>
        )}
      </div>
    </FramerAnimation>
  );
}
