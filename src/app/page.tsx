"use client";
import Image from "next/image";
import { ParallaxScroll, ParallaxLayer } from "@/components/ui/parallax-scroll";
import Silk from "@/components/Silk";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { StackedCards } from "@/components/how-it-works";
import { Dithering, GrainGradient } from "@paper-design/shaders-react";
import { RequirementCards } from "@/components/requirement-card";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import TrailingEffect, {
  type ParallaxElement,
} from "@/components/ui/trailing-effect";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Star8 from "@/components/stars/s8";
import Star14 from "@/components/stars/s14";
import Star15 from "@/components/stars/s15";
import Star20 from "@/components/stars/s20";
import { ScrollVelocityRotate } from "@/components/scroll-velocity-rotate";

export default function Home() {
  return (
    <main>
      <ParallaxScroll
        classNames={{
          wrapper: "min-h-lvh",
          layers:
            "flex min-h-lvh flex-col items-center justify-center px-4 py-[100px] md:py-[200px]",
          fade: "z-10",
        }}
        layers={[
          { layer: "1", yPercent: 70 },
          { layer: "2", yPercent: 50 },
          { layer: "3", yPercent: 30 },
        ]}
      >
        <Link href="https://hackclub.com" target="_blank">
          <Image
            src="/static/images/flag-orpheus-top.svg"
            alt="Orpheus Flag"
            height={200}
            width={200}
            className="absolute top-0 right-0 left-0 z-10 mx-auto max-h-[8rem] w-full opacity-60 transition-opacity hover:opacity-100 md:left-14 md:mx-0 md:w-auto"
          />
        </Link>
        <ParallaxLayer
          layer="1"
          className="pointer-events-none absolute inset-0 flex items-center justify-center bg-[linear-gradient(to_right,#80808033_1px,transparent_1px),linear-gradient(to_bottom,#80808033_1px,transparent_1px)] bg-position-[center_center] bg-size-[70px_70px]"
        >
          <Silk
            speed={10}
            scale={1}
            color="#00d696"
            noiseIntensity={1.5}
            rotation={0}
            className="opacity-15"
          />
        </ParallaxLayer>

        <ParallaxLayer
          layer="2"
          className="-mt-[20vh] absolute inset-0 flex flex-col items-center justify-center gap-4 font-medium md:gap-8"
        >
          <Image
            src="/static/images/logo.svg"
            alt="Mountains Background"
            height={170 * 0.7}
            width={496 * 0.7}
            className="scale-75 object-contain md:scale-100"
          />
          <div className="mx-4 inline-block max-w-3xl text-center text-xl md:text-3xl">
            Create anything that involves in your camera, gets a{" "}
            <b className="inline-block rounded-lg border border-main/50 bg-main/30 px-2 py-1 backdrop-blur-[1.5px]">
              professional camera
            </b>{" "}
            for real.
          </div>
          <Button asChild>
            <Link
              href="https://go.hexaa.sh/hackography-rsvp?utm_source=hackography-page&utm_medium=hero"
              className="font-semibold"
            >
              RSVP Now!
            </Link>
          </Button>
        </ParallaxLayer>

        <ParallaxLayer
          layer="4"
          className="absolute right-0 bottom-0 left-0 w-full"
        >
          <Image
            src="/static/images/field.png"
            alt="Field Background"
            height={512}
            width={1963}
            className="w-full object-contain md:object-cover"
          />
        </ParallaxLayer>
      </ParallaxScroll>

      <div className="pointer-events-none sticky top-0 left-0 z-30 w-full">
        <ScrollProgress
          className="absolute top-0 h-1 rounded-r-4xl bg-linear-to-r from-transparent via-main/70 to-main"
          springOptions={{
            stiffness: 280,
            damping: 18,
            mass: 0.3,
          }}
        />
      </div>

      <section className="-mt-2 relative flex flex-col items-center justify-center bg-dark-background px-4 py-24 text-dark-foreground">
        <div className="sticky top-16 mb-[50vh] max-w-4xl space-y-8 text-center">
          <h2 className="font-bold text-4xl md:text-6xl">How it works?</h2>
          <p className="text-sm md:text-lg">
            Build your own project that involves your camera and make your lives
            feels <i>easier</i>.
          </p>
        </div>
        <StackedCards />
        <Dithering
          className="-bottom-1 pointer-events-none absolute h-32 w-full"
          colorBack="#00000000"
          colorFront="#d0fbea"
          shape="wave"
          type="4x4"
          size={11}
          speed={1.2}
          scale={1.5}
        />
      </section>
      <section>
        <RequirementCards />
      </section>
      <section className="relative flex min-h-screen items-center justify-center bg-dark-background py-24 text-dark-foreground">
        <GrainGradient
          className="-top-1 pointer-events-none absolute h-32 w-full"
          colors={["#0e201d"]}
          colorBack="#d0fbea"
          softness={0}
          intensity={0}
          noise={0.02}
          shape="wave"
          speed={1.5}
          scale={0.3}
        />
        <TrailingEffect
          elements={[
            {
              id: "star-1",
              component: (
                <ScrollVelocityRotate className="h-min w-min" baseVelocity={10}>
                  <Star8
                    className="size-8 scale-300 stroke-3 stroke-foreground text-main md:size-12"
                    size={48}
                  />
                </ScrollVelocityRotate>
              ),
              speed: 8,
              className: "absolute left-[15%] top-[10%] blur-[1px]",
            },
            {
              id: "star-2",
              component: (
                <ScrollVelocityRotate className="h-min w-min" baseVelocity={8}>
                  <Star14
                    className="size-8 scale-300 stroke-3 stroke-foreground text-main md:size-12"
                    size={48}
                  />
                </ScrollVelocityRotate>
              ),
              speed: 16,
              className: "absolute right-[20%] top-[10%] blur-[1px]",
            },
            {
              id: "star-3",
              component: (
                <ScrollVelocityRotate className="h-min w-min" baseVelocity={5}>
                  <Star8
                    className="size-8 scale-300 stroke-3 stroke-foreground text-main md:size-12"
                    size={48}
                  />
                </ScrollVelocityRotate>
              ),
              speed: 15,
              className: "absolute left-[10%] top-[60%] blur-[3px]",
            },
            {
              id: "star-4",
              component: (
                <ScrollVelocityRotate className="h-min w-min" baseVelocity={3}>
                  <Star20
                    className="size-8 scale-300 stroke-4 stroke-foreground text-main md:size-12"
                    size={48}
                  />
                </ScrollVelocityRotate>
              ),
              speed: 6,
              className: "absolute right-[15%] top-[75%] blur-[3px]",
            },
            {
              id: "star-5",
              component: (
                <ScrollVelocityRotate className="h-min w-min" baseVelocity={4}>
                  <Star15
                    className="size-8 scale-300 stroke-4 stroke-foreground text-main md:size-12"
                    size={48}
                  />
                </ScrollVelocityRotate>
              ),
              speed: 32,
              className: "absolute right-[35%] top-[45%] blur-[2px]",
            },
          ]}
          containerClassName="absolute inset-0 z-20 opacity-[92%] pointer-events-none"
          speedMultiplier={25}
        />
        <div className="mx-4 flex w-full flex-col items-center justify-center space-y-24 md:flex-row md:space-x-24 md:space-y-0">
          <h2 className="max-w-[20rem] text-center text-3xl md:max-w-xl md:text-start md:text-7xl">
            Frequently Asked Question
          </h2>
          <Accordion
            type="single"
            collapsible
            className="w-full max-w-xl space-y-2 text-black"
            defaultValue="item-2"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger>
                How many projects can i build?
              </AccordionTrigger>
              <AccordionContent>
                For now, we're limiting it to one submission per person.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>How much does it costs?</AccordionTrigger>
              <AccordionContent>
                It's 100% free– everything should cost you no money! The whole
                program is funded by donations to The Hack Foundation.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Who is eligible?</AccordionTrigger>
              <AccordionContent>
                You need to be a high schooler (or younger).
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>I need help!</AccordionTrigger>
              <AccordionContent>
                Hop in to the #hackography channel in the Hack Club Slack.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>Something else?</AccordionTrigger>
              <AccordionContent>
                Join the Hack Club Slack today and ask in the #hackography
                channel. We're here to help! Alternatively, feel free to DM
                @Hexaa with any questions you have.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </main>
  );
}
