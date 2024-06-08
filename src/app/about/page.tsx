"use client"
import profInam from "../../../public/images/teachingstaff/prof-inam.jpg";
import labStaff from "../../../public/images/staffLab.jpg";
import groupStaff from "../../../public/images/chemistry_lab/group-staff.jpg"
import eduInam from "@/public/images/teachingstaff/eduinam4.jpg";
import ProfInam from "@/public/images/teachingstaff/profInam2.jpg";
import Image from "next/image";
import { HomeSections, HomepageSlider, RouteLinkBtn } from "@/components";
import { FaEye } from "react-icons/fa";
import { MdHistory } from "react-icons/md";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const page = () => {
  const aboutImagesArray = [groupStaff, labStaff]
  const headOfDepartment = [
    { title: "prof1", src: eduInam },
    { title: "prof2", src: ProfInam },
  ];
  return (
    <>
      <div className="text-zinc-900 my-10 w-11/12 mx-auto">
      <section className="mx-auto p-4 flex flex-col justify-between items-center gap-10 md:flex-row-reverse mt-2">
        <div className="md:w-[65%]">
          <HomeSections
            greeting="Welcome note from"
            title="head of the department"
            routeLink=""
            animateDirection="right"
            readMore={false}
            description={
              "Professor Edu Inam, Head of the Department of Chemistry, welcomes you to the Department of Chemistry, University of Uyo." +
              "\n" +
              "Chemistry is a fascinating subject that we are all incredibly passionate about here at University of Uyo. Often referred to as the “central science”, chemistry provides us with a unique perspective of the universe, emerging from the fundamental properties and interactions of atoms and molecules. Learning to control chemical processes enables us to shape the world around us. As the scientific study of the matter that makes up everything around us, chemistry allows us to continually push boundaries of understanding, and to carry out research that advances knowledge and improves lives."
            }
          />
        </div>
        <aside className="w-full md:w-5/12 lg:w-[35%]">
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
        <hr />
      </section>
        <div id="#philosophy" className="p-4 md:p-6">
          <div className="flex items-center gap-2 md:text-xl">
            <p className="bg-primary text-white p-2 inline-block rounded-full">
              <FaEye />
            </p>
            <h4 className="font-bold text-2xl my-4 text-blue-950">Philosophy and Objectives</h4>
          </div>
          <p>
            Chemistry is central to all other science disciplines and
            technology. A degree programme in chemistry is designed to foster in
            the students an appreciation of this centrality of chemistry to
            human well-being, as well as its linkage to and interactions with
            other science disciplines. This program is therefore aimed at:
          </p>
            <ul className="list-decimal mt-4 ml-4 grid grid-cols-1 gap-2">
              <li>
                Stimulating in the students sustained interest and enthusiasm in
                chemistry and it&apos;s applications
              </li>
              <li>Building in students a culture of continous enquiry</li>
              <li>
                Providing students with a broad and balanced base of chemical
                knowledge and practical skills
              </li>
              <li>
                Developing in students a range of skills applied in chemical and
                non-chemical areas, that can provide confidence for employment
              </li>
              <li>
                Providing students with a solud base of chemical knowledge and
                skills that are required for postgraduate studies and research
              </li>
              <li>
                Inculcating in students an appreciation of chemistry in all
                human endeavours
              </li>
            </ul>
        </div>
        <section id="#history" className="p-4 md:p-6">
          <div className="flex items-center gap-2 md:text-xl">
            <p className="bg-primary text-white p-2 inline-block rounded-full">
              <MdHistory />
            </p>

            <h1 className="font-bold text-2xl my-4 text-blue-950">History</h1>
          </div>
          <p className="text-zinc-700">
            The Department of Chemistry started as the Department of Pure and
            Applied Chemistry in 1983 in the then University of Cross River State,
            Uyo. It grew up into the Department of Chemistry and Biochemistry. In
            2001, Biochemistry programme was demerged from the department and
            elevated to a substantive department, which formed the nucleus of the
            faculty of Basic Medical Sciences of the University of Uyo. Hitherto,
            the Department had been offering courses leading to B.Sc. degree in Pure
            and Applied Chemistry until Senate of the University of Uyo abolished
            the dual programmes in 2002.The department now teaches courses leading
            to the award of the Bachelor (B.Sc) of Science/Postgraduate (MSc. and
            Ph.D) degree in Chemistry. On August 14, 2013 the Department re-located
            from the Town Campus of the University to her present location in the
            Faculty of Science Building, Permanent campus, Use Offot.Currently the
            department has six (6) units, namely; Analytical Chemistry,
            Environmental Chemistry, Industrial/Polymer Chemistry, Inorganic
            Chemistry, Organic Chemistry and Physical Chemistry units.As a central
            course to all other science disciplines and technology, the degree
            programme in Chemistry is designed to foster in undergraduates and
            postgraduates an appreciation of this centrality of chemistry to human
            well-being, as well as its linkage to, and interactions with other
            science disciplines and the industry.Our degree programme also
            stimulates the development of a broad range of skills applied in
            chemical and non-chemical areas, and this provides confidence for
            employment and entrepreneurship.
          </p>
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
      </div>
    </>
  );
};

export default page;
