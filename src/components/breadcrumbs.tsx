import React from "react";
import NavLink from "./NavBar/NavLink";
import { Div } from ".";
import Link from "next/link";

type Crumbs = { title: string; href: string };

type BreadcrumbsProps = { root?: Crumbs; array: Crumbs[] };

export default function Breadcrumbs({ root, array }: BreadcrumbsProps) {
  return (
    <div className="w-full flex items-center gap-x-[1px] px-4 my-2 overflow-x-hidden container mx-auto">
      <Link
        className="text-primary px-[1px] cursor-pointer"
        href={root ? root.href : "/"}
      >
        {root ? root.title : "Home"}
      </Link>
      <span className="text-gray-400 mx-2">&gt;</span>
      {array.map((a, i) => (
        <NavLink
          key={i}
          className="text-primary px-0 flex gap-1 cursor-pointer text-ellipsis"
          href={a.href}
        >
          {a.title}
        </NavLink>
      ))}
    </div>
  );
}
