import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Image, { StaticImageData } from 'next/image';

interface SwiperPropTypes{
    pictures: StaticImageData[] | string[];
    
}

export default function SwiperWithNavigation({pictures}: SwiperPropTypes) {
    const pictureIndex = pictures.map((picture, index)=>index)
    // const pagination = {
    //     clickable: true,
    //     renderBullet: function (pictureIndex, className) {
    //       return '<span class="' + className + '">' + (pictureIndex + 1) + '</span>';
    //     },
    //   };
      
  return (
    <>
      <Swiper 
      navigation={true} 
      modules={[Autoplay, Navigation, Pagination]}
      autoplay={{
        delay: 2000,
        pauseOnMouseEnter: true,
      }}
    //   pagination={pagination}
      autoHeight={true}
      className="w-full h-full"
      >
       {pictures.map((data, index)=>(
         <SwiperSlide key={index}>
            <Image src={data} alt='Recent-News' />
         </SwiperSlide>
       ))}
        
      </Swiper>
    </>
  );
}
