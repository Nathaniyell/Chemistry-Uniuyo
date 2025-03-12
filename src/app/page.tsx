"use client";
import React from "react";
import { Autoplay, Pagination, EffectFade, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { useMediaQuery } from "react-responsive";

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
  const isMobile = useMediaQuery({ query: '(max-width: 700px)' });
  const isMedium = useMediaQuery({ query: '(min-width: 701px)' });
  const headOfDepartment = [
    { title: "prof1", src: eduInam },
    { title: "prof2", src: profInam },
  ];
  const whyStudyChemistry = [
    {
      title: "Experienced Staff",
      content: "Our faculty members are distinguished professionals who have received numerous awards for their contributions to the field of chemistry.",
      link: "/staff/teaching-staff"
    },
    {
      title: "Peaceful and Serene Environment",
      content: "Our campus provides a tranquil and safe setting conducive to learning and research."
    },
    {
      title: "Dedicated and Friendly Staff Members",
      content: "Our staff is committed to supporting and guiding students through their academic journey.",
      link: "/staff/teaching-staff"
    },
    {
      title: "Well-Equipped Research Facilities",
      content: "We offer research facilities to support studies and innovative research projects. Our research centre aims to offer state-of-the-art research and innovation infrastructure for advanced work.",
      link: "www.iceesr.org.ng"
    },
    {
      title: "Modern E-Resources",
      content: "We provide access to the latest e-resources in the university library to enhance study and research capabilities.",
      link: "/resources"
    },
    {
      title: "International Collaborations",
      content: "We have established MOUs with institutions and research centers abroad, facilitating exchange programs and collaborative research opportunities."
    },
    {
      title: "Active Student Associations",
      content: "We boast a vibrant community with professional associations such as the Student Chemical Society of Nigeria (SCSN) for undergraduates, the Graduate Student Association (GRASA) for graduate students, and an International Student Chapter of the American Chemical Society (ACS) open to all students.",
      link: "/students"
    }
  ]

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative">
        <Swiper
          centeredSlides
          loop
          autoHeight={true}
          autoplay={{
            delay: 3000,
            pauseOnMouseEnter: true,
            disableOnInteraction: true,
          }}
          navigation={!isMobile}
          // pagination={{
          //   clickable: true,
          // }}
          modules={[Autoplay, Pagination, Navigation]}
          className="w-full h-fit md:h-full"
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
      </section>

      {/* Welcome Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-start">
            <div className="w-full md:w-1/2 space-y-8">
              <HomeSections
                greeting="Welcome note from"
                title="head of the department"
                routeLink="/about"
                readMore={true}
                animateDirection="left"
                description={`On behalf of all staff members, I warmly welcome you to the Department of Chemistry at the University of Uyo. Chemistry as the "central science" subject is a fascinating field that we are immensely passionate about at our institution. This discipline offers a unique perspective of the universe, rooted in the fundamental properties and interactions of atoms and molecules. By learning to control chemical processes, we gain the ability to shape the world around us. As a department that drives research and development, studying chemistry with us help to continually push the boundaries of conducting ground-breaking research, and make advancements that improve lives.`}
              />
            </div>

            <div className="w-full md:w-1/2 bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="aspect-[4/3]">
                <Swiper
                  effect="fade"
                  autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                  }}
                  modules={[EffectFade, Autoplay]}
                  className="h-full"
                >
                  {headOfDepartment.map((item) => (
                    <SwiperSlide key={item.title}>
                      <div className="relative w-full h-full">
                        <Image
                          src={item.src}
                          alt="Prof Edu Inam"
                          fill
                          className="object-cover object-top"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <div className="p-6 bg-blue-900 text-white text-center">
                <h3 className="text-xl font-bold">Professor Edu Inam</h3>
                <p className="text-blue-100 mt-1">Head of Department</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Study Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
              Why Study Chemistry at University of Uyo?
            </h2>
            <div className="w-20 h-1 bg-blue-900/20 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-6xl mx-auto">
            {whyStudyChemistry.map((item, index) => (
              <div
                key={index}
                className="flex items-start space-x-3 p-4 rounded-lg bg-white hover:bg-blue-50/50 transition-colors duration-200 group"
              >
                <span className="w-2 h-2 bg-red-900 rounded-full mt-2.5 shrink-0 animate-pulse duration-200"></span>
                <div className="space-y-2">
                  <h3 className="font-semibold text-blue-900 group-hover:text-blue-800">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.content}
                  </p>
                  {item.link && (
                    <Link
                      href={item.link}
                      className="inline-flex items-center text-sm text-blue-700 hover:text-blue-800 font-medium group/link"
                    >
                      Learn more
                      <svg
                        className="w-4 h-4 ml-1 transform group-hover/link:translate-x-1 transition-transform duration-200"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-8">
            Undergraduate and Postgraduate Programmes
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            The Department of Chemistry offers a Bachelor of Science (B.Sc) degree in Chemistry at the undergraduate level and Master of Science (M.Sc) and PhD degrees in various specializations including Industrial, Environmental, Physical, Organic, Inorganic, and Analytical Chemistry.
          </p>
          <Link
            href="/programmes/undergraduate"
            className="inline-flex items-center px-6 py-3 mt-3 text-sm font-medium text-white bg-red-900 rounded-lg hover:bg-red-800 transition-all duration-200 shadow-sm hover:shadow group"
          >
            Find out more
            <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Staff Section */}
      <section className="py-20 bg-blue-900 rounded-tr-xl rounded-tl-xl">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
            Meet Our Staff
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {homeStaffData.map((staff) => (
              <div key={staff.name} className="h-full transform hover:-translate-y-1 transition-transform duration-300">
                <Lecturers
                  name={staff.name}
                  image={staff.image}
                  title={staff.title}
                  desc={staff.desc}
                  href={`/staff/teaching-staff/${staff.name.replaceAll(" ", "-")}`}
                  cardTitleStyle="hover:text-orange-500"
                  cardImgContainerStyle="!aspect-w-4 !aspect-h-5 md:!aspect-h-4"
                  cardImgStyle="object-cover"
                />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <RouteLinkBtn
              href="/staff/teaching-staff"
              arrow
              variant="primary"
              className="inline-flex items-center px-8 py-3 bg-white text-blue-700 shadow-md"
            >
              More about our staff
            </RouteLinkBtn>
          </div>
        </div>
      </section>

      {/* News and Research Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          {/* Recent News */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-12">
              Recent News
            </h2>
            <News />
          </div>
          <hr />
          {/* Recent Research */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center my-12">
              Recent Research Expeditions
            </h2>
            <HomeResearchSlider />
          </div>
        </div>
        {/* Resources Banner */}
        <div className="bg-blue-900 md:w-[95%] mx-auto rounded-xl p-8 md:p-12 mt-20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white md:w-1/2">
              Explore the Impressive Resources and Facilities of the Department of
              Chemistry, University of Uyo
            </h2>

            <RouteLinkBtn
              href="/resources"
              variant="primary"
              className="bg-white !text-center text-blue-700 shadow-md border-none px-8 py-3"
              arrow
            >
              Take tour
            </RouteLinkBtn>
          </div>
        </div>
      </section>
    </div>
  );
}
