"use client";

import {
  TableOfContents,
  TableOfContent,
  TableOfContentsTitle,
<<<<<<< HEAD:apps/docs/src/lib/demos/components/core/react/navigation/toc/default.tsx
  TableOfContentsList,
} from "@/lib/components/core/default/react/navigation/toc";
=======
} from "@/registry/ui/react/toc";
>>>>>>> registry:apps/docs/src/registry/demos/ui/react/toc/default.tsx

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
