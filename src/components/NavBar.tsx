"use client";

import { VscMenu, VscClose } from "react-icons/vsc";
import { IoLibrary } from "react-icons/io5";
import { GiArchiveResearch } from "react-icons/gi";
import { MdOutlineGroups3 } from "react-icons/md";
import { PiGraduationCapFill, PiInfoFill } from "react-icons/pi";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/images/logo.jpg";
import { useGlobalContext } from "@/context";
import HoverButton from "./NavBar/HoverButton";
import { programmesArray, staffArray } from "@/lib";
import NavLink from "./NavBar/NavLink";
import { deptArray } from "@/lib/hoverButtonData";
import { useMediaQuery } from "react-responsive";
import { UserGroupIcon } from "@heroicons/react/16/solid";
import { FaSchool } from "react-icons/fa";

export default function NavBar() {
  const { isMenuClicked, setIsMenuClicked } = useGlobalContext();

  const isTablet = useMediaQuery({
    query: "(min-width: 768px)",
  });

  if (isTablet) setIsMenuClicked(false);

  const toggleMenu = () => {
    setIsMenuClicked((prev) => !prev);
  };

  return (
    <nav
      className={`fixed bg-white shadow top-0 left-0 text-blue-950 h-[70px] md:h-[75px] lg:h-[90px] w-full flex items-center justify-center z-50`}
    >
      <header className="container p-4 md:px-2 lg:p-4 flex flex-col md:flex-row md:items-center md:justify-between w-full gap-4 md:gap-2 lg:gap-4">
        <div className="h-full w-full md:w-fit flex items-center justify-between md:justify-center">
          <div className="flex flex-shrink-0 gap-2 sm:gap-3 items-center md:gap-1 lg:gap-4">
            <Link onClick={() => setIsMenuClicked(false)} href="/" title="home">
              <Image
                src={Logo}
                alt="logo"
                className="h-12 w-12 sm:h-14 sm:w-14 rounded-full"
                priority
              />
            </Link>
            <span className="font-semibold lg:text-lg xl:text-xl">
              <h1>Chemistry</h1>
              <h1>University of Uyo</h1>
            </span>
          </div>

          <button
            className="opacity-70 hover:opacity-100 text-2xl md:hidden"
            onClick={toggleMenu}
          >
            {isMenuClicked ? <VscClose /> : <VscMenu />}
          </button>
        </div>

        <aside
          className={`${
            !isMenuClicked
              ? "left-full md:left-0 -z-10 opacity-10 md:opacity-100 md:z-50"
              : "left-0 md:top-0 opacity-100"
          } bg-white md:bg-transparent fixed md:relative top-[70px] md:top-0 flex flex-col md:items-center md:flex-row p-4 sm:p-6 gap-2 md:gap-6 lg:gap-8 w-full md:w-fit md:h-full md:text-[.9rem] lg:text-[.96rem] capitalize transition-all duration-500 md:transition-none`}
        >
          <HoverButton
            heading="department"
            Icon={FaSchool}
            linksArray={deptArray}
          />

          <HoverButton
            heading="programmes"
            Icon={PiGraduationCapFill}
            linksArray={programmesArray}
          />

          <HoverButton
            heading="staff"
            Icon={UserGroupIcon}
            linksArray={staffArray}
          />

          <NavLink href="/research">
            <GiArchiveResearch className="size-6 xs:size-5" />
            <span>research</span>
          </NavLink>

          <NavLink href="/resources">
            <IoLibrary className="size-6 xs:size-5" />
            <span>resources</span>
          </NavLink>
        </aside>
      </header>
    </nav>
  );
}
