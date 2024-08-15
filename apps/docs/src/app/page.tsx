"use client";

import * as React from "react";

import { Separator } from "@/lib/components/core/default/react/data-display/separator";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/lib/components/core/default/react/draggable/resizable";
import { Button } from "@/lib/components/core/default/react/buttons/button";
import { Popover } from "@/lib/components/core/default/react/overlay/popover";
import { Tooltip } from "@/lib/components/core/default/react/overlay/tooltip";
import { Header } from "@/components/header";
import { Divider } from "@/lib/components/core/default/react/data-display/divider";
import {
  ChevronRightCircle,
  ChevronRightSquareIcon,
  ClapperboardIcon,
} from "lucide-react";
import { Checkbox } from "@/lib/components/core/default/react/input/checkbox";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/lib/components/core/default/react/data-display/accordion";
import {
  Breadcrumbs,
  Breadcrumb,
} from "@/lib/components/core/default/react/navigation/breadcrumb";

export default function HomePage() {
  return (
    <main className="container pb-36 pt-16">
      <div className="flex flex-col items-center gap-10">
        <Breadcrumbs size="lg">
          <Breadcrumb href="/">
            {" "}
            <ChevronRightCircle size={18} />
            Accueil
          </Breadcrumb>
          <Breadcrumb href="/produits">Produits</Breadcrumb>
          <Breadcrumb disabled>Détails du produit</Breadcrumb>
        </Breadcrumbs>
        <Tooltip content={<Header />}>
          <Button>hover</Button>
        </Tooltip>
      </div>
      <Popover
        content={<Header />}
        shouldFlip={true}
        className="w-full"
        flexContent="end"
      >
        <Button>Cliquer moi</Button>
      </Popover>
      <div className="flex space-x-6 border p-4"></div>
      {/* <div className="flex items-center gap-4">
        <ToggleGroup type="multiple">
          <ToggleGroupItem value="bold" shape="circle" size="lg" aria-label="Toggle bold">
            <Bold className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="italic" aria-label="Toggle italic">
            <Italic className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="underline" aria-label="Toggle underline">
            <Underline className="h-4 w-4" />
          </ToggleGroupItem>
        </ToggleGroup>
      </div>*/}
      <ResizablePanelGroup
        direction="horizontal"
        className="max-w-md rounded-lg border"
      >
        <ResizablePanel defaultSize={50}>
          <div className="flex h-[200px] items-center justify-center p-6">
            <span className="font-semibold">One</span>
          </div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={50}>
          <ResizablePanelGroup direction="vertical">
            <ResizablePanel defaultSize={25}>
              <div className="flex h-full items-center justify-center p-6">
                <span className="font-semibold">Two</span>
              </div>
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel defaultSize={75}>
              <div className="flex h-full items-center justify-center p-6">
                <span className="font-semibold">Three</span>
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>
      </ResizablePanelGroup>
      <div className="flex items-center gap-10">
        <div className="flex h-5 items-center gap-2 text-sm">
          <div>Components</div>
          <Separator orientation="vertical" />
          <div>Hooks</div>
        </div>
        <div className="flex flex-col items-center gap-2 text-sm">
          <div>Components</div>
          <Separator orientation="horizontal" />
          <div>Hooks</div>
        </div>
      </div>
      <Divider position="after">After</Divider>
      <Divider position="before">Before</Divider>
      <Divider className="gap-4">Gap 4</Divider>
      <Accordion gap="12" type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Is it styled?</AccordionTrigger>
          <AccordionContent>
            Yes. It comes with default styles that matches the other
            components&apos; aesthetic.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem disabled value="item-3">
          <AccordionTrigger>Is it animated?</AccordionTrigger>
          <AccordionContent>
            Yes. It&apos;s animated by default, but you can disable it if you
            prefer.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Checkbox isDisabled>I accept the terms and conditions</Checkbox>
    </main>
  );
}
