"use client";

import React from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import clsx from "clsx";
import { Button } from ".";
// import { ChevronLeftIcon } from "@heroicons/react/24/outline";

type FilterProps = {
  array: string[];
};

export default function FilterButton({ array }: FilterProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  // const divRef = React.useRef<HTMLDivElement>(null);
  // const [divWidth, setDivWidth] = React.useState(0);

  // React.useEffect(() => {
  //   const filterContainer = divRef.current;
  //   if (filterContainer !== null) {
  //     const containerWidth = filterContainer.scrollWidth;
  //     console.log(containerWidth);
  //   }
  // }, []);

  const filterValue = searchParams.get("filterby");

  const handleFilter = (term: string) => {
    const params = new URLSearchParams(searchParams);
    term ? params.set("filterby", term) : params.delete("filterby");
    params.has("currentPage")
      ? params.set("currentPage", "1")
      : params.delete("currentPage");
    if (params.has("search")) params.delete("search");
    replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <div
      // ref={divRef}
      className="relative flex items-center gap-3 filter-div overflow-x-auto overflow-hidden"
    >
      {/* <FilterArrow direction="left" func={()=>{}}/>
      <FilterArrow direction="right" func={()=>{}}/> */}

      <div className="flex items-center w-full mb-2">
        {array.map((p, i) => (
          <Button
            key={i}
            className={clsx(
              "first:rounded-l-xl rounded-none last:rounded-r-xl sm:pt-[10px] sm:pb-[10px] flex-shrink-0 capitalize",
              {
                "bg-blue-50 border-blue-300 text-primary pointer-events-none":
                  filterValue === p && p === "environmental",
                "bg-red-50 border-red-300 text-red-600 pointer-events-none":
                  filterValue === p && p === "physical",
                "bg-green-50 border-green-300 text-green-600 pointer-events-none":
                  filterValue === p && p === "organic",
                "bg-orange-50 border-orange-300 text-secondary pointer-events-none":
                  filterValue === p && p === "inorganic",
                "bg-gray-50 border-gray-300 text-gray-600 pointer-events-none":
                  filterValue === p && p === "analytical",
              }
            )}
            onClick={() => handleFilter(p)}
          >
            {p}
          </Button>
        ))}
        {filterValue && (
          <Button
            className="flex-shrink-0 rounded-none last:rounded-r-xl"
            onClick={() => replace(`${pathname}`, { scroll: false })}
          >
            clear filter
          </Button>
        )}
        
      </div>
    </div>
  );
}

// const FilterArrow = ({
//   func,
//   direction,
//   isDisabled,
// }: {
//   func: () => void;
//   direction: "left" | "right";
//   isDisabled?: boolean;
// }) => {
//   const className = clsx(
//     "absolute h-10 w-10 items-center justify-center border-0",
//     {
//       "pointer-events-none text-gray-200 opacity-20": isDisabled,
//       "hover:bg-orange-50 opacity-100": !isDisabled,
//       "left-0": direction === "left",
//       "right-0": direction === "right",
//     }
//   );

//   const icon =
//     direction === "left" ? (
//       <ChevronLeftIcon className="h-4" />
//     ) : (
//       <ChevronLeftIcon className="h-4" />
//     );

//   return isDisabled ? (
//     <div className={className}>{icon}</div>
//   ) : (
//     <Button className={className} onClick={func}>
//       {icon}
//     </Button>
//   );
// };
