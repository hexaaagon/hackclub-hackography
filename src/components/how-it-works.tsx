"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Star8 from "./stars/s8";
import Star14 from "./stars/s14";
import Star15 from "./stars/s15";
import Star20 from "./stars/s20";

import { ScrollVelocityRotate } from "./scroll-velocity-rotate";

import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { DefaultChatTransport } from "ai";
import { useChat } from "@ai-sdk/react";

export const cardData = [
  {
    id: 1,
    star: Star8,
    title: "Pitch Your Idea",
    description:
      "Submit your innovative project idea through our online form to participate. We're excited to hear what you have in mind!",
    color: "rgba(0, 214, 150, 0.8)",
    specialCase: "hackographeus-project-idea",
  },
  {
    id: 2,
    star: Star14,
    title: "Build your Project",
    description:
      "After pitching, develop your project using the camera and submit it for review!",
    color: "rgba(236, 55, 80, 0.8)",
  },
  {
    id: 3,
    star: Star15,
    title: "Submit you well-crafted Project",
    description:
      "Once your project is ready, submit it through the submission form!",
    color: "rgba(59, 130, 246, 0.8)",
  },
  {
    id: 4,
    star: Star20,
    title: "Receive your Camera Kit",
    description:
      "Upon approval of your submission, you'll receive a camera kit to bring your project to life!",
    color: "rgba(168, 85, 247, 0.8)",
  },
];

gsap.registerPlugin(ScrollTrigger);

interface CardProps {
  id: number;
  star: typeof Star8;
  title: string;
  description: string;
  index: number;
  totalCards: number;
  color: string;
  specialCase?: string;
}

const StackCard: React.FC<CardProps> = ({
  id,
  star: Star,
  title,
  description,
  index,
  totalCards,
  color,
  specialCase,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // special case - hackographeus project idea card
  const [mode, setMode] = useState<"view" | "generate">("view");
  const chat = useChat({
    transport: new DefaultChatTransport({
      api: "/api/hackographeus/project-idea",
    }),
  });

  useEffect(() => {
    const card = cardRef.current;
    const container = containerRef.current;
    if (!card || !container) return;

    const targetScale = 1 - (totalCards - index) * 0.05;

    // Set initial state
    gsap.set(card, {
      scale: 1,
      transformOrigin: "center top",
    });

    // Create scroll trigger for stacking effect
    ScrollTrigger.create({
      trigger: container,
      start: "top center",
      end: "bottom top",
      scrub: 1,
      onUpdate: (self) => {
        const progress = self.progress;
        const scale = gsap.utils.interpolate(1, targetScale, progress);

        gsap.set(card, {
          scale: Math.max(scale, targetScale),
          transformOrigin: "center top",
        });
      },
    });

    return () => {
      for (const trigger of ScrollTrigger.getAll()) {
        trigger.kill();
      }
    };
  }, [index, totalCards]);

  return (
    <div
      ref={containerRef}
      className="h-screen flex flex-col items-center justify-center sticky top-0"
    >
      <div
        ref={cardRef}
        className="relative w-full max-w-[800px] origin-top px-4"
        style={{
          top: `calc(-5vh + ${index * 25}px)`,
        }}
      >
        {specialCase === "hackographeus-project-idea" && mode === "generate" ? (
          <HackographeusProjectIdeaCard
            id={id}
            star={Star}
            title={title}
            description={description}
            index={index}
            totalCards={cardData.length}
            color={color}
            specialCase={specialCase}
            chat={chat}
          />
        ) : (
          <Card
            className="min-h-[400px] flex flex-col relative justify-start pt-12 px-5 border-[3px]"
            style={{
              borderColor: color,
            }}
          >
            <CardHeader>
              <ScrollVelocityRotate className="h-min w-min" baseVelocity={75}>
                <Star
                  size={48}
                  className="text-main stroke-6 stroke-foreground mb-1"
                />
              </ScrollVelocityRotate>
              <Badge className="font-mono mb-2.5">STEP {id}</Badge>
              <CardTitle className="text-3xl md:text-4xl">{title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-lg md:text-xl">
                {description}
              </CardDescription>
            </CardContent>
            {specialCase === "hackographeus-project-idea" && (
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button
                      type="button"
                      className="cursor-pointer absolute bottom-0 right-5"
                      onClick={() => {
                        setMode("generate");
                        chat.sendMessage();
                      }}
                    >
                      <Image
                        src="/static/images/confused_dinosaur.png"
                        alt="Confused Dinosaur"
                        height={96}
                        width={96}
                        className="pixelated"
                      />
                    </button>
                  </TooltipTrigger>
                  <TooltipContent side="left" className="mr-2 max-w-48">
                    <p>Ask Hackographeus for project idea</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            )}
          </Card>
        )}
      </div>
    </div>
  );
};

const HackographeusProjectIdeaCard: React.FC<
  CardProps & { chat: ReturnType<typeof useChat> }
> = ({ id, star: Star, color, chat }) => {
  console.log("chat messages:", chat.messages);
  console.log("chat status:", chat.status);
  const latestMessage =
    chat.messages
      .at(-1)
      ?.parts.map((part) => (part.type === "text" ? part.text : ""))
      .at(-1) || "";
  const title = latestMessage.split("::")[0];
  const description = latestMessage.split("::")[1];

  return (
    <Card
      className="min-h-[400px] flex flex-col relative justify-start pt-12 px-5 border-[3px]"
      style={{
        borderColor: color,
      }}
    >
      <CardHeader>
        <ScrollVelocityRotate className="h-min w-min" baseVelocity={75}>
          <Star
            size={48}
            className="text-main stroke-6 stroke-foreground mb-1"
          />
        </ScrollVelocityRotate>
        <Badge className="font-mono mb-2.5">STEP {id}</Badge>
        <CardTitle className="text-3xl md:text-4xl">Pitch '{title}'</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-lg md:text-xl">
          {description}
        </CardDescription>
      </CardContent>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <button
              type="button"
              className={cn(
                "absolute bottom-0 right-5 z-10",
                chat.status !== "ready"
                  ? "animate-pulse cursor-progress"
                  : "cursor-pointer",
              )}
              disabled={chat.status !== "ready"}
              onClick={() => {
                if (chat.status === "ready") chat.sendMessage();
              }}
            >
              <Image
                src="/static/images/confused_dinosaur.png"
                alt="Confused Dinosaur"
                height={96}
                width={96}
                className="pixelated"
              />
            </button>
          </TooltipTrigger>
          <TooltipContent side="left" className="mr-2 max-w-48">
            <p>
              {chat.status === "ready"
                ? "Ask Hackographeus for another project idea"
                : "Hackographeus is thinking..."}
            </p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </Card>
  );
};

export const StackedCards: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    gsap.fromTo(
      container,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1.2,
        ease: "power2.out",
      },
    );
  }, []);

  return (
    <section ref={containerRef} className="w-full">
      {cardData.map((card, index) => (
        <StackCard
          key={card.id}
          id={card.id}
          star={card.star}
          title={card.title}
          description={card.description}
          index={index}
          totalCards={cardData.length}
          color={card.color}
          specialCase={card.specialCase}
        />
      ))}
    </section>
  );
};
