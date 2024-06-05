import React from "react";
import { Card, FilterButton, Pagination, Search } from "@/components";

type SectionProps = {
  type: string;
  filterButtonArray?: string[];
  isPaginated?: boolean;
  filterby: string;
  search: string;
  currentPage: number;
  isMainPage?: boolean;
  cardsArray: {
    title: string;
    unit?: string;
    author: string;
    published_at: string;
    desc: string;
    href: string;
  }[];
};

export default function Section({
  type,
  filterButtonArray,
  filterby,
  search,
  currentPage,
  isMainPage = true,
  isPaginated = true,
  cardsArray,
}: SectionProps) {
  const postsPerPage = 10;

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;

  const filterArray = search
    ? cardsArray.filter(
      (c) =>
        c.title.toLowerCase().includes(search.toLowerCase()) ||
        c.desc.toLowerCase().includes(search.toLowerCase()) ||
        c.author.toLowerCase().includes(search.toLowerCase()) ||
        c.published_at.toLowerCase().includes(search.toLowerCase())
    )
    : filterby
      ? cardsArray.filter((c) => c.unit === filterby)
      : cardsArray;

  const displayFilteredCards = filterArray
    .slice(firstPostIndex, lastPostIndex)
    .map(({ title, unit, author, published_at, desc, href }, i) => (
      <Card
        key={i}
        type={type}
        title={title}
        unit={unit ? unit : ""}
        author={author}
        published_at={published_at}
        desc={desc}
        href={href}
      />
    ));

  return (
    <section
      id={type}
      className="flex flex-col items-center gap-5 p-4 container overflow-hidden border-spacing-36 border-b border-blue-50"
    >
      {isMainPage && <div className="w-full flex flex-col gap-3 md:gap-5 border-b border-blue-50 p-2 my-4">
        <h1 className="text-4xl text-blue-950 capitalize font-bold">
          {type + "s"}
        </h1>

        <div className="w-full flex flex-col-reverse md:flex-row justify-between gap-4 my-4">
          {filterButtonArray && <FilterButton array={filterButtonArray} />}

          <Search placeholder="search" />
        </div>
      </div>}

      <aside className="flex flex-col gap-4 items-center">
        {search || filterby ? (
          <p className="text-sm text-center mb-3">
            showing {filterArray.length} search{" "}
            {filterArray.length < 2 ? "result" : "results"} out of{" "}
            {cardsArray.length} {type}s
          </p>
        ) : null}

        <aside className="grid gap-6 gap-y-8 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
          {displayFilteredCards}
        </aside>
      </aside>

      {isPaginated && (
        <Pagination
          totalPosts={filterArray.length}
          postPerPage={postsPerPage}
          currentPage={currentPage}
        />
      )}
    </section>
  );
}
