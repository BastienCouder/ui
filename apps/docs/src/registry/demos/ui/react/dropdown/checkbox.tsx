"use client";

import * as React from "react";

import {
  Dropdown,
  DropdownCheckboxItem,
  DropdownLabel,
  DropdownSeparator,
} from "@/registry/ui/react/dropdown";
import { Button } from "@/registry/ui/react/button";
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";

type Checked = DropdownMenuCheckboxItemProps["checked"];

export default function DropdownGroupDemo(): JSX.Element {
  const [showStatusBar, setShowStatusBar] = React.useState<Checked>(true);
  const [showActivityBar, setShowActivityBar] = React.useState<Checked>(false);
  const [showPanel, setShowPanel] = React.useState<Checked>(false);

  const Content = () => (
    <>
      <DropdownLabel>Appearance</DropdownLabel>
      <DropdownSeparator />
      <DropdownCheckboxItem
        checked={showStatusBar}
        onCheckedChange={setShowStatusBar}
      >
        Status Bar
      </DropdownCheckboxItem>
      <DropdownCheckboxItem
        checked={showActivityBar}
        onCheckedChange={setShowActivityBar}
        disabled
      >
        Activity Bar
      </DropdownCheckboxItem>
      <DropdownCheckboxItem checked={showPanel} onCheckedChange={setShowPanel}>
        Panel
      </DropdownCheckboxItem>
    </>
  );

  return (
    <Dropdown content={<Content />} className="w-56">
      <Button>Open</Button>
    </Dropdown>
  );
}
