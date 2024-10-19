"use client";

import { Slider } from "@/registry/ui/react/slider";

export default function SliderDemo() {
  return <Slider defaultValue={[50]} max={100} step={1} className="w-3/5" />;
}
