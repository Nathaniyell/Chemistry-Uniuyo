"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from "./teachingstaff.module.css";
import staffData from "@/lib/lecturersData";
import HomepageSlider from "../../../components/HomepageSlider";
import LabStaff from "../../../../public/images/staffLab.jpg";
import GroupStaff from "../../../../public/images/chemistry_lab/group-staff.jpg";
import { Breadcrumbs, Header } from "@/components";
import FramerAnimation from "@/utils/framer-animation";
import Link from "next/link";
import { MdEmail } from "react-icons/md";

export default function TeachingStaffPage() {
  const router = useRouter();

  const staffImgArray = [GroupStaff, LabStaff];

  const handleStaffClick = (fullName: string) => {
    router.push(
      `/staff/teach-staff/${fullName.replaceAll(" ", "-").toLowerCase()}`
    );
  };

  return (
    <main className="h-full">
      <Header tagline="Select a profile below to view detailed information about our staff" heading="Teaching Staff" />
      <Breadcrumbs
        array={[
          { title: "Teaching-staff", href: `/staff/teach-staff/` },
        ]}

      />
      <section className="pb-16">

        <div className="p-4 md:w-[95%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 md:gap-12">
          {staffData.map(
            ({ fullName, title, image, unit, experience, email }, index) => {
              let bgColor;
              switch (unit) {
                case "Organic Chemistry":
                  bgColor = "bg-red-600";
                  break;
                case "Inorganic Chemistry":
                  bgColor = "bg-yellow-600";
                  break;
                case "Environmental Chemistry":
                  bgColor = "bg-green-600";
                  break;
                case "Analytical Chemistry":
                  bgColor = "bg-violet-600";
                  break;
                case "Environmental / Analytical Chemistry":
                  bgColor = "bg-green-600";
                  break;
                case "Environmental / Nanochemistry":
                  bgColor = "bg-slate-600";
                  break;
                case "Physical Chemistry":
                  bgColor = "bg-stone-600";
                  break;
                case "Industrial Chemistry":
                  bgColor = "bg-cyan-600";
                  break;
                default:
                  bgColor = "bg-sky-600";
              }
              return (
                <FramerAnimation
                  onClick={() => handleStaffClick(fullName)}
                  key={index}
                  className="bg-white w-11/12 mx-auto md:w-full lg:w-[82%] rounded shadow hover:shadow-lg hover:bg-sky-200 cursor-pointer transition-all duration-200"
                >
                  <div className="aspect-w-3 aspect-h-4">
                    {Array.isArray(image) ? (
                      <Image
                        src={image[0]}
                        alt={fullName}
                        className="object-cover"
                      />
                    ) : (
                      <Image
                        src={image}
                        alt={fullName}
                        className="object-cover"
                      />
                    )}
                  </div>
                  <div className="p-2 mt-2 grid grid-cols-1 gap-2 ">
                    <div className="flex items-center justify-between gap-4">

                      <h2 className="text-xl text-blue-800 font-bold mb-1 capitalize">
                        {title + " " + fullName}
                      </h2>
                      {/* <Link href={`mailto:${email}`}> <MdEmail size={18} className="text-primary" /> </Link> */}
                    </div>
                    <p className="text-zinc-700 text-[17px]">
                      {experience[0].title}
                    </p>

                    <p
                      className={`text-white text-sm shadow rounded p-2 text-center my-2 w-fit ${bgColor}`}
                    >
                      {unit}
                    </p>
                  </div>
                </FramerAnimation>
              );
            }
          )}
        </div>
      </section>
      <Breadcrumbs
        array={[
          { title: "Teaching-staff", href: `/staff/teach-staff/` },
        ]}

      />
    </main>
  );
}
