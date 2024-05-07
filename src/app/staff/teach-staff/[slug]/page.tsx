"use client";
import staffData from "@/lib/lecturersData";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa6";
import { MdArrowOutward } from "react-icons/md";
import { SiGooglescholar } from "react-icons/si";
import { BsFillHouseDoorFill } from "react-icons/bs";
import { FaOrcid } from "react-icons/fa6";
import Link from "next/link";

export default function Page({ params }: { params: { slug: string } }) {
  const router = useRouter();
  const handleGoBack = () => {
    router.push("/staff/teach-staff", { scroll: false }); //scroll: false returns to the top of the new page you are visiting
  };
  const lecturerFullName = params.slug;
  console.log(lecturerFullName)
  const filteredLecturerData = staffData.filter((staff) => staff?.fullName === lecturerFullName.replaceAll("-", " "))[0]

  if (
     filteredLecturerData?.email?.length === 0 || filteredLecturerData?.fullName === " "

    // ||   staffData.email.length === 0
  ) {
    return (
      <div className="min-h-screen flex flex-col gap-8 items-center justify-center text-red-600 text-xl">
        <h1>Incomplete details for the selected Profile</h1>
        <button
          className="bg-primary text-white px-5 py-4 rounded-lg hover:animate-pulse transition-all duration-200"
          onClick={() => {
            router.back();
          }}
        >
          Return to staff page
        </button>
      </div>
    );
  }
console.log(filteredLecturerData)
 
  const {
    title,
    fullName,
    email,
    researchAreas,
    image,
    googleScholar,
    experience,
    website,
    awards,
    researchCollaborators,
    officeNo,
    publications,
    profile,
    unit,
    orcid,
    scopus,
    linkedIn,
  } = filteredLecturerData;
  
  return (
    <div className="bg-sky-50">
      <div className="w-11/12 mx-auto pb-16">
        <nav className="py-8 text-zinc-700 flex items-center gap-2">
          <Link
            className="underline text-blue-700z cursor-pointer"
            href="/staff/teach-staff"
            style={{ display: "block" }}
          >
            Back
          </Link>
          <span className="text-lg">&gt;</span>
          <p className="capitalize">{fullName}</p>
        </nav>
        <section className="">
          <div className="flex flex-col md:flex-row w-full gap-6 lg:gap-12 bg-white rounded-lg shadow-md md:p-4">
            <div className="w-full md:self-startmd:w-3/5 mx-auto lg:w-[50%]">
              {/* {image.type === <Image src={image} alt={fullName} />} */}
              {Array.isArray(image) ? (
                <Image src={image[1]} alt={fullName} />
              ) : (
                <Image src={image} alt={fullName} />
              )}
            </div>
            <div className="text-zinc-700 font-normal text-base w-full flex flex-col gap-10 md:p-0 p-4 lg:w-[50%]">
              <h1 className="capitalize font-bold text-3xl text-blue-800">
                {title + " " + fullName}
              </h1>
              <div className="flex flex-col lg:flex-row items-start justify-between lg:w-11/12 gap-8">
                <div className="lg:w-4/5">
                  {experience.slice(0, 2).map((experience) => (
                    <p
                      className="mb-2 text-[17px] font-[500]"
                      key={experience.year}
                    >
                      {experience.title}
                    </p>
                  ))}
                </div>

                {website.length !== 0 && (
                  <a
                    href={website}
                    target="_blank"
                    className="flex items-center justify-between bg-white border border-gray-400 hover:bg-gray-800 transition-all duration-150 px-4 py-2 text-center text-slate-800 hover:text-white rounded-md shadow gap-2 lg:mx-auto mb-2 md:mb-0 ease-linear"
                  >
                    Website <MdArrowOutward className="text-xl self-start" />
                  </a>
                )}
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <span className="flex items-center font-bold">
                  <MdEmail className="inline text-xl mr-1" /> Email:
                </span>
                {Array.isArray(email) && email.length > 1 ? (
                  email.map((emailAddress) => (
                    <a
                      key={emailAddress}
                      target="_blank"
                      className="underline text-blue-600 active:text-red-500"
                      href={`mailto:${emailAddress}`}
                    >
                      {emailAddress}
                    </a>
                  ))
                ) : (
                  <a target="_blank" href={`mailto:${email}`}>
                    {email}
                  </a>
                )}
              </div>
              <div className="flex lg:items-center gap-4 lg:gap-8">
                {/* <a
                  target="_blank"
                  className="flex items-center gap-2"
                  href={`tel: ${phoneNo}`}
                >
                  <span className="flex items-center font-bold">
                    <RiPhoneFill className="inline text-xl mr-1" /> Phone:
                  </span>
                  <span>+{phoneNo}</span>
                </a> */}
                <a
                  target="_blank"
                  href={linkedIn}
                  className="flex items-center gap-1"
                >
                  <span className="flex items-center capitalize font-bold text-primary">
                    <FaLinkedin className="inline text-xl mr-1" />
                    {fullName}
                  </span>
                </a>
              </div>
              <p className="flex gap-2 lg:items-center">
                <span className="flex lg:items-center font-bold">
                  <BsFillHouseDoorFill className="inline text-xl mr-1" />
                  Office:
                </span>
                {officeNo}, Faculty of Science Building, University of Uyo, Uyo.
              </p>

              <div className="flex text-center justify-between w-5/6 lg:w-2/5 items-center">
                <a
                  target="_blank"
                  className="text-xl text-secondary"
                  href={scopus}
                >
                  Scopus
                </a>
                <a
                  target="_blank"
                  className="text-4xl text-primary"
                  href={googleScholar}
                >
                  <SiGooglescholar />
                </a>
                <a
                  target="_blank"
                  className="text-4xl text-green-600"
                  href={orcid}
                >
                  <FaOrcid />
                </a>
              </div>
              <div>
                <h5 className="mb-2 font-semibold text-[17px]">
                  Research Interests
                </h5>

                <ul className="flex flex-col gap-4 list-decimal text-[17px] mt-2">
                  {researchAreas.map((area, index) => {
                    return (
                      <li key={index} className="ml-4">
                        {area}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
          <br />
          <section className="md:w-10/12 lg:w-3/4 mx-auto grid grid-cols-1 gap-10 mt-10">
            {profile.length !== 0 && (
              <div className="">
                <h4 className="capitalize font-bold text-xl text-primary ">
                  Overview
                </h4>
                <p className="text-zinc-700 text-[17px]">{profile}</p>
              </div>
            )}

            <div className="">
              <h4 className="capitalize font-bold text-xl text-primary">
                Experience
              </h4>
              <table className="text-zinc-700">
                <tbody>
                <tr className="text-left text-[17px]">
                  <th className="p-1 md:p-2">Year</th>
                  <th className="p-1 md:p-2">Title</th>
                </tr>
                {experience.map((experience, index) => {
                  return (
                    <tr className="text-[17px]" key={index}>
                      <td className="p-1 md:p-2">{experience.year}</td>
                      <td className="lg:w-5/6 p-1 md:p-2">
                        {experience.title}
                      </td>
                    </tr>
                  );
                })}
                </tbody>
              </table>
            </div>

            <section className="flex flex-col gap-8">
              <div>
                <h4 className="capitalize font-bold text-xl text-primary">
                  Selected Awards
                </h4>
                <table className="text-zinc-700">
                  <tbody>
                  <tr className="text-left text-[17px]">
                    <th className="p-1 md:p-2">Year</th>
                    {/* <th className="p-2" colSpan={1}>
                  Type
                </th> */}
                    <th className="p-1 md:p-2">Award</th>
                  </tr>
                  {awards.length > 1 ? (
                    awards.map(({ year, type, awarder }, index) => (
                      <tr className="text-[17px]" key={index}>
                        <td className="p-1 md:p-2">{year}</td>
                        <td className="p-2">
                          {type} - {awarder}
                        </td>
                        {/* <td className="p-1 md:p-2 lg:w-4/5">{award.awarder}</td> */}
                      </tr>
                    ))
                  ) : (
                    <tr className="text-[17px]">
                      <td className="p-1 md:p-2">{awards[0].year}</td>
                      <td colSpan={2} className="p-2">
                        {awards[0].type} - {awards[0].awarder}
                      </td>
                    </tr>
                  )}
                  </tbody>
                </table>
              </div>
            </section>
            <aside className="">
              <h4 className="capitalize font-bold text-xl text-primary ">
                Research Collaborators
              </h4>
              <table className="text-zinc-700">
              <tbody>
                <tr className="text-left text-[17px]">
                  <th className="p-1 md:p-2">Title</th>
                  <th className="p-1 md:p-2">Collaborator</th>
                </tr>
                {researchCollaborators.length > 1 ? (
                  researchCollaborators.map(
                    ({ collaborator, title }, index) => (
                      <tr className="text-[17px]" key={index}>
                        <td className="p-1 md:p-4">{title}</td>
                        <td className="p-1 md:p-4 lg:w-[57%]">
                          {collaborator}
                        </td>
                      </tr>
                    )
                  )
                ) : (
                  <tr className="text-[17px]">
                    <td className="p-1 md:p-4">
                      {researchCollaborators[0].title}
                    </td>
                    <td colSpan={2} className="p-1 md:p-4 lg:w-[57%]">
                      {researchCollaborators[0].collaborator}
                    </td>
                  </tr>
                )}
                </tbody>
              </table>
            </aside>
            <div className="text-zinc-700">
              <h4 className="capitalize font-bold text-xl text-primary mt-6 mb-2">
                Selected Research Papers
              </h4>
              <ul className="grid grid-cols-1 gap-4 list-disc">
                {publications.map(({ title }, index) => (
                  <li className="ml-4" key={index}>
                    {title}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </section>
      </div>
    </div>
  );
}
