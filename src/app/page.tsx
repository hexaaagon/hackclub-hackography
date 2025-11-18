"use client";
import Image from "next/image";
import { ParallaxScroll, ParallaxLayer } from "@/components/ui/parallax-scroll";
import Silk from "@/components/Silk";
import Link from "next/link";

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
            className="absolute top-0 left-5 z-10 opacity-60 hover:opacity-100 transition-opacity"
          />
        </Link>
        <ParallaxLayer
          layer="1"
          className="absolute inset-0 flex items-center pointer-events-none justify-center bg-[linear-gradient(to_right,#80808033_1px,transparent_1px),linear-gradient(to_bottom,#80808033_1px,transparent_1px)] bg-size-[70px_70px] bg-position-[center_center]"
        >
          <Silk
            speed={5}
            scale={1}
            color="#00d696"
            noiseIntensity={1.5}
            rotation={0}
            className="opacity-20"
          />
        </ParallaxLayer>

        <ParallaxLayer
          layer="2"
          className="absolute -mt-[20vh] inset-0 font-medium flex flex-col gap-4 md:gap-8 items-center justify-center"
        >
          <Image
            src="/static/images/logo.svg"
            alt="Mountains Background"
            height={170 * 0.7}
            width={496 * 0.7}
            className="scale-75 md:scale-100 object-contain"
          />
          <div className="max-w-3xl text-xl mx-4 md:text-3xl text-center inline-block">
            Create anything that involves in your camera, gets a{" "}
            <b className="py-1 bg-main/30 border border-main/50 px-2 rounded-lg">
              professional camera
            </b>{" "}
            for real.
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          layer="4"
          className="absolute bottom-0 left-0 right-0 w-full"
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

      <section className="min-h-screen flex items-center justify-center bg-dark-background text-dark-foreground px-4">
        <div className="max-w-4xl text-center space-y-8">
          <h2 className="text-4xl md:text-6xl font-bold">Soon!</h2>
          <p className="text-lg md:text-xl text-muted-foreground">still WIP</p>
        </div>
      </section>
    </main>
  );
}
