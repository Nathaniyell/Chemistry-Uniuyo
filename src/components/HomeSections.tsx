"use client";
import { motion } from "framer-motion";
import { RouteLinkBtn } from "@/components";
import Link from "next/link";

type HomeSectionsProps = {
  greeting: string;
  title: string;
  description?: string;
  routeLink: string;
  animateDirection: "left" | "right";
  readMore?: boolean;
};

const HomeSections: React.FC<HomeSectionsProps> = ({
  greeting,
  title,
  description,
  routeLink,
  readMore,
  animateDirection,
}) => {
  return (
    <div className="overflow-x-hidden">
      <motion.div
        className="flex flex-col gap-6"
        initial={{
          x: animateDirection === "left" ? -300 : animateDirection === "right" ? 300 : 0,
          opacity: 0,
        }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
      >
        {/* Header Section */}
        <div className="space-y-2">
          <span className="text-lg text-blue-950/80 font-medium">
            {greeting}
          </span>
          <h1 className="text-2xl md:text-3xl font-bold text-blue-900 capitalize">
            {title}
          </h1>
        </div>

        {/* Description Section */}
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 leading-relaxed">
            {description || "Description not provided"}
          </p>
          {readMore && (
            <Link
              href={routeLink}
              className="inline-flex items-center px-6 py-3 mt-3 text-sm font-medium text-white bg-red-900 rounded-lg hover:bg-red-800 transition-all duration-200 shadow-sm hover:shadow group"
            >
              Find out more
              <svg
                className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default HomeSections;
