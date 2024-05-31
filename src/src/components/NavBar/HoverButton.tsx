import { ReactNode } from "react";
import { BsChevronDown } from "react-icons/bs";
import NavLink from "./NavLink";
import { usePathname } from "next/navigation";

type HoverButtonProps = {
  heading: string;
  icon1: ReactNode;
  linksArray: {
    href: string;
    title: string;
  }[];
};

export default function HoverButton({
  heading,
  icon1,
  linksArray,
}: HoverButtonProps) {
  const pathname = usePathname();

  return (
    <div className="group h-fit w-fit md:h-[100px] flex flex-col md:items-center md:justify-center transition-all duration-300">
      <button
        className={`${
          pathname.includes(heading) && "font-bold pointer-events-none"
        } capitalize flex items-center gap-2 group-hover:font-bold p-1 md:p-0`}
      >
        {icon1}
        <span>{heading}</span>
        <BsChevronDown className="group-hover:rotate-180 transition-all duration-300" />
      </button>

      <div className="h-0 overflow-hidden opacity-0 scale-0 flex flex-col gap-1 md:gap-3 group-hover:opacity-100 group-hover:h-full group-hover:scale-full md:group-hover:h-fit md:w-[145px] md:fixed md:scale-0 group-hover:scale-100 md:top-[71px] lg:top-[91px] md:rounded-md md:bg-white md:border md:border-blue-100 md:ml-0 md:p-4 pt-1 ml-6 transition-all duration-300">
        {linksArray.map(({ href, title }, i) => (
          <NavLink key={i} href={href}>
            {title}
          </NavLink>
        ))}
      </div>
    </div>
  );
}
