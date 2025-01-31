"use client";

import { Paginations } from "@/registry/ui/react/pagination";
import React from "react";

const generateFakeData = (numItems: number) => {
  return Array.from({ length: numItems }, (_, index) => ({
    id: index + 1,
    name: `Item ${index + 1}`,
  }));
};

const ITEMS_PER_PAGE = 10;

export default function PaginationDemo(): JSX.Element {
  const data = generateFakeData(100);
  const [currentPage, setCurrentPage] = React.useState(1);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <Paginations
      totalPages={Math.ceil(data.length / ITEMS_PER_PAGE)}
      onChange={handlePageChange}
    />
  );
}
