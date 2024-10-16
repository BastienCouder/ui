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
import { StarRating } from "@/lib/components/core/default/react/buttons/star-rating";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/lib/components/core/default/react/input/select";
import {
  RadioGroup,
  RadioGroupItem,
} from "@/lib/components/core/default/react/input/radio-group";
import { Label } from "@/lib/components/core/default/react/input/label";
import { Switch } from "@/lib/components/core/default/react/input/switch";
import { PasswordField } from "@/lib/components/core/default/react/input/password-field";
import {
  Pagination,
  Paginations,
} from "@/lib/components/core/default/react/navigation/pagination";

const generateFakeData = (numItems: number) => {
  return Array.from({ length: numItems }, (_, index) => ({
    id: index + 1,
    name: `Item ${index + 1}`,
  }));
};

const ITEMS_PER_PAGE = 10;

export default function TestPage() {
  const data = generateFakeData(100); // Creating 100 fake items
  const [currentPage, setCurrentPage] = React.useState(1);

  // Calculate the current page data
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentData = data.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
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
      <h1>Fake Data Pagination</h1>
      <ul>
        {currentData.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <Paginations
        totalPages={Math.ceil(data.length / ITEMS_PER_PAGE)}
        onChange={handlePageChange}
      />
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

      <StarRating
        defaultValue={8.42}
        numStars={10}
        disabled
        onChange={(value: number) => {}}
      />
      <StarRating defaultValue={7.62} numStars={20} disabled />
      <Checkbox labelPosition="right" defaultChecked size="lg">
        I accept the terms and conditions
      </Checkbox>
      <Select>
        <SelectTrigger className="w-[180px]" size="md">
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Fruits</SelectLabel>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="blueberry">Blueberry</SelectItem>
            <SelectItem value="grapes">Grapes</SelectItem>
            <SelectItem value="pineapple">Pineapple</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <RadioGroup defaultValue="option-one">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option-one" id="option-one" />
          <Label htmlFor="option-one">Option One</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option-two" id="option-two" />
          <Label htmlFor="option-two">Option Two</Label>
        </div>
      </RadioGroup>
      <Switch size="md" shape="rectangle" />
      <PasswordField />
    </main>
  );
}
