"use client";

import { ScrollArea, ScrollAreaProps } from "@/registry/ui/react/scroll-area";
import * as React from "react";
import { RadioGroup, RadioGroupItem } from "@/registry/ui/react/radio-group";
import { Label } from "@/registry/ui/react/label";

export default function ScrollAreaDemo(): JSX.Element {
  const [scrollbars, setScrollbars] = React.useState("vertical");
  return (
    <div className="flex items-center gap-10">
      <div className="rounded-md border p-6">
        <ScrollArea
          scrollbars={scrollbars as ScrollAreaProps["scrollbars"]}
          className="h-44 w-full max-w-sm"
          type="always"
        >
          <div className="flex w-[500px] items-start gap-4">
            <div className="space-y-4 p-4 pr-8">
              <h4 className="text-md font-bold">
                Principles of the typographic craft
              </h4>
              <p>
                Three fundamental aspects of typography are legibility,
                readability, and aesthetics. Although in a non-technical sense
                “legible” and “readable” are often used synonymously,
                typographically they are separate but related concepts.
              </p>
              <p>
                Legibility describes how easily individual characters can be
                distinguished from one another. It is described by Walter Tracy
                as “the quality of being decipherable and recognisable”. For
                instance, if a “b” and an “h”, or a “3” and an “8”, are
                difficult to distinguish at small sizes, this is a problem of
                legibility.
              </p>
              <p>
                Typographers are concerned with legibility insofar as it is
                their job to select the correct font to use. Brush Script is an
                example of a font containing many characters that might be
                difficult to distinguish. The selection of cases influences the
                legibility of typography because using only uppercase letters
                (all-caps) reduces legibility.
              </p>
            </div>
            <div className="space-y-4 p-4 pr-8">
              <h4 className="text-md font-bold">
                Principles of the typographic craft
              </h4>
              <p>
                Three fundamental aspects of typography are legibility,
                readability, and aesthetics. Although in a non-technical sense
                “legible” and “readable” are often used synonymously,
                typographically they are separate but related concepts.
              </p>
              <p>
                Legibility describes how easily individual characters can be
                distinguished from one another. It is described by Walter Tracy
                as “the quality of being decipherable and recognisable”. For
                instance, if a “b” and an “h”, or a “3” and an “8”, are
                difficult to distinguish at small sizes, this is a problem of
                legibility.
              </p>
              <p>
                Typographers are concerned with legibility insofar as it is
                their job to select the correct font to use. Brush Script is an
                example of a font containing many characters that might be
                difficult to distinguish. The selection of cases influences the
                legibility of typography because using only uppercase letters
                (all-caps) reduces legibility.
              </p>
            </div>
          </div>
        </ScrollArea>
      </div>

      <RadioGroup
        defaultValue="vertical"
        value={scrollbars}
        onValueChange={setScrollbars}
      >
        <Label className="mb-2">Scrollbars</Label>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="vertical" id="r1" />
          <Label htmlFor="r1">Vertical</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="horizontal" id="r2" />
          <Label htmlFor="r2">Horizontal</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="both" id="r3" />
          <Label htmlFor="r3">Both</Label>
        </div>
      </RadioGroup>
    </div>
  );
}
