"use client"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useState } from "react"
import staffData from "@/lib/lecturersData"
import { Breadcrumbs } from "@/components"
import FramerAnimation from "@/utils/framer-animation"
import { FaGraduationCap } from "react-icons/fa"

export default function TeachingStaffPage() {
  const router = useRouter()
  const [expandedCard, setExpandedCard] = useState<number | null>(null)

  const handleStaffClick = (fullName: string) => {
    router.push(
      `/staff/teaching-staff/${encodeURIComponent(fullName)
        .replaceAll("%20", "-")
        .toLowerCase()}`
    )
  }

  const toggleCard = (index: number) => {
    setExpandedCard((prev) => (prev === index ? null : index))
  }

  const getUnitBgColor = (unit: string) => {
    switch (unit) {
      case "Organic Chemistry":
        return "bg-red-600"
      case "Inorganic Chemistry":
        return "bg-yellow-600"
      case "Environmental Chemistry":
      case "Environmental / Analytical Chemistry":
        return "bg-green-600"
      case "Environmental / Nanochemistry":
        return "bg-slate-600"
      case "Analytical Chemistry":
        return "bg-violet-600"
      case "Physical Chemistry":
        return "bg-stone-600"
      case "Industrial Chemistry":
        return "bg-cyan-600"
      default:
        return "bg-sky-600"
    }
  }

  return (
    <main className="h-full">
      <section className="bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="py-12 md:py-16 px-4 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-950 mb-8">
              Teaching Staff
            </h1>
            <p className="max-w-3xl mx-auto text-gray-600 text-lg">
              Meet our distinguished faculty members who are dedicated to
              excellence in teaching, research, and mentorship in the field of
              chemistry.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="p-4 md:w-[95%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 auto-rows-fr">
          {staffData.map(
            ({ fullName, title, image, unit, experience, researchAreas }, index) => {
              const bgColor = getUnitBgColor(unit)

              return (
                <FramerAnimation
                  key={index}
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col"
                >
                  <div className="flex flex-col h-full">
                    <div className="cursor-pointer" onClick={() => handleStaffClick(fullName)}>
                      <div className="relative aspect-[4/5] w-full overflow-hidden">
                        <Image
                          src={
                            Array.isArray(image)
                              ? image[0] || "/placeholder.svg"
                              : image || "/placeholder.svg"
                          }
                          alt={fullName}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                      </div>

                      <div className="p-5 flex flex-col flex-grow">
                        <div className="mb-4">
                          <h2 className="text-xl text-blue-800 font-bold mb-1 capitalize">
                            {title} {fullName}
                          </h2>
                          <p className="text-zinc-700 text-[17px]">
                            {experience[0].title}
                          </p>
                        </div>

                        {researchAreas && researchAreas.length > 1 && (
                          <>
                            {expandedCard === index && (
                              <div className="mb-4">
                                <h3 className="text-sm font-semibold uppercase mb-2">
                                  Research Areas
                                </h3>
                                <div className="flex flex-wrap gap-1">
                                  {researchAreas.map((area, idx) => (
                                    <span
                                      key={idx}
                                      className="bg-slate-100 text-slate-700 grid place-items-center text-sm px-2 py-1 rounded"
                                    >
                                      {area}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            )}
                            <button
                              onClick={(e) => {
                                e.stopPropagation()
                                toggleCard(index)
                              }}
                              className="text-sm text-blue-500 underline self-start mb-2 hover:text-blue-700"
                            >
                              {expandedCard === index
                                ? "Hide Research Areas"
                                : "Read more"}
                            </button>
                          </>
                        )}
                      </div>
                    </div>

                    <div className="mt-auto border-t border-slate-200 px-5 py-3 flex flex-col gap-6 xl:flex-row flex-wrap justify-between items-center bg-slate-50">
                      <div>
                        <span
                          className={`${bgColor} text-white text-xs font-semibold px-3 py-1 rounded shadow-md`}
                        >
                          {unit}
                        </span>
                      </div>
                      <button
                        onClick={() => handleStaffClick(fullName)}
                        className="text-sm text-blue-600 hover:text-blue-800 font-semibold flex items-center gap-1"
                      >
                        <FaGraduationCap size={14} />
                        View Profile
                      </button>
                    </div>
                  </div>
                </FramerAnimation>
              )
            }
          )}
        </div>
      </section>

      <Breadcrumbs array={[{ title: "Teaching-staff", href: `/staff/teaching-staff/` }]} />
    </main>
  )
}
