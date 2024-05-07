"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from "./teachingstaff.module.css";
import staffData from "@/lib/lecturersData";

export default function TeachingStaffPage() {
  const router = useRouter();

  const handleStaffClick = (fullName: string) => {
    router.push(`/staff/teach-staff/${fullName.replaceAll(" ", "-").toLowerCase()}`);
  };

  return (
    <main className="h-full">
      <section className={styles.hero__section}>
        <div className="w-5/6 text-center h-1/2 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white">Teaching Staff</h1>
        </div>
      </section>
      <section className="bg-slate-100 pb-16">
        <div className="text-center text-primary text-xl h-[80px] grid place-items-center">
          <p>
            Select a profile below to view detailed information about our staff
          </p>
        </div>
        <div className="p-4 md:w-[95%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 md:gap-12">
          {staffData.map(
            ({ fullName, title, image, unit, experience }, index) => {
              ;
              return (
                <div
                  onClick={() => handleStaffClick(fullName)}
                  key={index}
                  className="bg-white w-11/12 mx-auto md:w-full lg:w-[82%] rounded shadow hover:shadow-lg hover:bg-sky-200 cursor-pointer transition-all duration-200"
                >
                  <div className="">
                    {Array.isArray(image) ? (
                      <Image
                        src={image[0]}
                        alt={fullName}
                        className="object-cover aspect-square"
                      />
                    ) : (
                      <Image
                        src={image}
                        alt={fullName}
                        className="object-cover aspect-square"
                      />
                    )}
                  </div>
                  <div className="p-2 mt-2 grid grid-cols-1 gap-2 ">
                    <h2 className="text-xl text-blue-800 font-bold mb-1 capitalize">
                      {title + " " + fullName}
                    </h2>
                    <p className="text-zinc-700 text-[17px]">
                      {experience[0].title}
                    </p>

                    <p className="text-secondary">{unit}</p>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </section>
    </main>
  );
}
