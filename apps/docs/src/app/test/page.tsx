"use client";

import * as React from "react";

const generateFakeData = (numItems: number) => {
  return Array.from({ length: numItems }, (_, index) => ({
    id: index + 1,
    name: `Item ${index + 1}`,
  }));
};

const ITEMS_PER_PAGE = 10;

export default function TestPage() {
  const data = generateFakeData(100); // Creating 100 fake items
  const [currentPage, setCurrentPage] = React.useState(1);

  // Calculate the current page data
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentData = data.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  return <main className="container pb-36 pt-16">Test Page</main>;
}
