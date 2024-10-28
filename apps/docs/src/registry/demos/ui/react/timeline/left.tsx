"use client";

import React from "react";

import {
  Timeline,
  TimelineContent,
  TimelineDot,
  TimelineHeading,
  TimelineItem,
  TimelineLine,
} from "@/registry/ui/react/timeline";

export default function TimelineDemo(): JSX.Element {
  return (
    <Timeline>
      <TimelineItem status="done">
        <TimelineHeading>Plan!</TimelineHeading>
        <TimelineDot status="done" />
        <TimelineLine done />
        <TimelineContent status="done">
          Before diving into coding, it is crucial to plan your software project
          thoroughly. This involves defining the project scope, setting clear
          objectives.
        </TimelineContent>
      </TimelineItem>
      <TimelineItem status="done">
        <TimelineHeading side="right" className="text-danger">
          Design
        </TimelineHeading>
        <TimelineDot status="error" />
        <TimelineLine done />
        <TimelineContent status="done">
          Designing your software involves creating a blueprint that outlines
          the structure, user interface, and functionality of your application.
        </TimelineContent>
      </TimelineItem>
      <TimelineItem status="done">
        <TimelineHeading>Code</TimelineHeading>
        <TimelineDot status="current" />
        <TimelineLine />
        <TimelineContent status="done">
          The coding phase involves translating your design into actual code.
          Choose a programming language and framework that aligns with your
          project requirements.
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineHeading>Test</TimelineHeading>
        <TimelineDot />
        <TimelineLine />
        <TimelineContent>
          Thorough testing is essential to ensure the quality and reliability of
          your software. Implement different testing methodologies, including
          unit testing, integration testing, and user acceptance testing.
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineHeading>Deploy</TimelineHeading>
        <TimelineDot />
        <TimelineLine />
        <TimelineContent>
          Once your software has passed rigorous testing, it&apos;s time to
          deploy it. Consider the deployment environment, whether it&apos;s
          on-premises or in the cloud.
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineHeading>Done!</TimelineHeading>
        <TimelineDot />
      </TimelineItem>
    </Timeline>
  );
}
