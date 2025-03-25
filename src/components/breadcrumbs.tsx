import React from "react";
import Link from "next/link";
import { HomeIcon } from "@heroicons/react/16/solid";
import { ChevronRightIcon } from "@heroicons/react/16/solid";

type Crumbs = { title: string; href: string };

type BreadcrumbsProps = { root?: Crumbs; array: Crumbs[] };

export default function Breadcrumbs({ root, array }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="w-full mt-[5rem] md:mt-0">
      <ol className="flex items-center gap-1 text-sm text-muted-foreground py-4 px-6 md:px-8">
        <li>
          <Link
            href={root ? root.href : "/"}
            className="flex items-center gap-1 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
          >
            {root ? root.title : <HomeIcon className="size-4" />}
          </Link>
        </li>
        {array.map((crumb, i) => (
          <React.Fragment key={i}>
            <ChevronRightIcon className="size-4 text-muted-foreground/50" />
            <li>
              <Link
                href={crumb.href}
                className={`text-sm font-medium ${i === array.length - 1
                  ? "text-foreground pointer-events-none"
                  : "text-muted-foreground hover:text-foreground transition-colors"
                  }`}
                aria-current={i === array.length - 1 ? "page" : undefined}
              >
                {crumb.title}
              </Link>
            </li>
          </React.Fragment>
        ))}
      </ol>
    </nav>
  );
}
