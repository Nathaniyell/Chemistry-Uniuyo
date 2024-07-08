"use client";
import React from "react";
import { Autoplay, Pagination, EffectFade, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import Image from "next/image";
import eduInam from "../../public/images/teachingstaff/eduinam4.jpg";
import profInam from "../../public/images/teachingstaff/profInam2.jpg";
import homeData, { homeStaffData } from "@/lib/data";
import { HomepageSlider, RouteLinkBtn } from "@/components";
import HomeSections from "@/components/HomeSections";
import Lecturers from "@/components/Lecturers";
import Link from "next/link";
import News from "@/components/News/News";
import HomeResearchSlider from "@/components/HomeResearchSlider";

export default function Home() {
  const headOfDepartment = [
    { title: "prof1", src: eduInam },
    { title: "prof2", src: profInam },
  ];

  return (
    <main className="w-full min-h-screen relative bg-slate-100 overflow-x-hidden">
      <Swiper
        centeredSlides
        loop
        autoplay={{
          delay: 3000,
          pauseOnMouseEnter: true,
          disableOnInteraction: true,
        }}
        navigation={true}
        // pagination={{
        //   clickable: true,
        // }}
        modules={[Autoplay, Pagination, Navigation]}
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
      <section className="w-11/12 mx-auto p-4 flex flex-col justify-between gap-10 md:flex-row mt-2">
        <div className="md:w-1/2">
          <HomeSections
            greeting="Welcome note from"
            title="head of the department"
            routeLink="/about"
            readMore={true}
            animateDirection="left"
            description={`On behalf of all staff members, I warmly welcome you to the Department of Chemistry at the University of Uyo. \n  Chemistry as the “central science” subject is a fascinating field that we are immensely passionate about at our institution. This discipline offers a unique perspective of the universe, rooted in the fundamental properties and interactions of atoms and molecules. By learning to control chemical processes, we gain the ability to shape the world around us. \n  As a department that drives research and development, studying chemistry with us help to continually push the boundaries of conducting ground-breaking research, and make advancements that improve lives.`}
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
        <h5 className="text-center text-primary md:w-[60%] lg:w-[70%] mx-auto font-black text-[24px] md:text-[30px] uppercase">
        Why Study Chemistry at the University of Uyo?
        </h5>
        <div className="my-6 md:w-4/6 mx-auto !leading-loose grid grid-cols-1 gap-4">
        <details>
        <summary className="text-lg font-[500]">Experienced Staff</summary>
        <p>Our faculty members are distinguished professionals who have received numerous awards for their contributions to the field of chemistry.</p>
      </details>
      <details>
        <summary className="text-lg font-[500]">Peaceful and Serene Environment</summary>
        <p>Our campus provides a tranquil and safe setting conducive to learning and research.</p>
      </details>
      <details>
        <summary className="text-lg font-[500]">Dedicated and Friendly Staff Members</summary>
        <p>Our staff is committed to supporting and guiding students through their academic journey.</p>
      </details>
      <details>
        <summary className="text-lg font-[500]">Well-Equipped Research Facilities</summary>
        <p>We offer research facilities to support studies and innovative research projects. Our research centre aims to offer state-of-the-art research and innovation infrastructure for advanced work (visit: www.iceesr.org.ng).</p>
      </details>
      <details>
        <summary className="text-lg font-[500]">Modern E-Resources</summary>
        <p>We provide access to the latest e-resources in the university library to enhance study and research capabilities.</p>
      </details>
      <details>
        <summary className="text-lg font-[500]">International Collaborations</summary>
        <p>We have established MOUs with institutions and research centers abroad, facilitating exchange programs and collaborative research opportunities.</p>
      </details>
      <details>
        <summary className="text-lg font-[500]">Active Student Associations</summary>
        <p>We boast a vibrant community with professional associations such as the Student Chemical Society of Nigeria (SCSN) for undergraduates, the Graduate Student Association (GRASA) for graduate students, and an International Student Chapter of the American Chemical Society (ACS) open to all students.</p>
      </details>
        </div>
      </section>
      <section className="w-11/12 mx-auto p-4 md:p-6 grid gap-4 grid-cols-1">
      <h5 className="text-center text-primary  md:w-[60%] lg:w-[70%] mx-auto font-black text-[24px] md:text-[30px] uppercase">
      Undergraduate and Postgraduate Programmes
        </h5>
        <div>
        <p>The Department of Chemistry offers a Bachelor of Science (BSc) degree in Chemistry at the undergraduate level and Master of Science (MSc) and PhD degrees in various specializations including Industrial, Environmental, Physical, Organic, Inorganic, and Analytical Chemistry.</p>
        <Link href="/programmes/undergraduate"  className="border-0 w-1/6 !text-left !px-0 text-primary underline">
            Find out more
        </Link>
        </div>

      </section>
      <section className="w-11/12 mx-auto p-4 md:p-6 ">
        <h5 className="text-center text-primary md:w-1/2 lg:w-[30%] mb-5 mx-auto uppercase font-black text-[24px] md:text-[30px]">
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
                  href={`/staff/teach-staff/${staff.name.replaceAll(" ", "-")}`}
                  cardTitleStyle="hover:text-secondary"
                  cardImgContainerStyle="!aspect-w-4 !aspect-h-5 md:!aspect-h-4"
                  cardImgStyle="object-cover"
                />
              </div>
            );
          })}
        </div>
        <RouteLinkBtn
          href="/staff/teach-staff"
          arrow
          variant="primary"
          className="text-white w-full md:w-1/2 lg:w-[25%] mx-auto"
        >
          More about our staff
        </RouteLinkBtn>
      </section>

      <div className="bg-white mt-10">
        <section className="flex flex-col p-4 gap-14 w-11/12 items-center mx-auto">
          <div className="grid place-items-center grid-cols-1 gap-10">
            <h1 className="text-center text-primary px-4 mx-auto uppercase font-black text-[24px] md:text-[30px]">
              Recent News
            </h1>
            <News />
          </div>
        </section>
        <div className="bg-orange-100 my-10 p-8 md:p-14 flex flex-col gap-10 md:flex-row justify-between items-center">
          <h1 className="font-black text-amber-800 w-full md:w-1/2 lg:w-2/5 mx-auto md:mx-0 text-2xl">
            Explore the Impressive Resources and Facilities of the Department of
            Chemistry, University of Uyo
          </h1>

          <RouteLinkBtn
            href="/resources"
            variant="transparent"
            className="text-white !bg-amber-900 shadow-md border-none !text-2xl !text-center"
            arrow
          >
            Take tour
          </RouteLinkBtn>
        </div>
        <section className="flex flex-col p-4 gap-14 w-11/12 items-center mx-auto">
          <div className="space-y-10 w-full">
            <h1 className="text-center w-full md:w-[55%] lg:w-[50%] text-primary px-4 mx-auto uppercase font-black text-[24px] md:text-[30px]">
              Recent Research Expeditions
            </h1>

            {/* ResearchSlider */}
            <HomeResearchSlider />
          </div>
        </section>
      </div>
    </main>
  );
}
