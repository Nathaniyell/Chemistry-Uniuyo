"use client";

import React from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { MdClose } from "react-icons/md";
import { useDebouncedCallback } from "use-debounce";

type SearchProps = {
  placeholder: string;
  className?: string;
  isGlobal?: boolean;
};

export default function Search({ placeholder, className }: SearchProps) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const searchValue = searchParams.get("search") ?? undefined;

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);
    term ? params.set("search", term) : params.delete("search");
    params.has("currentPage")
      ? params.set("currentPage", "1")
      : params.delete("currentPage");
    if (params.has("filterby")) params.delete("filterby");
    replace(`${pathname}?${params.toString()}`, { scroll: false });
  }, 600);

  const handleDeleteAllText = () => {
    const params = new URLSearchParams(searchParams);
    params.delete("search");
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className={`relative w-full h-fit max-w-[450px] ${className}`}>
      <label htmlFor="search" className="sr-only">
        Search
      </label>

      <MagnifyingGlassIcon className="absolute left-3 bottom-1/2 translate-y-1/2 w-5 cursor-pointer text-slate-400 peer-focus:text-primary" />

      <input
        id="search"
        aria-label={placeholder}
        className="peer w-full py-[10px] pl-11 pr-4 bg-transparent text-sm hover:shadow placeholder:text-gray-400 border rounded-md border-primary/90 ring-offset-primary ring-"
        placeholder={placeholder}
        defaultValue={searchParams.get("search")?.toString()}
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
      />

      <button
        onClick={() => handleDeleteAllText()}
        className={`${
          searchValue ? "scale-100" : "scale-0"
        } absolute right-4 top-1/2 h-[18px] w-[18px] -translate-y-1/2 cursor-pointer transition-all duration-300`}
      >
        <MdClose />
      </button>
    </div>
  );
}
