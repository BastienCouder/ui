"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

interface AvatarCirclesProps {
  className?: string;
  numPeople?: number;
  avatarUrls: string[];
}

function AvatarCircles({
  numPeople,
  className,
  avatarUrls,
}: AvatarCirclesProps): JSX.Element {
  return (
    <div className={cn("z-10 flex -space-x-4 rtl:space-x-reverse", className)}>
      {avatarUrls.map((url, index) => (
        <Image
          key={index}
          className="w-10 h-10 rounded-full border-2 border-white dark:border-gray-800"
          src={url}
          width={40}
          height={40}
          alt={`Avatar ${index + 1}`}
        />
      ))}
      <a
        className="flex w-10 h-10 items-center justify-center rounded-full border-2 border-white bg-black text-center text-xs font-medium text-white hover:bg-gray-600 dark:border-gray-800 dark:bg-white dark:text-black"
        href=""
      >
        +{numPeople}
      </a>
    </div>
  );
}

export { AvatarCircles };
