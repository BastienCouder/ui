"use client";

import * as React from "react";

import {
  Dropdown,
  DropdownLabel,
  DropdownRadioGroup,
  DropdownRadioItem,
  DropdownSeparator,
} from "@/registry/ui/react/dropdown";
import { Button } from "@/registry/ui/react/button";

export default function DropdownGroupDemo(): JSX.Element {
  const [position, setPosition] = React.useState("bottom");

  const Content = () => (
    <>
      <DropdownLabel>Panel Position</DropdownLabel>
      <DropdownSeparator />
      <DropdownRadioGroup value={position} onValueChange={setPosition}>
        <DropdownRadioItem value="top">Top</DropdownRadioItem>
        <DropdownRadioItem value="bottom">Bottom</DropdownRadioItem>
        <DropdownRadioItem value="right">Right</DropdownRadioItem>
      </DropdownRadioGroup>
    </>
  );

  return (
    <Dropdown content={<Content />} className="w-56">
      <Button>Open</Button>
    </Dropdown>
  );
}
