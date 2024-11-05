"use client";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { cn } from "@/lib/utils";
import { usePathname, useSearchParams } from "next/navigation";
import React from "react";

// Props for the Pagination Component
type PaginationProps = {
  pagination: Pagination;
};

const Paginator: React.FC<PaginationProps> = ({ pagination }) => {
  const { current_page, last_page, has_previous_page, has_next_page } =
    pagination;

  // Generate dynamic page numbers
  const pageNumbers = [];
  for (let i = 1; i <= last_page; i++) {
    pageNumbers.push(i);
  }
  const pathname = usePathname();
  const searchParamsList = useSearchParams();

  const createPageUrl = (pageNumber: number) => {
    const searchParams = new URLSearchParams(searchParamsList.toString());
    searchParams.set("page", pageNumber.toString());
    return `${pathname}?${searchParams.toString()}`;
  };

  return (
    <Pagination className="md:justify-end mt-8">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href={createPageUrl(current_page - 1)}
            className={`text-primary hover:text-primary ${
              !has_previous_page ? "cursor-not-allowed opacity-50" : ""
            }`}
          />
        </PaginationItem>

        {pageNumbers.map((pageNumber) => (
          <PaginationItem key={pageNumber}>
            <PaginationLink
              className={cn(
                "text-primary hover:text-primary/80",
                pageNumber === current_page &&
                  "bg-primary text-white hover:bg-primary/80 hover:text-white"
              )}
              href={createPageUrl(pageNumber)}
              isActive={pageNumber === current_page}
            >
              {pageNumber}
            </PaginationLink>
          </PaginationItem>
        ))}

        {/* Ellipsis for better UX when there are many pages */}
        {last_page > 5 && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}

        {/* Next Page Button */}
        <PaginationItem>
          <PaginationNext
            href={createPageUrl(current_page + 1)}
            className={`text-primary hover:text-primary ${
              !has_next_page ? "cursor-not-allowed opacity-50" : ""
            }`}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default Paginator;
