import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Image, { StaticImageData } from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface SwiperPropTypes {
  pictures: StaticImageData[] | string[];
}

export default function SwiperWithNavigation({ pictures }: SwiperPropTypes) {
  return (
    <div className="relative group h-full">
      <Swiper
        navigation={{
          enabled: true,
          hideOnClick: true
        }}
        modules={[Navigation, Pagination, Autoplay]}
        autoplay={{
          delay: 4000,
          pauseOnMouseEnter: true,
          disableOnInteraction: false
        }}
        pagination={{
          enabled: true,
          clickable: true,
          bulletActiveClass: 'swiper-pagination-bullet-active bg-primary',
          bulletClass: 'swiper-pagination-bullet bg-gray-300 opacity-70'
        }}
        loop={pictures.length > 1}
        className="h-full"
      >
        {pictures.map((src, index) => (
          <SwiperSlide key={index} className="h-full">
            <div className="relative w-full h-full">
              <Image
                src={src}
                alt="Resource image"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority={index === 0}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx global>{`
        .swiper,
        .swiper-wrapper,
        .swiper-slide {
          height: 100% !important;
        }

        .swiper-button-next,
        .swiper-button-prev {
          width: 35px !important;
          height: 35px !important;
          background: rgba(255, 255, 255, 0.9);
          border-radius: 50%;
          opacity: 0;
          transition: all 0.2s ease;
        }

        .group:hover .swiper-button-next,
        .group:hover .swiper-button-prev {
          opacity: 0.8;
        }

        .swiper-button-next:hover,
        .swiper-button-prev:hover {
          opacity: 1 !important;
          background: white;
        }

        .swiper-button-next::after,
        .swiper-button-prev::after {
          font-size: 1rem !important;
          font-weight: bold;
          color: #1e3a8a;
        }

        .swiper-pagination {
          bottom: 8px !important;
        }

        .swiper-pagination-bullet {
          width: 6px !important;
          height: 6px !important;
          margin: 0 3px !important;
          background: rgba(255, 255, 255, 0.7);
        }

        .swiper-pagination-bullet-active {
          background: var(--primary-color) !important;
        }
      `}</style>
    </div>
  );
}
