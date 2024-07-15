import { Breadcrumbs, Header } from "@/components";
import ResourceImage from "@/components/resources/ResourceImage";
import { allResources } from "@/lib";
import { Metadata } from "next";
import FramerAnimation from "@/utils/framer-animation";

export const metadata: Metadata = {
  title: "Departmental Resources",
  description: `The Department of Chemistry is committed to providing a wealth of resources to support the academic and professional growth of our students, staff, and the wider research community. From state-of-the-art laboratory facilities and specialized equipment to comprehensive online databases and cutting-edge computational tools, our department offers a robust infrastructure to facilitate cutting-edge research, innovative teaching, and collaborative projects.`,
};

export default function ResourcePage() {
  return (
    <main className="flex min-h-screen flex-col bg-slate-100 !overflow-hidden">
      <section className="mt-6">
        <Breadcrumbs array={[{ title: "Resources", href: "/resources" }]} />
        <Header
          heading="Departmental Resources"
          tagline="The Department of Chemistry is committed to providing a wealth of
            resources to support the academic and professional growth of our
            students, staff, and the wider research community. From
            state-of-the-art laboratory facilities and specialized equipment to
            comprehensive online databases and cutting-edge computational tools,
            our department offers a robust infrastructure to facilitate
            cutting-edge research, innovative teaching, and collaborative
            projects."
        />
      </section>

      <section className="w-11/12 mx-auto !py-10">
        <section className="grid place-items-center grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-14 md:p-2">
          {allResources.map(({ heading, description, images }, index) => (
            <ResourceImage
              key={index}
              heading={heading}
              description={description}
              images={images}
            />
          ))}
        </section>
      </section>
      <FramerAnimation className="my-8 w-[90%] mx-auto pb-10">
        <h1 className="text-center text-primary md:w-[55%] lg:w-[60%] mx-auto font-bold text-[24px] md:text-[30px]">
          Other Resources
        </h1>

        <div className="flex flex-col gap-2">
          <h4 className="font-semibold text-xl mt-5">Student Handbook</h4>
          <p>
            To help you navigate your journey in the department of chemistry, we
            have created a comprehensive Student Departmental Handbook. This
            essential resource contains all the information you need about:
          </p>
          <ul className="list-disc flex flex-col gap-2 ml-4">
            <li>Department policies and procedures</li>
            <li>Academic programs and course descriptions</li>
            <li>Admission Requirements</li>
            <li>Faculty and staff information</li>
            <li>Grading system by the department</li>
            <li>
              Guidelines and Rules for students in the department of Chemistry
            </li>
          </ul>
          <a href="" download className="underline text-lg text-primary">
            Download here
          </a>
        </div>
      </FramerAnimation>
    </main>
  );
}
