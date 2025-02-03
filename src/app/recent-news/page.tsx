"use client";

import { Breadcrumbs, Header } from "@/components";
import { recentNews } from "@/lib";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { NewsCard } from "@/components/ui/card";
import { useState, useMemo } from "react";

const NewsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const paginatedNews = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return recentNews.slice(startIndex, endIndex);
  }, [currentPage]);

  const totalPages = Math.ceil(recentNews.length / itemsPerPage);

  return (
    <div className="w-full">
      <Header heading="News and Events" />
      <Breadcrumbs array={[{ title: "News", href: `/recent-news` }]} />
      <div className="md:w-[90%] mx-auto px-4 md:px-0 pb-10 mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-8">
        {paginatedNews.map(({ title, pictures, date, description }, index) => (
          <NewsCard
            key={index}
            title={title}
            image={pictures[0].src}
            date={date}
            href={`/recent-news/${title.replaceAll(" ", "-")}`}
          />
        ))}
      </div>

      <div className="flex justify-center mt-8 mb-12">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
              />
            </PaginationItem>

            {Array.from({ length: totalPages }).map((_, i) => (
              <PaginationItem key={i}>
                <PaginationLink
                  onClick={() => setCurrentPage(i + 1)}
                  isActive={currentPage === i + 1}
                  className="cursor-pointer"
                >
                  {i + 1}
                </PaginationLink>
              </PaginationItem>
            ))}

            <PaginationItem>
              <PaginationNext
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                className={currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
};

export default NewsPage;
