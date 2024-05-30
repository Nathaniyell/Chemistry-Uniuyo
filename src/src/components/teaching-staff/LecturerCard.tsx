// "use client"
import Image from "next/image";
import React from "react";
import placeH from "../../../public/images/Prof_Inam2.webp";
import Link from "next/link";

export type LecturerCardProps = {
  title: string;
  portfolio: string;
  id: string;
};

const LecturerCard = ({ title, portfolio, id }: LecturerCardProps) => {


  return (
    <Link href={`/staff/teach-staff/${id.replaceAll(" ", "-")}`} passHref>
    <div className="border-b-2 pb-2 border-blue-200 md:border-b-0">
      <div className="flex items-start gap-3 md:border-r-2 pr-3 border-blue-200">
        <Image src={placeH} alt={title} className="w-2/5" />
        <aside className="ml-2 md:ml-4">
          <h2 className="cursor-pointer transition-colors ease-in-out text-lg titlecase font-bold leading-[2] border-b-2 border-blue-200">
            {title}
          </h2>
          <p className="leading-[2]">{portfolio}</p>
        </aside>
      </div>
    </div>
    </Link>
  );
};

export default LecturerCard;

