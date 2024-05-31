"use client";

import Link from "next/link";
import React from "react";

import { usePathname } from "next/navigation";
import { useGlobalContext } from "@/context";

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
    <Link
      href={href}
      className={`${activeClass} ${className} group flex items-center gap-2 w-fit h-fit my-[2px] p-2 py-1 md:p-0 md:m-0 hover:font-semibold transition-all duration-300`}
      onClick={() => setIsMenuClicked(false)}
    >
      {children}
    </Link>
  );
}
