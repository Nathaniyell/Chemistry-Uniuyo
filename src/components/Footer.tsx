"use client";

import React from "react";
import Link from "next/link";

import { BsArrowBarUp, BsTelephoneForward } from "react-icons/bs";
import { MdMail } from "react-icons/md";
import { SiFacebook, SiInstagram, SiTwitter, SiWhatsapp } from "react-icons/si";

import {
  resourceQuickLinks,
  deptQuickLinks,
  researchQuickLinks,
  siteName,
} from "@/lib";
import { useGlobalContext } from "@/context";

import { QuickLinkComp } from ".";
import { Button } from ".";

export default function Footer() {
  const { setIsMenuClicked } = useGlobalContext();
  const [isMoveToVisble, setIsMoveToVisble] = React.useState(false);

  const year = new Date().getFullYear();

  const moveTop = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0;
    setIsMenuClicked(false);
  };

  const scrolling = () =>
    window.scrollY > 500 ? setIsMoveToVisble(true) : setIsMoveToVisble(false);

  React.useEffect(() => {
    window.onscroll = scrolling;
  }, []);

  return (
    <footer className="bg-blue-950 w-full py-6 md:py-8relative flex flex-col items-center gap-10 justify-center text-slate-300 text-lg capitalize px-1">
      <section className="container w-[97%] flex flex-col items-center justify-center gap-12">
        {/* aside links */}

        <aside className="w-full flex flex-wrap items-start justify-between gap-8 md:gap-5">
          <div className="flex flex-col justify-center item-center gap-2 md:w-1/3 min-w-[200px] p-2 hover:bg-rgbaBackground transition-all rounded-md">
            <h1 className="text-xl sm:text-3xl font-bold mb-2">
              connect with us
            </h1>
            <address className="not-italic w-2/3">
              Faculty of Science Building, Permanent campus, Use Offot.
            </address>
            <p className="flex items-center gap-2">
              <BsTelephoneForward /> <span>+1 (2) 345 6789</span>
            </p>
            <p className="flex items-center gap-2 lowercase">
              <MdMail />{" "}
              <a
                href="mailto:hodchemistry@uniuyo.edu.ng"
                className="hover:underline active:underline visited:text-orange-600"
              >
                hodchemistry@uniuyo.edu.ng
              </a>
            </p>
            <div className="flex gap-5 w-full">
              <Link
                className="hover:bg-orange-600 bg-opacity-30 hover:bg-opacity-50 text-white text-2xl p-2 rounded-md transition-all duration-300"
                href="https://instagram.com/chemistryuniuyo"
              >
                <SiInstagram />
              </Link>
              <Link
                className="hover:bg-orange-600 bg-opacity-30 hover:bg-opacity-50 text-white text-2xl p-2 rounded-md transition-all duration-300"
                href="https://x.com/chemistryuniuyo"
              >
                <SiTwitter />
              </Link>
              <Link
                className="hover:bg-orange-600 bg-opacity-30 hover:bg-opacity-50 text-white text-2xl p-2 rounded-md transition-all duration-300"
                href="https://facebook.com/chemistryuniuyo"
              >
                <SiFacebook />
              </Link>
              <Link
                className="hover:bg-orange-600 bg-opacity-30 hover:bg-opacity-50 text-white text-2xl p-2 rounded-md transition-all duration-300"
                href="https://whatsapp.com/chemistryuniuyo"
              >
                <SiWhatsapp />
              </Link>
            </div>
          </div>

          <QuickLinkComp heading="resources" linksArray={resourceQuickLinks} />
          <QuickLinkComp heading="research" linksArray={researchQuickLinks} />
          <QuickLinkComp heading="department" linksArray={deptQuickLinks} />
        </aside>

        {/* footer bottom */}

        <div className="my-4">
          <p className="capitalize text-sm sm:text-[0.90rem] font-semibold">
            copyright reserved {year} <samp>{siteName}.</samp>
          </p>
        </div>
      </section>

      <Button
        onClick={moveTop}
        variant="secondary"
        className={`${
          isMoveToVisble ? "scale-100 opacity-100" : "scale-0 opacity-0"
        } border-transparent pl-3 pr-3 fixed bottom-5 right-5 bg-opacity-60 hover:bg-opacity-100 text-white z-[100000]`}
      >
        <BsArrowBarUp className="text-xl" />
      </Button>
    </footer>
  );
}
