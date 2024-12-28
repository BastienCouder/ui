"use client";

import { BackgroundBeams } from "@/components/beams";
import { CommandMenu } from "@/components/commande-menu";
import { Header } from "@/components/header";
import { Button } from "@/registry/ui/react/button";
import Image from "next/image";
import Link from "next/link";

export default function HomePage(): JSX.Element {
  return (
    <div className="h-screen overflow-y-hidden">
      <div className="fixed h-screen z-[-1] w-screen background-container">
      </div>
      <Header />
      <main>
        <div className="h-full font-sans">
          <Image src={"/svg/line.svg"} alt="line" width={1680} height={1080} className="z-[1] absolute -top-10" />
          <Image src={"/svg/line2.svg"} alt="line" width={1980} height={1080} className="z-[1] absolute -top-28 -right-[20rem]" />
          <section className="container grid lg:grid-cols-2 gap-4 grid-cols-1 items-center mt-12 lg:mt-36">
            <h1 className="p-4 rounded text-background text-5xl lg:text-5xl xl:text-6xl">
              <span className="text-foreground">{`}`}</span> RevueIU <br />  A Modern <br />
              UI Library <br />
              <span className="pl-20">for Developers</span>
            </h1>
            <div className="p-4 text-sm lg:text-base rounded flex flex-col gap-8">
              <div className="flex gap-4">
                <span className="text-foreground">{`}`}</span>
                <p>
                  Build sleek, modern interfaces with ease. RevueIU provides robust,
                  customizable components to enhance your development experience and
                  streamline your workflow.
                </p>
              </div>
              <Link href={"/docs"} className="max-w-60 w-full z-50">
              <Button className="rounded-full w-full bg-black/90 opacity-90 py-[1.7rem] hover:bg-black/80">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F1ECFD] to-[#CCABFB] uppercase font-bold">
                  Start Building
                </span>
              </Button>
              </Link>
            </div>
          </section>
          <div className="w-full relative mt-20 lg:absolute lg:bottom-10">
            <section className="grid  gap-[2px] grid-cols-2 md:grid-cols-3 xl:grid-cols-4 items-center">
              {/* left */}
              <div className="flex flex-col">
                <div className="relative w-full h-32 bg-black/90 rounded-[30px] rounded-l-none">

                </div>
                <div className="hidden md:block relative w-full h-32 bg-black/90 rounded-[30px] rounded-l-none">

                </div>

              </div>
              {/* left 2 */}

              <div className="relative hidden md:block w-full h-48 bg-black/90 rounded-[30px]">
              <div className="absolute flex flex-col justify-center items-start left-1/2 -translate-x-1/2 -ml-4">
                <span className="mt-5 text-7xl 2xl:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-[#F1ECFD] to-[#CCABFB]">100%</span>
                <span className="mt-1 2xl:text-lg">Customizable Design System</span>
                </div>
              </div>
              {/* right 2*/}

              <div className="flex flex-col">
                <div className="w-full h-44 bg-black/90 rounded-[30px] flex flex-col justify-center items-center  w-full">
                  <span className="2xl:mt-10 md:mt-10 text-7xl  md:text-8xl lg:text-9xl xl:text-8xl 2xl:text-9xl text-transparent bg-clip-text bg-gradient-to-r from-[#F1ECFD] to-[#CCABFB]">+43</span>
                  <span className="2xl:mt-1 xl:mt-4 lg:mt-0 md:mt-6  text-base lg:text-lg text-center px-4">Ready-to-use Components</span>
                </div>
                <div className="hidden md:block relative w-full h-44 bg-black/90 z-[-1] rounded-[30px]">
                </div>

              </div>
              {/* right */}
              <div className="hidden xl:block relative w-full h-60 bg-black/90 rounded-[30px] rounded-r-none">

              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
