"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

import { Badge } from "./ui/badge";
import Star8 from "./stars/s8";
import Star14 from "./stars/s14";
import Star15 from "./stars/s15";
import Star20 from "./stars/s20";
import { ScrollVelocityRotate } from "./scroll-velocity-rotate";

export const cardData = [
  {
    id: 1,
    star: Star8,
    title: "Pitch Your Idea",
    description:
      "Submit your innovative project idea through our online form to participate. We're excited to hear what you have in mind!",
    color: "rgba(0, 214, 150, 0.8)",
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
}

const StackCard: React.FC<CardProps> = ({
  id,
  star: Star,
  title,
  description,
  index,
  totalCards,
  color,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

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
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "sticky",
        top: 0,
      }}
    >
      <div
        ref={cardRef}
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "800px",
          transformOrigin: "top",
          top: `calc(-5vh + ${index * 25}px)`,
          padding: "0 1rem",
        }}
      >
        <Card
          className="min-h-[400px] flex flex-col justify-start pt-12 px-5"
          style={{
            borderColor: color,
            borderWidth: "3px",
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
        </Card>
      </div>
    </div>
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
        />
      ))}
    </section>
  );
};
