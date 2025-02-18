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
    <main className="min-h-screen bg-slate-50">
      {/* Header Section */}
      <section className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto py-8 md:py-12">
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
        </div>
      </section>

      {/* Resources Grid Section */}
      <section className="max-w-6xl mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {allResources.map(({ heading, description, images }, index) => (
            <div key={index} className="bg-white rounded-lg shadow overflow-hidden hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
              <ResourceImage
                heading={heading}
                description={description}
                images={images}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Student Handbook Section */}
      <section className="bg-gradient-to-b from-white to-blue-50/30 mt-12">
        <div className="max-w-4xl mx-auto px-4 py-12 md:py-16">
          <FramerAnimation className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold text-primary">
                Other Resources
              </h2>
              <div className="w-20 h-1 bg-primary/20 mx-auto"></div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 md:p-8 space-y-6">
              <h3 className="text-2xl font-semibold text-blue-950">
                Student Handbook
              </h3>

              <p className="text-gray-700 leading-relaxed">
                To help you navigate your journey in the department of chemistry, we
                have created a comprehensive Student Departmental Handbook. This
                essential resource contains all the information you need about:
              </p>

              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
                {[
                  "Department policies and procedures",
                  "Academic programs and course descriptions",
                  "Admission Requirements",
                  "Faculty and staff information",
                  "Grading system by the department",
                  "Guidelines and Rules for students"
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-3 p-3 rounded-lg bg-blue-50/50 hover:bg-blue-50 transition-colors duration-200">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-red-50 border border-red-100 rounded-lg p-4 mt-8">
                <p className="text-red-600 text-sm md:text-base font-medium text-center">
                  Please visit the departmental office to get a copy of the student handbook
                </p>
              </div>
            </div>
          </FramerAnimation>
        </div>
      </section>
    </main>
  );
}
