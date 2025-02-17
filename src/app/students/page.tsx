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
import { truncateWords } from "@/utils/truncateWords";
import { seventeenSeriesGradList, eighteenSeriesGradList } from "@/lib/graduationList";
const Page = () => {
    const swiperRef = useRef<any>(null);
    const isLaptop = useMediaQuery({
        query: "(min-width: 1024px)",
    });
    const studentNews = recentNews.filter((news) => news.tag === "student");

    const scrollToActivities = () => {
        const activitiesSection = document.getElementById('recent-activities');
        if (activitiesSection) {
            activitiesSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <main className="bg-gradient-to-b from-[#eff5f5] to-white">
            {/* Hero Section */}
            <section className="relative h-[60vh] min-h-[500px] bg-gradient-to-r from-blue-900 to-blue-700 overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/chemistry-bg.jpg')] bg-cover bg-center mix-blend-overlay opacity-20"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30"></div>
                <div className="relative z-10 h-full flex flex-col items-center justify-center text-white px-4">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 leading-tight">
                        Student Life at Chemistry Department
                    </h1>
                    <p className="text-lg md:text-xl text-center max-w-3xl mx-auto mb-8 text-gray-100">
                        Join a vibrant community of future chemists, researchers, and innovators. Discover opportunities, connect with peers, and shape your academic journey.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <button
                            onClick={scrollToActivities}
                            className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transition-colors">
                            Explore Activities
                        </button>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-10 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="text-4xl font-bold text-blue-900 mb-2">500+</div>
                            <div className="text-gray-600">Active Students</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-blue-900 mb-2">50+</div>
                            <div className="text-gray-600">Annual Events</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-blue-900 mb-2">2</div>
                            <div className="text-gray-600">Student Organizations</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Student Organizations */}
            <section className="py-10 px-4 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-blue-900 mb-4">Student Organizations</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Join our prestigious student organizations and become part of a global network of chemistry professionals
                        </p>
                    </div>

                    <div className="lg:max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
                        {/* ACS Card */}
                        <div className="bg-white rounded-2xl overflow-hidden shadow group hover:shadow-sm transition-all duration-300">
                            <div className="aspect-video bg-gradient-to-br from-blue-500 to-blue-700 p-8 relative">
                                <div className="absolute inset-0 bg-black/20"></div>
                                <div className="relative z-10 ">

                                    <div className="text-white text-3xl font-bold mb-2 flex items-center">
                                        <div className="bg-white flex items-center justify-center mr-2">
                                            <Image
                                                src="/images/acs-logo.png"
                                                alt="ACS"
                                                width={100}
                                                height={100}
                                                priority
                                                loading="eager"
                                                className="object-contain"
                                            />
                                        </div>
                                        <h5>ACS</h5>
                                    </div>
                                    <div className="text-blue-100">American Chemical Society</div>
                                </div>
                            </div>
                            <div className="p-8">
                                <p className="text-gray-600 mb-6">
                                    Connect with the world&apos;s largest scientific society. Access exclusive resources, networking events, and professional development opportunities.
                                </p>
                                <div className="space-y-6">
                                    <h3 className="font-semibold text-lg text-blue-900">Membership Benefits</h3>
                                    <ul className="space-y-3">
                                        <li className="flex items-center text-gray-700">
                                            <span className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                                                <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                </svg>
                                            </span>
                                            Access to ACS Publications
                                        </li>
                                        <li className="flex items-center text-gray-700">
                                            <span className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                                                <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                </svg>
                                            </span>
                                            Career Development Resources
                                        </li>
                                        <li className="flex items-center text-gray-700">
                                            <span className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                                                <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                </svg>
                                            </span>
                                            Networking Opportunities
                                        </li>
                                    </ul>
                                    <p className="text-slate-500">
                                        Please contact the Staff Advisor at the Department of Chemistry General office to Register
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* SCSN Card */}
                        <div className="bg-white rounded-2xl overflow-hidden shadow group hover:shadow-sm transition-all duration-300">
                            <div className="aspect-video bg-gradient-to-br from-orange-500 to-orange-700 p-8 relative">
                                <div className="absolute inset-0 bg-black/20"></div>
                                <div className="relative z-10">

                                    <div className="text-white text-3xl font-bold mb-2 flex items-center">
                                        <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center mr-2">
                                            <Image
                                                src="/images/logo-removebg.png"
                                                alt="SCSN"
                                                width={100}
                                                height={100}
                                                priority
                                                loading="eager"
                                                className="object-contain"
                                            />
                                        </div>
                                        <h5>SCSN</h5>
                                    </div>
                                    <div className="text-green-100">Students Chemical Society of Nigeria</div>
                                </div>
                            </div>
                            <div className="p-8">
                                <p className="text-gray-600 mb-6">
                                    Be part of Nigeria&apos;s premier chemical society. Engage in local research, industry connections, and professional development.
                                </p>
                                <div className="space-y-6">
                                    <h3 className="font-semibold text-lg text-orange-900">Membership Benefits</h3>
                                    <ul className="space-y-3">
                                        <li className="flex items-center text-gray-700">
                                            <span className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center mr-3">
                                                <svg className="w-4 h-4 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                </svg>
                                            </span>
                                            Local Industry Connections
                                        </li>
                                        <li className="flex items-center text-gray-700">
                                            <span className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center mr-3">
                                                <svg className="w-4 h-4 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                </svg>
                                            </span>
                                            Research Opportunities
                                        </li>
                                        <li className="flex items-center text-gray-700">
                                            <span className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center mr-3">
                                                <svg className="w-4 h-4 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                </svg>
                                            </span>
                                            Professional Workshops
                                        </li>
                                    </ul>
                                    <p className="text-slate-500">
                                        Please contact the Staff Advisor at the Department of Chemistry General office to Register
                                    </p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Recent Activities */}
            <section id="recent-activities" className="py-10 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-2">
                        <h2 className="text-4xl font-bold text-blue-900 mb-4">Recent Activities</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Stay updated with the latest events, research projects, and achievements from our student organizations
                        </p>
                    </div>

                    <div className="relative">
                        <Swiper
                            modules={[Autoplay]}
                            spaceBetween={30}
                            slidesPerView={isLaptop ? 3 : 1}
                            loop={true}
                            autoplay={{
                                delay: 3000,
                                pauseOnMouseEnter: true,
                            }}
                            onSwiper={(swiper) => {
                                swiperRef.current = swiper;
                            }}
                            className="!py-8"
                        >
                            {studentNews.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <div className="bg-white rounded-xl overflow-hidden shadow hover:shadow-md transition-all duration-300">
                                        <div className="aspect-video relative overflow-hidden">
                                            <Image
                                                src={item.pictures[0]}
                                                alt={item.title}
                                                fill
                                                loading="eager"
                                                className="object-cover transform hover:scale-110 transition-transform duration-300"
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            />
                                        </div>
                                        <div className="p-6">
                                            <div className="text-sm text-gray-500 mb-2">{item.date}</div>
                                            <h3 className="text-xl font-semibold text-gray-900 mb-4">
                                                {truncateWords(item.title, 10)}
                                            </h3>
                                            <Link
                                                href={`/recent-news/${item.title.replaceAll(" ", "-")}`}
                                                className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center"
                                            >
                                                Read More
                                                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <div className="flex gap-4 justify-center mt-8">
                            <button
                                onClick={() => swiperRef.current?.slidePrev()}
                                className="p-3 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200 transition-colors"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                                </svg>
                            </button>
                            <button
                                onClick={() => swiperRef.current?.slideNext()}
                                className="p-3 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200 transition-colors"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Research Projects Section */}
            <section className="py-10 px-4 bg-gray-50">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-4">
                        <h2 className="text-4xl font-bold text-blue-900 mb-4">Undergraduate Research</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Explore our students&apos; innovative research projects and contributions to chemical sciences
                        </p>
                    </div>

                    <div className="space-y-6">
                        <Accordion
                            title="2021/2022 Research Projects"
                            content={<StudentsTable tableData={eighteenSeries} />}
                        />
                        <Accordion
                            title="2020/2021 Research Projects"
                            content={<StudentsTable tableData={seventeenSeries} />}
                        />
                        <Accordion
                            title="2019/2020 Research Projects"
                            content={<StudentsTable tableData={sixteenSeries} />}
                        />
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Page;
