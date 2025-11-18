"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "../../lib/site";
import Image from "next/image";

export default function Header() {
  const pathname = usePathname();
  const [now, setNow] = useState(new Date());
  const [mounted, setMounted] = useState(false);
  const [hoveredWord, setHoveredWord] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (pathname === "/") {
    return null;
  }

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });
  };

  const lastSqueezed = "11/18/2025";

  const getImageForWord = (word: string) => {
    switch (word) {
      case "oranges":
        return "/wendy-cope.webp";
      case "frankenstein":
        return "/frankenstein.jpg";
      case "four-agreements":
        return "/four-agreements.jpg";
      default:
        return "/orange/01.png";
    }
  };

  return (
    <>
      {/* Hover Image - Positioned in the center gap between left and right sections */}
      {hoveredWord && (
        <div className="fixed top-8 left-4/7 -translate-x-1/2 z-50 animate-in fade-in duration-200">
          <div className="bg-white p-2 shadow-xl border-2 border-orange-300">
            <Image
              src={getImageForWord(hoveredWord)}
              alt={`${hoveredWord} preview`}
              width={200}
              height={200}
              className="object-contain"
            />
          </div>
        </div>
      )}

      <header className="px-4 md:px-6 py-4 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1px] after:bg-black before:absolute before:bottom-[-4px] before:left-0 before:right-0 before:h-[1px] before:bg-black overflow-x-hidden">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 md:gap-8">
          {/* Left Column - Bio */}
          <div className="flex-shrink-0 w-full md:w-[600px]">
            <h1 className="text-[13px] md:text-sm mb-1">✿ Kylie Chang ✿</h1>

            <div className="text-[13px] md:text-sm leading-5 tracking-tight">
            <p>
              <span className="font-medium">Currently:</span> CS + Finance @ UPenn M&T
            </p>
            <p>
              <span className="font-medium">Previously:</span> AI @ Figma, KP Fellows '25
            </p>

            <p className="mt-1">
              <span className="font-medium">Talk to me about:</span> conceptual art, whimsical tech,{" "}
              <span
                className="px-1 -mx-1"
                style={{ backgroundColor: "#FFDBBB" }}
                onMouseEnter={() => !isMobile && setHoveredWord("four-agreements")}
                onMouseLeave={() => !isMobile && setHoveredWord(null)}
              >
                the Four Agreements
              </span>
              , women's health, Chinese dance,{" "}
              <span
                className="px-1 -mx-1"
                style={{ backgroundColor: "#FFDBBB" }}
                onMouseEnter={() => !isMobile && setHoveredWord("frankenstein")}
                onMouseLeave={() => !isMobile && setHoveredWord(null)}
              >
                Frankenstein's monster
              </span>
              , little joys, beli, and{" "}
              <a
                href="https://gladdestthing.com/poems/the-orange"
                target="_blank"
                rel="noreferrer"
                className="cursor-pointer px-1 -mx-1 hover:underline"
                style={{ backgroundColor: "#FFDBBB" }}
                onMouseEnter={() => !isMobile && setHoveredWord("oranges")}
                onMouseLeave={() => !isMobile && setHoveredWord(null)}
              >
                my love for oranges
              </a>
              .
            </p>
          </div>
        </div>

        {/* Right Column - Vibe & Links */}
        <div className="text-[13px] md:text-sm leading-5 tracking-tight text-left md:text-right flex-shrink-0">
          <div>
            <p className="text-gray-600">
               {mounted ? formatTime(now) : "loading..."}
            </p>
            <p className="text-gray-500 mt-0.5">
              ( last squeezed: {lastSqueezed} 🍊 )
            </p>
          </div>

          <div className="space-y-0.5 mt-2">
            {site.social.map((link) => (
              <div key={link.name}>
                <a
                  href={link.name === "E-mail" ? `mailto:${link.url}` : link.url}
                  target={link.name !== "E-mail" ? "_blank" : undefined}
                  rel={link.name !== "E-mail" ? "noreferrer" : undefined}
                  className="underline hover:opacity-60 transition-opacity"
                >
                  {link.name}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
    </>
  );
}
