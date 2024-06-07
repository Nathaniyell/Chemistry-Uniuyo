import { Breadcrumbs, Header } from "@/components";
import ResourceImage from "@/components/resources/ResourceImage";
import { allResources } from "@/lib";
import { Metadata } from "next";

import HeaderImage from "@/public/images/chemistry_lab/cecilia0.jpg";

export const metadata: Metadata = {
  title: "Departmental Resources",
  description: `The Department of Chemistry is committed to providing a wealth of resources to support the academic and professional growth of our students, staff, and the wider research community. From state-of-the-art laboratory facilities and specialized equipment to comprehensive online databases and cutting-edge computational tools, our department offers a robust infrastructure to facilitate cutting-edge research, innovative teaching, and collaborative projects.`,
};

export default function ResourcePage() {
  return (
    <main className="flex min-h-screen flex-col bg-slate-100">
      <section>
        <Breadcrumbs array={[{ title: "Resources", href: "/resources" }]} />

        <Header
          headerBg={HeaderImage}
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

      <section className="xl:max-w-screen-2xl w-full mx-auto py-16">
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
