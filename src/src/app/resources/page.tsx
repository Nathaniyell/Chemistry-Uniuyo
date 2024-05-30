import ResourceImage from "@/components/resources/ResourceImage";
import { allResources } from "@/lib";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Departmental Resources",
  description: `The Department of Chemistry is committed to providing a wealth of resources to support the academic and professional growth of our students, staff, and the wider research community. From state-of-the-art laboratory facilities and specialized equipment to comprehensive online databases and cutting-edge computational tools, our department offers a robust infrastructure to facilitate cutting-edge research, innovative teaching, and collaborative projects.`,
};

export default function ResourcePage() {
  return (
    <main className="flex min-h-screen flex-col">
      <section className="max-w-[1650px] mx-auto pb-16">
        <section className="flex flex-col items-center text-white xs:text-black p-5 bg-blue-800 xs:bg-transparent gap-2 mt-2 mb-8">
          <h1 className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-medium">
            Departmental Resources
          </h1>
          <p className="max-w-2xl text-center xs:text-gray-500">
            The Department of Chemistry is committed to providing a wealth of
            resources to support the academic and professional growth of our
            students, staff, and the wider research community. From
            state-of-the-art laboratory facilities and specialized equipment to
            comprehensive online databases and cutting-edge computational tools,
            our department offers a robust infrastructure to facilitate
            cutting-edge research, innovative teaching, and collaborative
            projects.
          </p>
        </section>

        <section className="grid place-items-center md:grid-cols-2 2xl:grid-cols-3 gap-14 w-full p-2">
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
    </main>
  );
}
