import { DocsSidebar } from "@/components/docs/docs-sidebar";
import { docsConfig } from "@/config/docs-config";
import { ScrollArea } from "@/registry/ui/react/scroll-area";
import { CommandMenu } from "../commande-menu";
import Link from "next/link";
import { Home } from "lucide-react";

interface DocsLayoutProps {
  children: React.ReactNode;
}

export default function DocsLayout({ children }: DocsLayoutProps): JSX.Element {
  return (
    <div className="min-h-[90vh] border-b">
      <div className="container items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6">
        <aside className="z-30 hidden space-y-2 pt-6  md:sticky md:top-0 md:block">
          {/* <SearchDocs /> */}
                    <Link href={"/"}>
                      <span className="flex items-center gap-x-2 font-bold">
                        <Home size={15}/> Home
                      </span>
                  </Link>
          <CommandMenu />
          <ScrollArea className="h-[85vh]">
            <DocsSidebar items={docsConfig.nav} />
          </ScrollArea>
        </aside>
        {children}
      </div>
    </div>
  );
}
