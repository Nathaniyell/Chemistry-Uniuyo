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
    <div className="relative group">
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
        className="w-full rounded-lg overflow-hidden"
      >
        {pictures.map((src, index) => (
          <SwiperSlide key={index} className="aspect-video">
            <Image
              src={src}
              alt="News image"
              className={`w-full h-full object-cover ${pictures.length === 1 ? 'md:w-3/4 mx-auto' : ''}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx global>{`
        .swiper-button-next,
        .swiper-button-prev {
          width: 40px !important;
          height: 40px !important;
          background: rgba(255, 255, 255, 0.9);
          border-radius: 50%;
          opacity: 0;
          transition: all 0.2s ease;
        }

        .group:hover .swiper-button-next,
        .group:hover .swiper-button-prev {
          opacity: 1;
        }

        .swiper-button-next:hover,
        .swiper-button-prev:hover {
          background: white;
        }

        .swiper-button-next::after,
        .swiper-button-prev::after {
          font-size: 1.2rem !important;
          font-weight: bold;
          color: #1e3a8a;
        }

        .swiper-pagination {
          bottom: 16px !important;
        }

        .swiper-pagination-bullet {
          width: 8px !important;
          height: 8px !important;
          margin: 0 4px !important;
        }

        .swiper-pagination-bullet-active {
          background: var(--primary-color) !important;
        }
      `}</style>
    </div>
  );
}
