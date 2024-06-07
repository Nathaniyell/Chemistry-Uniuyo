import React from "react";
import NavLink from "./NavBar/NavLink";
import { Div } from ".";
import Link from "next/link";

type Crumbs = { title: string; href: string };

type BreadcrumbsProps = { root?: Crumbs; array: Crumbs[] };

export default function Breadcrumbs({ root, array }: BreadcrumbsProps) {
  return (
    <div className="w-fit flex items-center gap-x-0.5 px-4 overflow-x-auto container mx-auto fixed top-[74px] md:top-[85px] lg:top-[120px] left-2 rounded bg-white z-20 border border-blue-50 shadow">
      <Link className="text-primary px-0.5" href={root ? root.href : "/"}>
        {root ? root.title : "Home"}
      </Link>
      <span className="text-gray-400">{">"}</span>
      {array.map((a, i) => (
        <NavLink
          key={i}
          className="text-primary px-0 flex gap-1 after:content-['/'] last:after:content-['']"
          href={a.href}
        >
          {a.title}
        </NavLink>
      ))}
    </div>
  );
}
