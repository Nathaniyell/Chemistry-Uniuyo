"use client";

import Link from "next/link";
import React from "react";

import { usePathname } from "next/navigation";
import { useGlobalContext } from "@/context";
import clsx from "clsx";

type NavLinkProps = {
  children: React.ReactNode;
  href: string;
  className?: string;
  activeClassName?: string;
};

export default function NavLink({
  children,
  className,
  href,
  activeClassName,
}: NavLinkProps) {
  const { setIsMenuClicked } = useGlobalContext();
  const pathname = usePathname();

  const activeClass =
    pathname === href
      ? "font-semibold pointer-events-none " + activeClassName
      : "";

  return (
    <div
      className={clsx(
        "group/navLink relative shrink-0 w-fit h-fit my-0.5 max-md:ml-2 py-1 md:text-sm",
        activeClass,
        className
      )}
    >
      <Link
        href={href}
        className={`flex items-center gap-2  hover:font-semibold transition-all duration-500`}
        onClick={() => setIsMenuClicked(false)}
      >
        {children}
      </Link>
      <div
        className={clsx(
          "group-hover/navLink:w-3/4 absolute bottom-0.5 md:bottom-0 right-0 group-hover/navLink:h-0.5 bg-primary transition-all duration-500",
          {
            "w-3/4 h-0.5": pathname === href,
            "w-0": pathname !== href,
          }
        )}
      />
    </div>
  );
}
