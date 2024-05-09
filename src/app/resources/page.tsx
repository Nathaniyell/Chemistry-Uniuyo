import ResourceImage from "@/components/resources/ResourceImage";
import { resourceImages } from "@/lib";

export default function ResourcePage() {
  return (
    <main className="flex min-h-screen flex-col">
      <section className="p-2 max-w-[1450px] mx-auto">
        <section className="flex flex-col items-center  gap-2 mt-4 mb-8">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-medium">
            Departmental Resources
          </h1>
          <p className="text-gray-400 max-w-md text-center xs:text-sm">
            Our Laboratory is open for research Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Rem quod voluptatem deserunt laborum
            doloribus ratione ad repellendus temporibus nobis excepturi?
          </p>
        </section>

        <section className="grid xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
          {resourceImages.map((image, index) => (
            <ResourceImage key={index} src={image.src} />
          ))}
        </section>
      </section>
    </main>
  );
}
