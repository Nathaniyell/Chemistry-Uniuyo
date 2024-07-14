"use client";
import Image from "next/image";

import React from "react";
import { motion } from "framer-motion";
import { RouteLinkBtn } from "@/components";
import { useMediaQuery } from "react-responsive";

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
  const isMobile = useMediaQuery({ query: '(max-width: 700px)' });
  return (
    <div className={`relative size-full w-full ${isMobile ? 'h-auto mt-5' : 'md:h-full'} mt-5`}>
            {isMobile ? (
        <>
          <Image priority={true} src={bgImage} alt={title} className="w-full h-auto object-cover filter brightness-50" />
          {title && (
            <div className="relative text-black border-b shadow p-3 border-x mx-auto w-[95%] flex flex-col gap-2 mt-2">
              <motion.h1
                animate={{ y: 0, opacity: 1 }}
                initial={{ opacity: 0, y: -20 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  delay: 0.3,
                  duration: 0.7,
                }}
                className="capitalize font-semibold text-xl"
              >
                <span className="block font-normal text-lg mb-1">
                  {greeting}
                </span>
                {title}
              </motion.h1>
              <motion.p
                className="text-base leading-relaxed font-[500]"
                animate={{ y: 0, opacity: 1 }}
                initial={{ opacity: 0, y: 20 }}
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
                   <RouteLinkBtn variant="primary" className="text-white xs:w-1/2" href={btnLink} arrow >
                    Read more
                  </RouteLinkBtn>
                </motion.div>
              )}
            </div>
          )}
        </>
      ) : (
        <>
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
        </>
      )}
    </div>
  );
};

export default HomepageSlider;
