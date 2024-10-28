"use client";

import {
  TableOfContents,
  TableOfContent,
  TableOfContentsTitle,
} from "@/registry/ui/react/toc";

export default function TocDemo(): JSX.Element {
  return (
    <TableOfContents>
      <TableOfContentsTitle>Table of Contents</TableOfContentsTitle>
      <TableOfContent href="#first-section">First Section</TableOfContent>
      <TableOfContent href="#second-section">Second Section</TableOfContent>
      <TableOfContent href="#third-section">Third Section</TableOfContent>
    </TableOfContents>
  );
}
