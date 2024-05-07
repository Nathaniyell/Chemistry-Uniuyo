import Image from "next/image";
import Link from "next/link";
import React from "react";
type LecturerSectionProps = {
  image: any;
  name: string;
  desc: string;
  other?: string;
  href: string;
  title: string
};

const Lecturers: React.FC<LecturerSectionProps> = ({
  name,
  image,
  desc,
  other,
  href,
  title
}) => {
  return (
    <Link href={`/staff/teach-staff/${href.replaceAll(" ", "-").toLowerCase()}`} className="w-full block h-full rounded-lg shadow-lg">
      <div className="aspect-w-3 aspect-h-4">
        <Image className="rounded-t-lg object-cover" src={image} alt={name} />
      </div>
      <div className="p-3 bg-white">
        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">
        {title} {" "} {name}
        </h5>
        <p className="mb-3 font-normal text-blue-700 italic">{desc}</p>
        {other && (
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-700">
            {other}
          </p>
        )}
      </div>
    </Link>
  );
};

export default Lecturers;
