import Image from "next/image";
import Link from "next/link";
import React from "react";
import clsx from "clsx";
import { CiCalendar } from "react-icons/ci";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

type LecturerSectionProps = {
  image: any;
  name: string;
  desc?: string;
  other?: string;
  href: string;
  title?: string
  cardBodyStyle?: string
  date?: string
  readMore?: boolean
  readMoreLink?: string
  cardTitleStyle?: string,
  cardImgContainerStyle?: string
  cardContainerStyle?: string
};

const Lecturers: React.FC<LecturerSectionProps> = ({
  name,
  image,
  desc,
  other,
  href,
  title,
  cardBodyStyle,
  date,
  readMore,
  readMoreLink = "/",
  cardTitleStyle,
  cardImgContainerStyle,
  cardContainerStyle
}) => {

  const bgColor = {
    "bg-amber-300": desc === "Organic",
    "bg-slate-300": desc === "Inorganic",
    "bg-green-300": desc === "Environmental",
    "bg-red-300": desc === "Analytical",
    "bg-emerald-300": desc === "Environmental / Analytical",
    "bg-stone-300": desc === "Physical",
  }



  return (
    <Link href={href} className={clsx("flex flex-col size-full", cardContainerStyle)} passHref>
      <div className={clsx("h-[18rem] filter hover:brightness-75 transition-all ease-linear duration-200 overflow-clip", cardImgContainerStyle)}>
        <Image className="size-full" src={image} alt={name} />
      </div>
      <div className={clsx("p-3 bg-white grid place-items-stretch", cardBodyStyle)}>
        {date && <p className="mb-2 text-neutral-600 text-sm flex items-center gap-2"><CiCalendar className="text-lg" />{date}</p>}
        {name !== "" && <h5 className={clsx("text-xl font-bold text-gray-900 transition-all ease-linear duration-200", cardTitleStyle)}>
          {title} {" "} {name}
        </h5>}
        {desc && <p className={clsx("text-gray-700 rounded p-2 my-2 w-fit h-full", bgColor)}>{desc} {" "}Chemistry</p>}
        {other && (
          <p className="text-base text-gray-700 dark:text-gray-700 mt-2">
            {other}
          </p>
        )}
        {readMore && <Link href={readMoreLink} className="flex items-center text-lg mt-2 hover:text-secondary transition-all ease-linear duration-200">Read more <MdOutlineKeyboardDoubleArrowRight className="ml-1 lg:mt-1 text-secondary animate-pulse text-lg" /></Link>}
      </div>
    </Link>
  );
};

export default Lecturers;

