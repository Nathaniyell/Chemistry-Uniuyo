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
import { Breadcrumbs, Button } from "@/components";
import NavLink from "@/components/NavBar/NavLink";
import { HomeIcon } from "@heroicons/react/16/solid";
import { FaRankingStar } from "react-icons/fa6";

export default function Page({ params }: { params: { slug: string } }) {
  const router = useRouter();
  const lecturerFullName = params.slug;
  // console.log(lecturerFullName)
  const filteredLecturerData = staffData.filter((staff) => staff?.fullName === lecturerFullName.replaceAll("-", " "))[0]

  if (
    filteredLecturerData?.email?.length === 0 || filteredLecturerData?.fullName === " "

    // ||   staffData.email.length === 0
  ) {
    return (
      <div className="min-h-screen flex flex-col gap-8 items-center justify-center text-red-600 text-xl">
        <h1>Incomplete details for the selected Profile</h1>
        <Button
          className="bg-primary text-white p-4 rounded-md"
          onClick={() => {
            router.back();
          }}
        >
          Go back
        </Button>
      </div>
    );
  }
  // console.log(filteredLecturerData)
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
  const validNames = ["edu inam", "bassey antia"];
  const isValidName = validNames.includes(fullName);
  return (
    <main className="bg-sky-50">
      <div className="w-11/12 mx-auto pb-6">

        <div className="!flex items-center w-10/12 md:w-[60%] lg:w-[35%] p-4 text-primary">

          <div className="!-ml-5">

            <Breadcrumbs
              root={{ title: "Teaching staff", href: "/staff/teaching-staff/" }}
              array={[
                { title: fullName.toUpperCase(), href: `/staff/teaching-staff/${lecturerFullName.replaceAll("-", " ")}` },
              ]}
            />
          </div>

        </div>
        <section className="">
          <div className="flex flex-col-reverse md:flex-row-reverse w-full gap-6 lg:gap-12 bg-white rounded-lg shadow-md md:p-4">
            <div className="w-full md:self-start md:w-3/5 mx-auto lg:w-[40%]">
              {/* {image.type === <Image src={image} alt={fullName} />} */}
              {Array.isArray(image) ? (
                <Image src={image[1]} alt={fullName} />
              ) : (
                <Image src={image} alt={fullName} />
              )}
            </div>
            <div className="text-zinc-700 font-normal text-base w-full flex flex-col gap-6 md:p-0 p-4 lg:w-[50%]">
              <h1 className="capitalize font-bold text-3xl text-blue-800">
                {title + " " + fullName}
              </h1>
              <div className="flex flex-col lg:flex-row items-start justify-between lg:w-11/12 gap-8">
               
                <div className="flex items-start gap-3 w-full">
                  <p className="font-bold flex items-center"><FaRankingStar /> &nbsp;Rank:</p>
                  {isValidName ? (
                 <div className="flex flex-col gap-2">{experience.slice(0, 2).map((experience) => (
               
                    <p
                      key={experience.year}
                    >
                      {experience.title}
                    </p>
               
                  ))
                }</div> ) : (
                  <p
                      className=""
                      key={experience[0].year}
                    >
                      {experience[0].title}
                    </p>
                ) }
                
                  
                </div>

                {website.length !== 0 && (
                  <a
                    href={website}
                    target="_blank"
                    className="flex items-center justify-between bg-white border hover:bg-primary transition-all duration-150 px-4 py-2 text-center text-primary hover:text-white rounded-md shadow gap-2 lg:mx-auto mb-2 md:mb-0 ease-linear lg:ml-5"
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
                      className="underline text-blue-600 active:text-red-500 hover:text-red-500"
                      href={`mailto:${emailAddress}`}
                    >
                      {emailAddress}
                    </a>
                  ))
                ) : (
                  <a target="_blank" className="underline text-blue-600 active:text-red-500 hover:text-red-500" href={`mailto:${email}`}>
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
                {
                  linkedIn.length > 1 && (

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
                  )
                }
              </div>
              <p className="flex gap-2 lg:items-center">
                <span className="flex lg:items-center font-bold">
                  <BsFillHouseDoorFill className="inline text-xl mr-1" />
                  Office:
                </span>
                {officeNo}, Faculty of Science Building, University of Uyo, Uyo.
              </p>

              <div className="flex text-center justify-between w-5/6 lg:w-2/5 items-center">
                {scopus && <a
                  target="_blank"
                  className="text-xl text-secondary"
                  href={scopus}
                >
                  Scopus
                </a>}
                {googleScholar && <a
                  target="_blank"
                  className="text-4xl text-primary"
                  href={googleScholar}
                >
                  <SiGooglescholar />
                </a>}
                {orcid && <a
                  target="_blank"
                  className="text-4xl text-green-600"
                  href={orcid}
                >
                  <FaOrcid />
                </a>}
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
          <section className="md:w-10/12 lg:w-5/6 mx-auto grid grid-cols-1 gap-10 mt-10">
            {profile.length !== 0 && (
              <div className="">
                <h4 className="capitalize font-bold text-xl text-primary ">
                  Overview
                </h4>
                <p className="text-zinc-700 text-[17px] leading-loose" style={{ whiteSpace: 'pre-line' }} dangerouslySetInnerHTML={{ __html: profile }} />

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
                        <td className="p-1 md:p-2">
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
                          {awards[0].type} &nbsp; &nbsp; - &nbsp; &nbsp; {awards[0].awarder}
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </section>
            {researchCollaborators.length !== 0 && <aside className="">
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
            </aside>}
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

      <div className="!flex items-center w-10/12 md:w-[50%] lg:w-[35%] p-6 text-primary">

        <NavLink
          className="cursor-pointer hover:text-secondary transition-colors duration-300"
          href="/"

        >
          <HomeIcon className="size-5" />
        </NavLink>
        <span className="mx-2 text-gray-400">{"/"}</span>
        <div className="!-ml-5">

          <Breadcrumbs
            root={{ title: "Teaching staff", href: "/staff/teach-staff/" }}
            array={[
              { title: fullName.toUpperCase(), href: `/staff/teach-staff/${lecturerFullName.replaceAll("-", " ")}` },
            ]}
          />
        </div>

      </div>
    </main>
  );
}
