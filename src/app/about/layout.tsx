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
      link: "/about/#history",
    },
    {
      title: "Philosophy",
      link: "/about/#philosophy",
    },
  ];
  return (
    <main className="min-h-screen bg-slate-100 pb-10">
      <h1 className="uppercase text-4xl font-extrabold text-center p-8">About the department of chemistry</h1>
      <div className="">
        <nav className="flex items-center justify-center gap-2">
          {aboutNavLinks.map((link, index) => {
            const isActive = pathName === link.link;

            return (
              <Link
                key={index}
                href={link.link}
                className={`text-primary cursor-pointer my-3 p-2 transition-colors ease-in-out block ${isActive && "border-b-2 border-b-primary"
                  }`}
              >
                {link.title}
              </Link>
            );
          })}
        </nav>
      </div>

      {children}
    </main>
  );
}
