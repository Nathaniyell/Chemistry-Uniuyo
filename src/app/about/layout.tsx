"use client";
import Link from "next/link";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Header, RouteLinkBtn } from "@/components";
import NavLink from "@/components/NavBar/NavLink";

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathName = usePathname();
  type AboutNavLink = {
    title: string;
    link: string;
  };
 

  const aboutNavLinks: AboutNavLink[] = [
    {
      title: "History",
      link: "/about/#history",
    },
    {
      title: "Philosophy",
      link: "/about/#philosophy",
    },
    {
      title: "Previous HOD's",
      link: "/about/#previousleaders",
    },
  ];
  return (
    <main className="min-h-screen pb-10 !overflow-hidden">
      <section className="bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="py-12 md:py-16 px-4 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-950 mb-8">
              About The Department Of Chemistry
            </h1>
            <nav className="flex items-center justify-center gap-4 mt-6">
              {aboutNavLinks.map((link, index) => {
                const isActive = pathName === link.link;
                return (
                  <NavLink
                    key={index}
                    href={link.link}
                    className={`text-primary text-base md:text-lg cursor-pointer px-4 py-2 rounded-md transition-all duration-200 ${isActive
                      ? "bg-primary/10 text-primary font-medium shadow-sm"
                      : "hover:bg-primary/5"
                      }`}
                  >
                    {link.title}
                  </NavLink>
                );
              })}
            </nav>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-8">
        {children}
      </section>

      <div className="bg-orange-100 mt-16 p-8 md:p-14 flex flex-col gap-10 md:flex-row justify-between items-center">
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
    </main>
  );
}
