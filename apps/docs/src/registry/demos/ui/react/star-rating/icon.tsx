"use client";

import React from "react";
import { StarRating } from "@/registry/ui/react/star-rating";
import { Heart } from "lucide-react";

export default function StarRatingDemo() {
  return <StarRating defaultValue={3} icon={Heart} />;
}