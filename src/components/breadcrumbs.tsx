import React from "react";
import NavLink from "./NavBar/NavLink";
import { Div } from ".";

type BreadcrumbsProps = {
  array: { title: string; href: string }[];
};

export default function Breadcrumbs({ array }: BreadcrumbsProps) {
  return (
    <Div className="items-center gap-x-1 px-2 py-1 overflow-x-auto container">
      {array.map((a, i) => (
        <>
          <NavLink key={i} className="text-primary px-0.5" href={a.href}>
            {a.title}
          </NavLink>
          <span className="last:hidden text-gray-500">/</span>
        </>
      ))}
    </Div>
  );
}
