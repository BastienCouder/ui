"use client";

import React from "react";

import {
  Timeline,
  TimelineContent,
  TimelineDot,
  TimelineHeading,
  TimelineItem,
  TimelineLine,
} from "@/lib/components/core/default/react/data-display/timeline";

export default function TimelineDemo() {
  return (
   <Timeline positions="right">
   <TimelineItem status="done">
      <TimelineHeading side="left">Plan!</TimelineHeading>
      <TimelineDot status="done" />
      <TimelineLine done />
      <TimelineContent status='done' side="left">
      Before diving into coding, it is crucial to plan your software project
          thoroughly. This involves defining the project scope, setting clear
          objectives.
      </TimelineContent>
   </TimelineItem>
   <TimelineItem status="done">
      <TimelineHeading side="left" className="text-danger">
         Design
      </TimelineHeading>
      <TimelineDot status="error" />
      <TimelineLine done />
      <TimelineContent status='done' side="left">
      Designing your software involves creating a blueprint that outlines
      the structure, user interface, and functionality of your application.
      </TimelineContent>
   </TimelineItem>
   <TimelineItem status="done">
      <TimelineHeading side="left">Code</TimelineHeading>
      <TimelineDot status="current" />
      <TimelineLine />
      <TimelineContent status='done' side="left">
      The coding phase involves translating your design into actual code.
          Choose a programming language and framework that aligns with your
          project requirements.
      </TimelineContent>
   </TimelineItem>
   <TimelineItem>
      <TimelineHeading side="left">Test</TimelineHeading>
      <TimelineDot />
      <TimelineLine />
      <TimelineContent side="left">
      Thorough testing is essential to ensure the quality and reliability of
          your software. Implement different testing methodologies, including
          unit testing, integration testing, and user acceptance testing.
      </TimelineContent>
   </TimelineItem>
   <TimelineItem>
      <TimelineHeading side="left">Deploy</TimelineHeading>
      <TimelineDot />
      <TimelineLine />
      <TimelineContent side="left">
      Once your software has passed rigorous testing, it's time to deploy
          it. Consider the deployment environment, whether it's on-premises or
          in the cloud.
      </TimelineContent>
   </TimelineItem>
   <TimelineItem>
      <TimelineDot />
      <TimelineHeading side="left">Done!</TimelineHeading>
   </TimelineItem>
</Timeline>
  );
}
