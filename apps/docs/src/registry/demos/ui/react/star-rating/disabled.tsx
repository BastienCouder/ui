"use client";

import React from "react";
import { StarRating } from "@/registry/ui/react/star-rating";

export default function StarRatingDemo(): JSX.Element {
  return <StarRating defaultValue={3} disabled />;
}
