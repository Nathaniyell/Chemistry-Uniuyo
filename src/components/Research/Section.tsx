import React from "react";
import { Card, FilterButton, Pagination, Search } from "@/components";
import { SectionProps } from "@/types";

export default function Section({
  filterButtonArray,
  filterby,
  search,
  currentPage,
  isMainPage = true,
  isPaginated = true,
  cardsArray,
}: SectionProps) {
  const postsPerPage = 12;

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;

  const filterArray = search
    ? cardsArray.filter(
        (c) =>
          c.title.toLowerCase().includes(search.toLowerCase()) ||
          c.desc.toLowerCase().includes(search.toLowerCase()) ||
          c.author.toLowerCase().includes(search.toLowerCase()) ||
          c.published_at.toLowerCase().includes(search.toLowerCase()) ||
          c.type.toLowerCase().includes(search.toLowerCase())
      )
    : filterby
    ? cardsArray.filter((c) => c.unit === filterby)
    : cardsArray;

  const displayFilteredCards = filterArray
    .slice(firstPostIndex, lastPostIndex)
    .map(
      (
        { title, unit, author, published_at, desc, href, supervisor, type },
        i
      ) => (
        <Card
          key={i}
          type={type}
          title={title}
          unit={unit ? unit : ""}
          author={author}
          supervisor={supervisor}
          published_at={published_at}
          desc={desc}
          href={href}
        />
      )
    );

  return (
    <section className="flex flex-col items-center gap-5 p-4 container overflow-hidden border-spacing-36 border-b border-blue-50 mb-14">
      {isMainPage && (
        <div className="w-full flex flex-col gap-3 lg:gap-12 border-b border-blue-50 p-2 my-4">
          <div className="w-full flex flex-col-reverse lg:flex-row justify-between gap-4 my-4">
            {filterButtonArray && <FilterButton array={filterButtonArray} />}

            <Search placeholder="Search research... try typing msc or phd" />
          </div>
        </div>
      )}

      <aside className="flex flex-col gap-4 items-center">
        {(search || filterby) && (
          <p className="text-sm text-center mb-3">
            Showing {filterArray.length} search{" "}
            {filterArray.length < 2 ? "result" : "results"} out of{" "}
            {cardsArray.length} research works
          </p>
        )}

        <aside className="space-y-8 max-w-screen-lg">
          {displayFilteredCards}
        </aside>
      </aside>

      {isPaginated && filterArray.length > 0 ? (
        <Pagination
          totalPosts={filterArray.length}
          postPerPage={postsPerPage}
          currentPage={currentPage}
        />
      ) : null}
    </section>
  );
}
