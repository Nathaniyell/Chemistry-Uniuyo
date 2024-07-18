"use client";
import { Header, Lecturers } from "@/components";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useMediaQuery } from "react-responsive";
import "swiper/css";
import "swiper/css/pagination";
import { recentNews } from "@/lib";
import Image from "next/image";
import Link from "next/link";
import Accordion from "@/components/students/Accordion";
import StudentsTable from "@/components/students/StudentsTable";
import { eighteenSeries, seventeenSeries, sixteenSeries } from "@/lib/undergraduateProject";
import { useRef } from "react";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import { truncateWords } from "@/utils/truncateWords";
const Page = () => {
    const swiperRef = useRef<any>(null);
    const isLaptop = useMediaQuery({
        query: "(min-width: 1024px)",
    });
    const studentNews = recentNews.filter((news) => news.tag === "student");

    return (
        <main className="mb-14  bg-[#eff5f5]">
            <Header
                heading="Students Corner"
                tagline="Discover the achievements of our students, explore their undergraduate research projects, view the names and grades of past students, and experience the excitement of studying in the Department of Chemistry at the University of Uyo."

            />
            <section className="w-11/12 md:w-10/12 mx-auto my-6">
                <h1 className="font-semibold text-2xl text-blue-950 mb-6 text-center">
                    Recent Expedition by our students
                </h1>
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={30}
                    slidesPerView={isLaptop ? 2 : 1}
                    loop={true}
                    autoplay={{
                        delay: 3000,
                        pauseOnMouseEnter: true,
                    }}
                    onSwiper={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                >
                    {studentNews.map((item, index) => (
                        <SwiperSlide key={index}>
                            <Lecturers
                                name={truncateWords(item.title, 10)}
                                image={item.pictures[0]}
                                href={`/recent-news/${item.title.replaceAll(" ", "-")}`}
                                date={item.date}
                                cardContainerStyle="!items-stretch"
                                cardBodyStyle="p-4 flex flex-col justify-between border shadow !h-full"
                                cardTitleStyle=""
                                readMore
                                cardImgContainerStyle="flex-grow"
                                readMoreLink={`/recent-news/${item.title.replaceAll(" ", "-")}`}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
                <aside className="flex gap-6 xs:gap-8 items-center justify-center my-4">
                    <div className="space-x-3 shrink-0">
                        <button
                            onClick={() => swiperRef.current.slidePrev()}
                            className="bg-transparent p-2 rounded-full text-titles hover:bg-primary border hover:text-white border-primary active:scale-105 transition-all duration-300"
                        >
                            <IoIosArrowRoundBack className="size-8" />
                        </button>
                        <button
                            onClick={() => swiperRef.current.slideNext()}
                            className="bg-transparent p-2 rounded-full text-titles hover:bg-primary border hover:text-white border-primary active:scale-105 transition-all duration-300"
                        >
                            <IoIosArrowRoundForward className="size-8" />
                        </button>
                    </div>
                </aside>
                <section className="mt-6 py-6">
                    <h1 className="font-semibold text-2xl text-blue-950 mb-6 text-center">
                        Undergraduate Research Project Topics
                    </h1>
                    <Accordion
                        title="2019/2020"
                        content={<StudentsTable tableData={sixteenSeries} />}
                    />
                    <Accordion
                        title="2020/2021"
                        content={<StudentsTable tableData={seventeenSeries} />}
                    />
                    <Accordion
                        title="2021/2022"
                        content={<StudentsTable tableData={eighteenSeries} />}
                    />
                </section>
                <section className="mt-6 py-6">
                    <h1 className="font-semibold text-2xl text-blue-950 mb-6 text-center">
                        Past student Records
                    </h1>
                </section>
            </section>
        </main>
    );
};

export default Page;
