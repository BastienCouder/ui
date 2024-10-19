"use client";

import { Slider } from "@/registry/ui/react/slider";

export default function SliderDemo() {
  return (
    <Slider
      defaultValue={[2]}
      max={5}
      step={1}
      className="w-3/5"
      showSteps="half"
    />
  );
}
