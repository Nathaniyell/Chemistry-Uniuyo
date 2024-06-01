"use client";
import Link from "next/link";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import about1 from "../../../public/images/about_chm1.webp";
import about2 from "../../../public/images/about_chm2.webp";
import about3 from "../../../public/images/about_chm3.webp";
import { usePathname } from "next/navigation";
import { HiOutlineLightBulb } from "react-icons/hi";
import { FaEye } from "react-icons/fa";

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathName = usePathname();
  const aboutImages = [about1, about2, about3];
  type AboutNavLink = {
    title: string;
    link: string;
  };
  // const router = useRouter();

  const aboutNavLinks: AboutNavLink[] = [
    {
      title: "Welcome Message",
      link: "/about",
    },
    {
      title: "History",
      link: "/about/history",
    },
  ];
  return (
    <main className="min-h-screen">
      {children}
      <div className="flex flex-col justify-between md:w-[95%] w-11/12 mx-auto mb-8">
        <nav className="w-full flex items-center justify-between md:w-1/6 p-2 md:block">
          {aboutNavLinks.map((link, index) => {
            const isActive = pathName === link.link;

            return (
              <Link
                key={index}
                href={link.link}
                className={`text-blue-700 cursor-pointer my-3 p-2 transition-colors ease-in-out block ${
                  isActive ? "border-2 border-blue-700" : "border-2"
                }`}
              >
                {link.title}
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="grid md:grid-cols-2 gap-8 text-zinc-700 my-10 w-11/12 md:w-10/12 mx-auto">
        <div className="p-2 rounded-md bg-slate-100 shadow md:col-span-2">
          <div className="flex items-center gap-2 my-2 md:text-xl">
            <p className="bg-secondary text-white p-2 inline-block rounded-full">
              <FaEye />
            </p>
            <h4 className="text-primary">Philosophy and Objectives</h4>
          </div>
          <p>
            Chemistry is central to all other science disciplines and
            technology. A degree programme in chemistry is designed to foster in
            the students an appreciation of this centrality of chemistry to
            human well-being, as well as its linkage to and interactions with
            other science disciplines. This program is therefore aimed at:
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
          </p>
        </div>
      </div>
    </main>
  );
}
