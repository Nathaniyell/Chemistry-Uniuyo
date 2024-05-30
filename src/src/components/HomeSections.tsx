"use client";

import React from "react";
import { GoArrowRight } from "react-icons/go";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components";
import { RiArrowRightSLine } from "react-icons/ri";

type HomeSectionsProps = {
  greeting: string;
  title: string;
  description?: string;
  routeLink: string;
  animateDirection: "left" | "right";
};

const HomeSections: React.FC<HomeSectionsProps> = ({
  greeting,
  title,
  description,
  routeLink,

  animateDirection,
}) => {
  return (
    <div className="overflow-x-hidden">
      <motion.div
        className="flex flex-col justify-center gap-2"
        initial={{
          x:
            animateDirection === "left"
              ? -300
              : animateDirection === "right"
              ? 300
              : 0,
          opacity: 0,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: false }}
      >
        <span className="uppercase text-xl font-bold text-stone-800">
          {greeting} <br />
          <h1 className="uppercase font-bold text-2xl text-blue-700">
            {title}
          </h1>
        </span>
        <p className="text-blue-900">
          {description
            ? description
            : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi magnam porro assumenda, officia adipisci ea architecto suscipit quisquam, fugiat, enim recusandae quidem et quasi vitae maiores error doloribus itaque! Ipsum aperiam soluta velit impedit, mollitia temporibus voluptatibus earum sequi tenetur ullam. Impedit voluptate temporibus earum, dicta quae ad amet odio sequi iusto deleniti, reiciendis iure atque quia nobis incidunt commodi perspiciatis. Ex provident, obcaecati neque expedita adipisci quidem dolore dignissimos officiis earum atque omnis odio officia quasi possimus impedit ipsam!"}
        </p>

        <Button
          variant="transparent"
          arrow
          className="text-black !text-base border-0 w-full !text-left !mx-0 !px-0 underline !justify-start"
        >
          <Link href={`${routeLink}`}>
            More about our{" "}
            {title === "head of the department" ? "department" : title}
          </Link>
        </Button>
      </motion.div>
    </div>
  );
};

export default HomeSections;
