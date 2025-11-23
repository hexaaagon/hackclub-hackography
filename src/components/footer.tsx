"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { ArrowRight, Mail } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const [rsvpEmail, setRsvpEmail] = useState("");

  return (
    <footer className="border-border border-t-4 bg-secondary-background px-5 py-5 text-center text-sm sm:text-base">
      <div className="footer-end-container mx-auto flex w-full flex-col items-center justify-between gap-8 lg:flex-row lg:gap-0">
        <div className="my-auto space-y-3 font-inter">
          <div className="flex items-center space-x-2.5">
            <Mail size={16} />
            <p className="text-inner-foreground">
              RSVP Now to make this YSWS happened!
            </p>
          </div>
          <div className="flex flex-col items-center space-y-4 md:flex-row md:space-x-2.5 md:space-y-0">
            <Input
              type="email"
              placeholder="Your email address"
              className="min-w-80 border-inner-input bg-inner-input/30 font-mono text-inner-foreground"
              value={rsvpEmail}
              onChange={(e) => setRsvpEmail(e.target.value)}
            />
            <Button
              className="w-full bg-inner-primary px-8 font-medium text-inner-primary-foreground hover:bg-inner-primary/90 md:w-auto"
              onClick={() => {
                if (!rsvpEmail) {
                  window.open(
                    `https://go.hexaa.sh/hackography-rsvp?utm_source=hackography-page&utm_medium=footer`,
                    "_blank",
                  );
                  return;
                }
                if (!rsvpEmail.includes("@")) {
                  alert("Please enter a valid email address.");
                  return;
                }

                window.open(
                  `https://go.hexaa.sh/hackography-rsvp?utm_source=hackography-page&utm_medium=footer-rsvp&email=${encodeURIComponent(rsvpEmail)}`,
                  "_blank",
                );
              }}
            >
              RSVP
              <ArrowRight />
            </Button>
          </div>
        </div>
        <div className="space-y-1.5 text-center text-xs lg:text-right">
          <Link
            href="https://hackclub.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/static/images/hackclub-flag.svg"
              alt="Hack Club Logo"
              width={90}
              height={60}
              className="mb-2 inline-block invert"
            />
          </Link>
          <div className="space-y-1">
            <p>
              Made with ❤️ by{" "}
              <Link
                href="https://hexaa.sh"
                target="_blank"
                className="underline"
              >
                Hexaa
              </Link>{" "}
              at Hack Club.
            </p>
            <p className="text-2xs leading-3">
              This website is available on{" "}
              <Link
                href={`https://github.com/${process.env.NEXT_PUBLIC_VERCEL_GIT_REPO_OWNER || "hexaaagon"}/${process.env.NEXT_PUBLIC_VERCEL_GIT_REPO_SLUG || "hackclub-hackography"}`}
                className="underline transition-colors hover:text-inner-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </Link>{" "}
              {process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA && (
                <>
                  <Link
                    href={`https://github.com/${process.env.NEXT_PUBLIC_VERCEL_GIT_REPO_OWNER}/${process.env.NEXT_PUBLIC_VERCEL_GIT_REPO_SLUG}/commit/${process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA}`}
                    className="underline transition-colors hover:text-inner-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    (
                    {process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA?.slice(0, 7)}
                    )
                  </Link>{" "}
                </>
              )}
              as open-source.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
