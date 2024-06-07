import React from "react";
import NavLink from "./NavBar/NavLink";
import { Div } from ".";

type Crumbs = { title: string; href: string };

type BreadcrumbsProps = { root?: Crumbs; array: Crumbs[] };

export default function Breadcrumbs({ root, array }: BreadcrumbsProps) {
  return (
    <Div className="items-center gap-x-1 px-4 overflow-x-auto container mx-auto">
      <NavLink className="text-primary px-0.5" href={root ? root.href : "/"}>
        {root ? root.title : "Home"}
      </NavLink>
      <span className="last:hidden text-gray-400">{">"}</span>
      {array.map((a, i) => (
        <>
          <NavLink key={i} className="text-primary px-0.5" href={a.href}>
            {a.title}
          </NavLink>
          <span className="last:hidden text-gray-400">/</span>
        </>
      ))}
    </Div>
  );
}
