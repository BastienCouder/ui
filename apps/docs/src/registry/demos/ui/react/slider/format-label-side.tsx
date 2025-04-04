"use client";

import { Slider } from "@/registry/ui/react/slider";

export default function SliderDemo(): JSX.Element {
  return (
    <Slider
      defaultValue={[2]}
      max={100}
      step={1}
      className="w-3/5"
      formatLabel={(value) => `${value} points`}
      formatLabelSide="left"
    />
  );
}
