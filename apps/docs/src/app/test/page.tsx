"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/registry/ui/react/accordion";
import {
  MultiSelect,
  MultiSelectContent,
  MultiSelectItem,
  MultiSelectList,
  MultiSelectTrigger,
  MultiSelectValue,
} from "@/registry/ui/react/multi-select";

export default function TestPage(): JSX.Element {
  const Content = () => <></>;

  return (
    <main className="container pb-36 pt-16">
      Test Page
      <div>
        <MultiSelect>
          <MultiSelectTrigger className="w-80">
            <MultiSelectValue placeholder="Select Frameworks" />
          </MultiSelectTrigger>
          <MultiSelectContent>
            <MultiSelectList>
              <MultiSelectItem value="react">React</MultiSelectItem>
              <MultiSelectItem value="vue">Vue</MultiSelectItem>
              <MultiSelectItem value="angular">Angular</MultiSelectItem>
              <MultiSelectItem value="svelte">Svelte</MultiSelectItem>
            </MultiSelectList>
          </MultiSelectContent>
        </MultiSelect>
      </div>
      <div>
        <Accordion type="single" collapsible className="w-full" gap="0">
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
          <AccordionItem value="item-3">
            <AccordionTrigger>Is it animated?</AccordionTrigger>
            <AccordionContent>
              Yes. It&apos;s animated by default, but you can disable it if you
              prefer.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </main>
  );
}
