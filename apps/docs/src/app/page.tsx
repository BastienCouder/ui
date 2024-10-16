"use client";

import * as React from "react";

import { Separator } from "@/lib/components/core/default/react/data-display/separator";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/lib/components/core/default/react/draggable/resizable";
import { Button } from "@/lib/components/core/default/react/buttons/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/lib/components/core/default/react/overlay/popover";
import {
  Tooltip,
  TooltipArrow,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/lib/components/core/default/react/overlay/tooltip";
import { Header } from "@/components/header";
import { Divider } from "@/lib/components/core/default/react/data-display/divider";
import { ChevronRightCircle, X } from "@/lib/icons";
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
import { TextField } from "@/lib/components/core/default/react/input/text-field";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/lib/components/core/default/react/overlay/dialog";
import { Label } from "@/lib/components/core/default/react/input/label";
import { Sheet } from "@/lib/components/core/default/react/overlay/sheet";
import { AlertDialog } from "@/lib/components/core/default/react/overlay/alert-dialog";

export default function HomePage() {
  return (
    <main className="container pb-36 pt-16">
      <div className="flex flex-col items-center gap-10">
        <Breadcrumbs size="sm" separatorIcon={<X />}>
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
      <Popover content={<Header />} shouldFlip={true} className="w-full">
        <Button>Cliquer moi</Button>
      </Popover>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Hoverc</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Add to library</p>
          <TooltipArrow />
        </TooltipContent>
      </Tooltip>
      <Sheet content="sheet">
        <Button>Open sheet</Button>
      </Sheet>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">Open popover</Button>
        </PopoverTrigger>
        <PopoverContent className="w-80">
          <div className="grid gap-4">
            <div className="space-y-2">
              <h4 className="font-medium leading-none">Dimensions</h4>
              <p className="text-muted-foreground text-sm">
                Set the dimensions for the layer.
              </p>
            </div>
            <div className="grid gap-2">
              <div className="grid grid-cols-3 items-center gap-4">
                <Label htmlFor="width">Width</Label>
                <TextField
                  id="width"
                  defaultValue="100%"
                  className="col-span-2 h-8"
                />
              </div>
              <div className="grid grid-cols-3 items-center gap-4">
                <Label htmlFor="maxWidth">Max. width</Label>
                <TextField
                  id="maxWidth"
                  defaultValue="300px"
                  className="col-span-2 h-8"
                />
              </div>
              <div className="grid grid-cols-3 items-center gap-4">
                <Label htmlFor="height">Height</Label>
                <TextField
                  id="height"
                  defaultValue="25px"
                  className="col-span-2 h-8"
                />
              </div>
              <div className="grid grid-cols-3 items-center gap-4">
                <Label htmlFor="maxHeight">Max. height</Label>
                <TextField
                  id="maxHeight"
                  defaultValue="none"
                  className="col-span-2 h-8"
                />
              </div>
            </div>
          </div>
        </PopoverContent>
      </Popover>
      <AlertDialog content={"content"}>
        <Button>Open Alert</Button>
      </AlertDialog>
      <Dialog content={"content"}>
        <Button>Open Dialog</Button>
      </Dialog>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Edit Profile</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <TextField
                id="name"
                defaultValue="Pedro Duarte"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Username
              </Label>
              <TextField
                id="username"
                defaultValue="~peduarte"
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
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
      <Checkbox disabled>I accept the terms and conditions</Checkbox>
      <TextField />
    </main>
  );
}
