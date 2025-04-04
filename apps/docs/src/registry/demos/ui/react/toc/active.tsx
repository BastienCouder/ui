"use client";

import {
  TableOfContents,
  TableOfContent,
  TableOfContentsTitle,
} from "@/registry/ui/react/toc";

export default function TocDemo(): JSX.Element {
  return (
    <TableOfContents>
      <TableOfContentsTitle>Active Item Table of Contents</TableOfContentsTitle>
      <TableOfContent href="#first-section">First Section</TableOfContent>
      <TableOfContent isActive href="#second-section" indent>
        Second Section
      </TableOfContent>
      <TableOfContent href="#third-section">Third Section</TableOfContent>
    </TableOfContents>
  );
}
