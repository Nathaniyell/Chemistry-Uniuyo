"use client";
import { useMediaQuery } from "react-responsive";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import { publications } from "@/lib";
import { Button, Card } from ".";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import Link from "next/link";

export default function HomeResearchSlider() {
  const isBigMobile = useMediaQuery({ query: "(min-width: 640px)" });

  const isTablet = useMediaQuery({
    query: "(min-width: 768px)",
  });

  const isLaptop = useMediaQuery({
    query: "(min-width: 1024px)",
  });
  return (
    <aside>
      <Swiper
        spaceBetween={15}
        modules={[Autoplay]}
        slidesPerView={isLaptop ? 3 : isTablet ? 2 : 1}
        loop
        // centeredSlides
        autoplay={{
          delay: 15000,
          pauseOnMouseEnter: true,
          disableOnInteraction: true,
        }}
        className="w-[99%] p-2"
      >
        {publications
          .slice(0, 4)
          .map(({ title, unit, author, published_at, desc, href }, index) => (
            <SwiperSlide key={index}>
              <Card
                isResearchPage={false}
                title={title}
                type="publication"
                unit={unit ?? "unit"}
                author={author}
                published_at={published_at}
                desc={desc}
                href={href}
              />
            </SwiperSlide>
          ))}

        <aside className="flex gap-6 xs:gap-8 items-center justify-center mt-8">
          <div className="space-x-3">
            <SlideButton position="left" Icon={ArrowLeftIcon} />
            <SlideButton Icon={ArrowRightIcon} />
          </div>
          <Link
            href="/research"
            className="flex items-center justify-center p-2 px-4 text-white text-lg bg-primary hover:bg-blue-600 transition-colors duration-300"
          >
            More about Research
            <MdOutlineKeyboardDoubleArrowRight className="ml-1 animate-pulse text-lg" />
          </Link>
        </aside>
      </Swiper>
    </aside>
  );
}

function SlideButton({
  position = "right",
  Icon,
}: {
  position?: "right" | "left";
  Icon: React.ElementType;
}) {
  const swiper = useSwiper();

  return (
    <button
      onClick={() =>
        position === "right" ? swiper.slideNext() : swiper.slidePrev()
      }
      className="bg-transparent p-2 rounded-full text-primary hover:bg-primary border hover:text-white border-primary active:scale-105 transition-all duration-300"
    >
      <Icon className="size-7 xs:size-4 " />
    </button>
  );
}
