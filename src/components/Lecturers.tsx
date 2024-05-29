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

  let bgColor
              switch (desc) {
                case "Organic":
                  bgColor = "bg-amber-300";
                  break;
                case "Inorganic":
                  bgColor = "bg-slate-300";
                  break;
                case "Environmental":
                  bgColor = "bg-green-300";
                  break;
                case "Analytical":
                  bgColor = "bg-fuchsia-300";
                  break;
                case "Environmental / Analytical":
                  bgColor = "bg-emerald-300";
                  break;
                case "Physical":
                  bgColor = "bg-stone-300";
                  break;
                default:
                  bgColor = "bg-sky-300";
              }

  return (
    <Link href={`/staff/teach-staff/${href.replaceAll(" ", "-")}` } className="w-full block h-full rounded-lg" passHref>
      <div className="aspect-w-3 aspect-h-4">
        <Image className="rounded-t-lg object-cover" src={image} alt={name} />
      </div>
      <div className="p-3 bg-white">
        <h5 className="mb-4 text-xl font-bold tracking-tight text-gray-900 capitalize">
        {title} {" "} {name}
        </h5>
        <p className={`text-gray-700 text-sm shadow rounded p-2 mb3 text-center my-2 w-fit ${bgColor}`}>{desc} {" "}Chemistry</p>
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

