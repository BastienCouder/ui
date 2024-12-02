"use client";

import { BackgroundBeams } from "@/components/beams";
import { CommandMenu } from "@/components/commande-menu";
import * as React from "react";

export default function HomePage(): JSX.Element {
  return (
    <main className="container">
      <div className="h-full font-sans">
        <BackgroundBeams />
        <section className="flex flex-col items-center py-12 space-y-12">
          <h1 className="text-4xl font-bold text-center text-primary">
            UI Components
          </h1>
          <p className="text-center  text-sm md:text-lg max-w-lg">
            Beautifully designed components that you can copy and paste into
            your apps. Components for react and vue. Built with Tailwind CSS.
          </p>
          <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6 w-full max-w-4xl"></div>
        </section>
        <section className="w-full h-full flex items-center justify-center">
          <div className="w-full max-w-96">
            <CommandMenu />
          </div>
        </section>
      </div>
    </main>
  );
}
