"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Pagination,
  EffectCreative,
  EffectCards,
} from "swiper/modules";
import { Div } from "..";
import Image, { StaticImageData } from "next/image";
import "swiper/swiper-bundle.css";
import { ElementType } from "react";

type MeetProps = {
  Icon: ElementType;
  heading: string;
  duration?: string;
  array?: {
    image: StaticImageData;
    name?: string;
    desc?: string;
    id?: string;
  }[];
};

export default function Meet({ array, Icon, heading, duration }: MeetProps) {
  return (
    <Div className="self-start group h-full bg-blue-50 flex-col overflow-hidden">
      <Div className="bg-white w-full items-center hover:ring-1">
        <Icon className="h-6 text-xl bg-secondary rounded-full p-1 text-white" />
        <h3 className="capitalize font-bold">{heading}</h3>
      </Div>
      <Div className="h-68 bg-white hover:ring-1 overflow-hidden">
        {array ? (
          <Swiper
            centeredSlides
            loop
            autoplay={{
              delay: 4000,
              pauseOnMouseEnter: true,
              disableOnInteraction: true,
            }}
            speed={1500}
            spaceBetween={10}
            modules={[Autoplay, Pagination, EffectCreative, EffectCards]}
            className="w-full h-full"
          >
            {array.map((a, i) => (
              <SwiperSlide key={i}>
                <Image
                  src={a.image}
                  alt={`${a.image}`}
                  className="rounded-md h-full object-contain"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <p>{duration}</p>
        )}
      </Div>
    </Div>
  );
}
