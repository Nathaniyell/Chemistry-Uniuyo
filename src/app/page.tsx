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

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative">
        <Swiper
          loop
          effect="fade"
          autoHeight={true}
          autoplay={{
            delay: 5000,
            pauseOnMouseEnter: true,
            disableOnInteraction: false,
          }}
          navigation={!isMobile}
          modules={[Autoplay, Pagination, Navigation, EffectFade]}
          className="w-full h-[70vh] md:h-[80vh]"
        >
          {homeData.map((item) => (
            <SwiperSlide key={item.title}>
              <HomepageSlider
                bgImage={item.image}
                title={item.title}
                greeting={item.greeting}
                btnLink={item.btnLink}
                description={item.description}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Welcome Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
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

            <div className="w-full md:w-5/12 lg:w-[38%] bg-white rounded-lg shadow-lg overflow-hidden">
              <Swiper
                effect="fade"
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                modules={[EffectFade, Autoplay]}
                className="aspect-[3/4]"
              >
                {headOfDepartment.map((item) => (
                  <SwiperSlide key={item.title}>
                    <div className="relative w-full h-full">
                      <Image
                        src={item.src}
                        alt="Prof Edu Inam"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="p-6 bg-blue-900 text-white text-center">
                <h3 className="text-xl font-bold">Prof. Edu Inam</h3>
                <p className="text-blue-100 mt-1">Head of Department</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Study Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-16">
            Why Study Chemistry at the University of Uyo?
          </h2>

          <div className="grid gap-6 md:gap-8">
            {[
              {
                title: "Experienced Staff",
                content: "Our faculty members are distinguished professionals who have received numerous awards for their contributions to the field of chemistry.",
                link: "/staff/teach-staff"
              },
              {
                title: "Peaceful and Serene Environment",
                content: "Our campus provides a tranquil and safe setting conducive to learning and research."
              },
              {
                title: "Dedicated and Friendly Staff Members",
                content: "Our staff is committed to supporting and guiding students through their academic journey.",
                link: "/staff/teach-staff"
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
                content: "We boast a vibrant community with professional associations such as the Student Chemical Society of Nigeria (SCSN) for undergraduates, the Graduate Student Association (GRASA) for graduate students, and an International Student Chapter of the American Chemical Society (ACS) open to all students."
              }
            ].map((item, index) => (
              <details
                key={index}
                className="bg-white rounded-lg shadow-sm hover:shadow transition-all duration-300 group"
              >
                <summary className="p-6 cursor-pointer text-xl font-semibold text-blue-900 flex items-center justify-between">
                  {item.title}
                  <span className="transform group-open:rotate-180 transition-transform duration-200">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <div className="px-6 pb-6 text-gray-600">
                  <p>{item.content}</p>
                  {item.link && (
                    <Link href={item.link} className="inline-block mt-4 text-orange-600 hover:text-orange-700 font-medium">
                      Find out more
                    </Link>
                  )}
                </div>
              </details>
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
          <p className="text-gray-600 leading-relaxed mb-8">
            The Department of Chemistry offers a Bachelor of Science (B.Sc) degree in Chemistry at the undergraduate level and Master of Science (M.Sc) and PhD degrees in various specializations including Industrial, Environmental, Physical, Organic, Inorganic, and Analytical Chemistry.
          </p>
          <Link
            href="/programmes/undergraduate"
            className="inline-flex items-center text-orange-600 hover:text-orange-700 font-medium"
          >
            Find out more
            <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Staff Section */}
      <section className="py-20 bg-blue-900">
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
                  href={`/staff/teach-staff/${staff.name.replaceAll(" ", "-")}`}
                  cardTitleStyle="hover:text-orange-500"
                  cardImgContainerStyle="aspect-[3/4]"
                  cardImgStyle="object-cover"
                />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <RouteLinkBtn
              href="/staff/teach-staff"
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
        <div className="max-w-7xl mx-auto px-4">
          {/* Recent News */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-12">
              Recent News
            </h2>
            <News />
          </div>

          {/* Resources Banner */}
          <div className="bg-blue-900 rounded-xl p-8 md:p-12 mb-20">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white md:w-1/2">
                Explore the Impressive Resources and Facilities of the Department of
                Chemistry, University of Uyo
              </h2>

              <RouteLinkBtn
                href="/resources"
                variant="primary"
                className="bg-orange-600 hover:bg-orange-700 text-white shadow-md border-none px-8 py-3"
                arrow
              >
                Take tour
              </RouteLinkBtn>
            </div>
          </div>

          {/* Recent Research */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-12">
              Recent Research Expeditions
            </h2>
            <HomeResearchSlider />
          </div>
        </div>
      </section>
    </div>
  );
}
