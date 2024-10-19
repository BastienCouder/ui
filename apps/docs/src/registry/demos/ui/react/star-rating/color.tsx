"use client";

import React from "react";
import { StarRating } from "@/registry/ui/react/star-rating";

export default function StarRatingDemo() {
  return (
    <StarRating
      defaultValue={3}
      iconProps={{ className: "fill-red-500 stroke-red-500" }}
    />
  );
}
