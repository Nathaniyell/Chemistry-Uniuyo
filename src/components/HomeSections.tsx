"use client";
import { motion } from "framer-motion";
import { RouteLinkBtn } from "@/components";


type HomeSectionsProps = {
  greeting: string;
  title: string;
  description?: string;
  routeLink: string;
  animateDirection: "left" | "right";
  readMore?: boolean
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
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{once: true}}
       
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

        {readMore && <RouteLinkBtn
          variant="primary"
          href={routeLink}
          arrow
          className="text-white border-0 !w-full md:!w-4/5 lg:!w-1/2 !text-center px-3"
        >
         
            More about our{" "}
            {title === "head of the department" ? "department" : title}

        </RouteLinkBtn>}
      </motion.div>
    </div>
  );
};

export default HomeSections;
