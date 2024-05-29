"use client";
import React from "react";
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
import Image from "next/image";
import eduInam from "../../public/images/teachingstaff/eduinam4.jpg";
import profInam from "../../public/images/teachingstaff/profInam2.jpg";
import homeData, { studentsData, homeStaffData } from "../lib/data";
import { HomepageSlider } from "@/components";
import HomeSections from "@/components/HomeSections";
import Lecturers from "@/components/Lecturers";
import Link from "next/link";
import { Button } from "@/components";

export default function Home() {
  const headOfDepartment = [
    { title: "prof1", src: eduInam },
    { title: "prof2", src: profInam },
  ];
  return (
    <main className="w-full min-h-screen relative bg-slate-100">
      <Swiper
        centeredSlides
        loop
        autoplay={{
          delay: 3000,
          pauseOnMouseEnter: true,
          disableOnInteraction: true,
        }}
        // pagination={{
        //   clickable: true,
        // }}
        modules={[Autoplay, Pagination]}
        className="w-full h-full"
      >
        {homeData.map((item) => {
          const { title, description, image, greeting, btnLink } = item;
          return (
            <SwiperSlide key={title}>
              <HomepageSlider
                bgImage={image}
                title={title}
                greeting={greeting}
                btnLink={btnLink}
                description={description}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <section className="w-11/12 mx-auto p-4 flex flex-col justify-between items-center gap-10 md:flex-row mt-2">
        <div className="md:w-1/2">
          <HomeSections
            greeting="Welcome note from"
            title="head of the department"
            routeLink="/about"
            animateDirection="left"
            description={
              "Professor Edu Inam, Head of the Department of Chemistry, welcomes you to the Department of Chemistry, University of Uyo." +
              "\n" +
              "Chemistry is a fascinating subject that we are all incredibly passionate about here at University of Uyo. Often referred to as the “central science”, chemistry provides us with a unique perspective of the universe, emerging from the fundamental properties and interactions of atoms and molecules. Learning to control chemical processes enables us to shape the world around us. As the scientific study of the matter that makes up everything around us, chemistry allows us to continually push boundaries of understanding, and to carry out research that advances knowledge and improves lives."
            }
          />
        </div>
        <aside className="w-full md:w-5/12 lg:w-[32%]">
          <Swiper
            spaceBetween={30}
            effect={"fade"}
            autoplay={{
              delay: 3000,
            }}
            modules={[EffectFade, Autoplay]}
            className="mySwiper"
          >
            {headOfDepartment.map((item) => (
              <SwiperSlide
                key={item.title}
                className="aspect-w-4 aspect-h-5 md:aspect-w-3 md:aspect-h-[3.45]"
              >
                <Image
                  className="object-cover"
                  src={item.src}
                  alt="Prof Edu Inam"
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="p-4 w-full bg-secondary text-xl  text-center font-bold text-white">
            <h6> Prof. Edu Inam </h6>
            <p> Head of Department</p>
          </div>
        </aside>
      </section>
      <section className="bg-white px-4 py-14">
        <h5 className="text-center text-primary md:w-1/3 lg:w-[25%] mx-auto border-l-secondary border-l-4 capitalize font-bold text-2xl">
          Why study Chemistry?
        </h5>
        <div className="my-6 md:w-5/6 mx-auto">
          <p className="text-blue-900">
            <span className="text-lg text-secondary">Chemistry</span> is the
            study of matter; its composition, property and uses. Essentially{" "}
            <span className="text-lg text-secondary">Chemistry</span> is a
            central science course and father of all sciences; it has many
            industrial and societal applications - From concocting life-saving
            medicines to formulating sustainable materials,{" "}
            <span className="text-lg text-secondary">
              <span className="text-lg text-secondary">Chemistry</span>
            </span>{" "}
            is the unsung hero behind numerous industrial marvels. Want to
            understand climate change or figure out how to make cleaner energy
            sources? <span className="text-lg text-secondary">Chemistry</span>{" "}
            has the answers.
          </p>
        </div>
      </section>
      <section className="w-11/12 mx-auto p-6 ">
        <h5 className="text-center text-primary md:w-1/3 lg:w-[22%] mx-auto border-l-secondary border-l-4 uppercase font-bold text-2xl">
          Meet our Staff
        </h5>
        <div className="my-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 justify-between items-center gap-12 md:gap-6">
          {homeStaffData.map((staff) => {
            return (
              <div className="h-full" key={staff.name}>
                <Lecturers
                  name={staff.name}
                  image={staff.image}
                  title={staff.title}
                  desc={staff.desc}
                  href={staff.name}
                />
              </div>
            );
          })}
        </div>
        <Button
        arrow
          variant="transparent"
          className="text-black border-black w-full md:w-1/2 lg:w-1/3 rounded-lg mx-auto"
        >
          <Link href="/staff/teach-staff" className="text-xl">
            More about our staff
          </Link>
        </Button>
      </section>
    
      {/* <section className="bg-sky-100 container w-11/12 mx-auto p-4 flex flex-col justify-between items-center gap-10 md:flex-row mt-5">
        <Swiper
          effect={"cards"}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, EffectCards, Pagination]}
          className="w-full h-full"
        >
          {studentsData.map((student) => {
            return (
              <SwiperSlide className="bg-center bg-cover" key={student.id}>
                <Image
                  className="block w-full"
                  src={student.image}
                  alt="Students"
                />
              </SwiperSlide>
            );
          })}
        </Swiper>

        <HomeSections
          greeting="Meet Our"
          title="Students"
          routeLink="/programmes/undergraduate"
          description=""
          animateDirection="right"
        />
      </section> */}

      <section className="flex flex-col p-4 md:flex-row justify-between w-11/12 items-center mx-auto">
        <div>
          <h1 className="font-bold">Recent News</h1>
        </div>
        <div>
          <h1 className="font-bold">Upcoming Events</h1>
        </div>
      </section>
    </main>
  );
}
