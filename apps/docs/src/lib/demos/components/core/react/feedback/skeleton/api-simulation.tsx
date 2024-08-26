"use client";

import { Button } from "@/lib/components/core/default/react/buttons/button";
import { Skeleton } from "@/lib/components/core/default/react/feedback/skeleton";
import React from "react";

export default function SkeletonDemo() {
  const [status, setStatus] = React.useState<
    "idle" | "loading" | "error" | "success"
  >("idle");
  const apiCall = () => {
    setStatus("loading");
    setTimeout(() => {
      setStatus("success");
    }, 4000);
  };
  return (
    <div className="flex flex-col items-center gap-4">
      <Button isLoading={status === "loading"} onClick={apiCall}>
        Simulate API Call
      </Button>
      <Skeleton show={status === "loading"}>
        <p>Some text loaded from API.</p>
      </Skeleton>
    </div>
  );
}
