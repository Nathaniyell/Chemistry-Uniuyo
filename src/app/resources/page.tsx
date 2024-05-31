import ResourceImage from "@/components/resources/ResourceImage";
import { resourceImages } from "@/lib";

export default function ResourcePage() {
  return (
    <main className="flex min-h-screen flex-col">
      <section className="max-w-[1450px] mx-auto relative">
        <section className="flex flex-col items-center text-white p-5 bg-blue-800 gap-2 mt-4 mb-8">
          <h1 className="sm:text-3xl lg:text-5xl font-medium mb-4">
            Departmental Resources
          </h1>
          <p className="max-w-md text-center">
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

        <section className="lg:w-3/4 mx-auto p-2 grid xs:grid-cols-2 gap-10">
          {resourceImages.map((image, index) => (
            <ResourceImage key={index} src={image.src} />
          ))}
        </section>
      </section>
    </main>
  );
}
