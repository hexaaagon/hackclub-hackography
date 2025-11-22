"use client";
import Image from "next/image";
import { ParallaxScroll, ParallaxLayer } from "@/components/ui/parallax-scroll";
import Silk from "@/components/Silk";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { StackedCards } from "@/components/how-it-works";
import { Dithering } from "@paper-design/shaders-react";
import { RequirementCards } from "@/components/requirement-card";

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
      <section>
        <br />
        <br />
        <br />
        <br />
        <h1 className="text-center text-7xl">WIP</h1>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </section>
    </main>
  );
}
