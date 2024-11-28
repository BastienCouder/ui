"use client";

import * as React from "react";

export default function HomePage(): JSX.Element {
  return (
    <main className="container">
      <div className="h-full font-sans">
        <section className="flex flex-col items-center py-12 space-y-12">
          <h1 className="text-4xl font-bold text-center">UI Components</h1>
          <p className="text-center text-lg max-w-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique.
          </p>
          <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6 w-full max-w-4xl"></div>
        </section>
      </div>
    </main>
  );
}

