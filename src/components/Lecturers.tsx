import Image from "next/image";
import Link from "next/link";
import React from "react";
import clsx from "clsx";
import { CiCalendar } from "react-icons/ci";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

type LecturerSectionProps = {
  image?: any; // Optional image prop
  name: string;
  desc?: string;
  other?: string;
  href: string;
  title?: string;
  cardBodyStyle?: string;
  date?: string;
  readMore?: boolean;
  readMoreLink?: string;
  cardTitleStyle?: string;
  cardImgContainerStyle?: string;
  cardContainerStyle?: string;
  cardImgStyle?: string;
  dateStyle?: string;
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
  cardContainerStyle,
  cardImgStyle,
  dateStyle,
}) => {
  const bgColor = {
    "text-red-600": desc === "Organic Chemistry",
    "text-yellow-600": desc === "Inorganic Chemistry",
    "text-green-700": desc === "Environmental Chemistry",
    "text-violet-600": desc === "Analytical Chemistry",
    "text-emerald-700": desc === "Nanochemistry",
    "text-stone-700": desc === "Physical Chemistry",
  };

  return (
    <Link href={href} className={clsx("flex flex-col size-full", cardContainerStyle)} passHref>
      {/* Conditionally render the image section only if the image prop is provided */}
      {image && (
        <div className={clsx("relative h-[18rem] filter hover:brightness-75 transition-all ease-linear duration-200 overflow-hidden", cardImgContainerStyle)}>
          <Image
            className={clsx("object-cover", cardImgStyle)}
            src={image}
            alt={name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      )}

      <div className={clsx("p-3 bg-white grid place-items-stretch", cardBodyStyle)}>
        {/* Display date if provided */}
        {date && (
          <p className={clsx("mb-2 text-neutral-600 text-sm flex items-center gap-2", dateStyle)}>
            <CiCalendar className="text-lg" />
            {date}
          </p>
        )}

        {/* Display name and title */}
        {name && (
          <h5 className={clsx("text-xl font-bold text-gray-900 transition-all ease-linear duration-200", cardTitleStyle)}>
            {title} {name}
          </h5>
        )}

        {/* Display description with appropriate background color */}
        {desc && <p className={clsx("p-2 my-2 font-semibold w-fit h-full text-base", bgColor)}>{desc}</p>}

        {/* Display additional information if provided */}
        {other && (
          <p className="text-base text-gray-700 dark:text-gray-700 mt-2">
            {other}
          </p>
        )}

        {/* Display the 'Read More' link if enabled */}
        {readMore && (
          <Link href={readMoreLink} className="flex items-center text-lg mt-2 hover:text-secondary transition-all ease-linear duration-200">
            Read more <MdOutlineKeyboardDoubleArrowRight className="ml-1 text-secondary animate-pulse text-lg" />
          </Link>
        )}
      </div>
    </Link>
  );
};

export default Lecturers;
