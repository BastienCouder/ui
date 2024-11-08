import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { components } from "@/components/mdx/mdx-components";

import { ReactElement } from "react";

export async function Mdx({ source }: { source: string }): Promise<ReactElement> {
  const options = {
    parseFrontmatter: false,
    mdxOptions: {
      remarkPlugins: [remarkGfm],
    },
  };

  return (
    <MDXRemote
      source={source}
      components={components}
      options={options}
    />
  );
}
