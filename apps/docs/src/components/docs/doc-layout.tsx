import { DocsSidebar } from "@/components/docs/docs-sidebar";
import { docsConfig } from "@/config/docs-config";
import { ScrollArea } from "@/registry/ui/react/scroll-area";
import { Sheet } from "@/registry/ui/react/sheet";
import { ChevronRight } from "lucide-react";
import { CommandMenu } from "../commande-menu";

interface DocsLayoutProps {
  children: React.ReactNode;
}

export default function DocsLayout({ children }: DocsLayoutProps): JSX.Element {
  return (
    <div className="min-h-[90vh] border-b">
      <div className="container items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6">
        <div className="block md:hidden border-t border-b py-4">
          <Sheet content={<DocsSidebar items={docsConfig.nav} />} side="left">
            <ChevronRight />
          </Sheet>
        </div>
        <aside className="z-30 hidden space-y-2 pt-6  md:sticky md:top-0 md:block">
          {/* <SearchDocs /> */}
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
