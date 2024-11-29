"use client";

import { Paginations } from "@/registry/ui/react/pagination";

export default function Pagination(): JSX.Element {
  return (
    <div className="space-y-4">
      <Paginations totalPages={5} size="sm" />
      <Paginations totalPages={5} size="md" />
      <Paginations totalPages={5} size="lg" />
    </div>
  );
}
