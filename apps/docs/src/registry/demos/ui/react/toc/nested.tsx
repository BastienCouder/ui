"use client";

import {
  TableOfContents,
  TableOfContent,
  TableOfContentsTitle,
  TableOfContentsList,
} from "@/registry/ui/react/toc";

export default function TocDemo(): JSX.Element {
  return (
    <TableOfContents>
      <TableOfContentsTitle>Table of Contents</TableOfContentsTitle>
      <TableOfContent href="#first-section-nested">
        First Nested Section
      </TableOfContent>
      <TableOfContentsList indent>
        <TableOfContent href="#first-nested-section-nested">
          First Nested Section
        </TableOfContent>
        <TableOfContent href="#second-nested-section-nested" indent>
          Second Nested Section
        </TableOfContent>
      </TableOfContentsList>
      <TableOfContent href="#third-section-nested">
        Third Section
      </TableOfContent>
    </TableOfContents>
  );
}
