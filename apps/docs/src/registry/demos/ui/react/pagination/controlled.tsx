"use client";

import { Paginations } from "@/registry/ui/react/pagination";
import React from "react";

export default function Pagination(): JSX.Element {
  const [currentPage, setCurrentPage] = React.useState(1);

  const handlePageChange = (page: number) => {
    console.log("Page actuelle :", page);
    setCurrentPage(page);
  };

  return (
    <Paginations
      totalPages={10}
      initialPage={currentPage}
      onChange={handlePageChange}
    />
  );
}
