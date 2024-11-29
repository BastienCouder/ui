"use client";

import { Paginations } from "@/registry/ui/react/pagination";

export default function Pagination(): JSX.Element {
  return (
    <Paginations totalPages={7} nextText="Suivant" previousText="Précédent" />
  );
}
