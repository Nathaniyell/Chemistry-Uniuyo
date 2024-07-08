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
import { Breadcrumbs, Header } from "@/components";
import NavLink from "@/components/NavBar/NavLink";

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
    <main className="min-h-screen pb-10">
      <Header heading="About the department of chemistry" />
      <Breadcrumbs
        array={[
             { title: "About", href: `/about` },
        ]}
      />

      <div className="">
        <nav className="flex items-center justify-center gap-2">
          {aboutNavLinks.map((link, index) => {
            const isActive = pathName === link.link;

            return (
              <NavLink
              key={index}
              href={link.link}
              className={`text-primary !text-lg md:!text-xl cursor-pointer mt-3 p-2 block ${
                isActive ? "border-b border-b-primary underline" : ""
              }`}
            >
              {link.title}
            </NavLink>
            );
          })}
        </nav>
      </div>

      {children}
    </main>
  );
}
