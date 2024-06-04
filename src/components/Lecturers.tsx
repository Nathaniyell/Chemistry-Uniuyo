import Image from "next/image";
import Link from "next/link";
import React from "react";
import clsx from "clsx";
import { CiCalendar } from "react-icons/ci";

type LecturerSectionProps = {
  image: any;
  name: string;
  desc?: string;
  other?: string;
  href: string;
  title?: string
  cardStyle?: string
  date?: string
};

const Lecturers: React.FC<LecturerSectionProps> = ({
  name,
  image,
  desc,
  other,
  href,
  title,
  cardStyle,
  date
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
    <Link href={`/staff/teach-staff/${name.replaceAll(" ", "-")}` || href} className={clsx("block size-full")} passHref>
      <div className="h-[18rem] filter hover:brightness-75 transition-all ease-linear duration-200">
        <Image className="size-full" src={image} alt={name} />
      </div>
      <div className={clsx("p-3 bg-white", cardStyle)}>
        {date && <p className="mb-2 text-neutral-600 text-sm flex items-center gap-2"><CiCalendar className="text-lg" />{date}</p>}
        <h5 className="text-xl font-bold tracking-tight text-gray-900">
          {title} {" "} {name}
        </h5>
      {desc &&  <p className={clsx("text-gray-700 rounded p-2 mb3 my-2 w-fit h-full", bgColor)}>{desc} {" "}Chemistry</p>}
        {other && (
          <p className="font-normal text-gray-700 dark:text-gray-700">
            {other}
          </p>
        )}
      </div>
    </Link>
  );
};

export default Lecturers;

