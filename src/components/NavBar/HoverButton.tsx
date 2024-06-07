import { ElementType, ReactNode } from "react";
import { BsChevronDown } from "react-icons/bs";
import NavLink from "./NavLink";
import { usePathname } from "next/navigation";

type HoverButtonProps = {
  heading: string;
  Icon: ElementType;
  linksArray: {
    href: string;
    title: string;
  }[];
};

export default function HoverButton({
  heading,
  Icon,
  linksArray,
}: HoverButtonProps) {
  const pathname = usePathname();

  return (
    <div className="group h-fit w-fit md:h-[100px] flex flex-col md:items-center md:justify-center transition-all duration-500">
      <button
        className={`${
          pathname.includes(heading) && "font-bold"
        } capitalize flex items-center gap-2 group-hover:font-bold p-1 md:p-0 transition-colors duration-500`}
      >
        <Icon className="size-6 xs:size-5" />
        <span className="md:text-sm">{heading}</span>
        <BsChevronDown className="group-hover:rotate-180 transition-all duration-500 size-3" />
      </button>

      <div className="h-0 overflow-hidden opacity-0 group-hover:opacity-100 flex flex-col gap-1 md:text-sm md:gap-3  group-hover:h-full bg-blue-50/50 md:group-hover:h-fit min-w-[150px] md:max-w-xs md:fixed md:top-[100px] lg:top-[111px] rounded md:bg-white md:border md:border-blue-100 md:p-4 pt-1 max-md:ml-6 transition-all duration-500">
        {linksArray.map(({ href, title }, i) => (
          <NavLink key={i} href={href}>
            {title}
          </NavLink>
        ))}
      </div>
    </div>
  );
}
