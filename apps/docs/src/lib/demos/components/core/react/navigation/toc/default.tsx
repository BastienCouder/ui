"use client";

import {
  TableOfContents,
  TableOfContent,
  TableOfContentsTitle,
  TableOfContentsList,
} from "@/lib/components/core/default/react/navigation/toc";

export default function TocDemo() {
  return (
    <TableOfContents>
      <TableOfContentsTitle>Table of Contents</TableOfContentsTitle>
      <TableOfContent href="#first-section">First Section</TableOfContent>
      <TableOfContent href="#second-section">Second Section</TableOfContent>
      <TableOfContent href="#third-section">Third Section</TableOfContent>
    </TableOfContents>
  );
}