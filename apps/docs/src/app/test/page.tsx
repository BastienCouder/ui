"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/registry/ui/react/accordion";
import React, { useState } from "react";
import { CalendarDatePicker } from "@/registry/ui/react/calendar-date-picker";

export default function TestPage(): JSX.Element {
  const Content = () => <></>;
  const [selectedDateRange, setSelectedDateRange] = useState({
    from: new Date(new Date().getFullYear(), 0, 1),
    to: new Date(),
  });
  return (
    <main className="container pb-36 pt-16">
      Test Page
      <div className="p-4 max-w-xl">
        <h1 className="text-2xl font-bold mb-4">
          Calendar Date Picker Component
        </h1>
        <CalendarDatePicker
          date={selectedDateRange}
          onDateSelect={setSelectedDateRange}
        />
        <div className="mt-4">
          <h2 className="text-md font-semibold">Selected Date Range:</h2>
          <p className="text-sm">
            {selectedDateRange.from.toDateString()} -{" "}
            {selectedDateRange.to.toDateString()}
          </p>
        </div>
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
