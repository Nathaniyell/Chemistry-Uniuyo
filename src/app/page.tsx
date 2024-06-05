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
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import Image from "next/image";
import eduInam from "../../public/images/teachingstaff/eduinam4.jpg";
import profInam from "../../public/images/teachingstaff/profInam2.jpg";
import homeData, { studentsData, homeStaffData } from "@/lib/data";
import { Card, HomepageSlider } from "@/components";
import HomeSections from "@/components/HomeSections";
import Lecturers from "@/components/Lecturers";
import Link from "next/link";
import { Button } from "@/components";
import News from "@/components/News/News";
import { publications } from "@/lib";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

export default function Home() {
  const headOfDepartment = [
    { title: "prof1", src: eduInam },
    { title: "prof2", src: profInam },
  ];

  const btnClasses = "rounded-full bg-primary hover:border-primary text-white"
  const swiper = useSwiper();
  return (
    <main className="w-full min-h-screen relative bg-slate-100">
      <Swiper
        centeredSlides
        loop
        autoplay={{
          delay: 5000,
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
        <h5 className="text-center text-primary md:w-1/2 lg:w-[32%] mx-auto border-l-secondary border-l-4 font-black text-[24px] md:text-[30px] uppercase">
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
        <h5 className="text-center text-primary md:w-1/2 lg:w-[30%] mb-5 mx-auto border-l-secondary border-l-4 uppercase font-black text-[24px] md:text-[30px]">
          Meet our Staff
        </h5>
        <div className="my-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-between items-center gap-12 md:gap-6 mt-10">
          {homeStaffData.map((staff) => {
            return (
              <div className="h-full !capitalize" key={staff.name}>
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
          variant="primary"
          className="text-white w-full md:w-1/2 lg:w-[25%] mx-auto"
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
      <div className="bg-white mt-10">

        <section className="flex flex-col p-4 gap-14 w-11/12 items-center mx-auto">
          <div className="grid place-items-center grid-cols-1 gap-10">
            <h1 className="text-center text-primary px-4 mx-auto border-r-secondary border-r-4 uppercase font-black text-[24px] md:text-[30px]">Recent News</h1>
            <News />
          </div>
        </section>
        <div className="bg-orange-100 my-10 p-20 flex flex-col gap-10 md:flex-row justify-between items-center">
          <h1 className="font-black text-amber-800 w-full md:w-1/2 lg:w-2/5 text-2xl">Explore the Impressive Resources and Facilities of the Department of Chemistry, University of Uyo</h1>

          <Button
            variant="transparent"
            className="text-white !bg-amber-900 shadow-md border-none !text-2xl !text-center"
            arrow
          >
            <Link href="/resources">
              Take tour
            </Link>
          </Button>
        </div>
        <section className="flex flex-col p-4 gap-14 w-11/12 items-center mx-auto">
          <div className="space-y-10 w-full">
            <h1 className="text-center w-full text-primary px-4 mx-auto border-l-secondary border-l-4 uppercase font-black text-[24px] md:text-[30px]">Recent Research Expeditions</h1>

            {/* break into a component later */}
            <aside>
              <Swiper className="w-[98%] p-2">

                {publications
                  .slice(0, 4)
                  .map(({ title, unit, author, published_at, desc, href }, index) => (
                    <SwiperSlide key={index}>
                      <Card
                        isResearchPage={false}
                        title={title}
                        type="publication"
                        unit={unit ?? ""}
                        author={author}
                        published_at={published_at}
                        desc={desc}
                        href={href}
                      /></SwiperSlide>
                  ))}

                <div className="flex gap-2 justify-center mt-4">
                  <Button className={btnClasses} onClick={() => swiper.slidePrev()}><ArrowLeftIcon className="w-4" /></Button>
                  <Button className={btnClasses} onClick={() => swiper.slideNext()}><ArrowRightIcon className="w-4" /></Button>
                </div>
              </Swiper>
            </aside>
            <Button
              variant="transparent"
              className="mx-auto place-self-center !text-xl border-slate-500"
            >
              More about Research
              <MdOutlineKeyboardDoubleArrowRight className="ml-1 animate-pulse text-lg" />
            </Button>
          </div>
        </section>
      </div>
    </main>
  );
}
