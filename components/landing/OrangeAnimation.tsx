"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const TOTAL_FRAMES = 5;
const FRAME_DURATION = 500;

const frameSrcs = Array.from(
  { length: TOTAL_FRAMES },
  (_, i) => `/orange/${(i + 1).toString().padStart(2, "0")}.png`
);

export default function OrangeAnimation() {
  const [currentFrame, setCurrentFrame] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showText, setShowText] = useState(true);
  const [fadeOutImage, setFadeOutImage] = useState(false);
  const [showEnterPage, setShowEnterPage] = useState(false);
  const [loadedCount, setLoadedCount] = useState(0);
  const animationRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const allLoaded = loadedCount >= TOTAL_FRAMES;

  useEffect(() => {
    return () => {
      if (animationRef.current) clearTimeout(animationRef.current);
    };
  }, []);

  const handleClick = () => {
    if (isAnimating || isComplete || !allLoaded) return;

    setIsAnimating(true);
    setShowText(false);

    let frame = 1;
    const playNextFrame = () => {
      if (frame < TOTAL_FRAMES) {
        setCurrentFrame(frame);
        frame++;
        animationRef.current = setTimeout(playNextFrame, FRAME_DURATION);
      } else {
        setFadeOutImage(true);
        setTimeout(() => {
          setIsComplete(true);
          setIsAnimating(false);
          setTimeout(() => setShowEnterPage(true), 50);
        }, 600);
      }
    };

    animationRef.current = setTimeout(playNextFrame, 300);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white">
      {!isComplete ? (
        <div
          className={`transition-opacity duration-700 ease-in-out ${
            fadeOutImage ? "opacity-0" : "opacity-100"
          }`}
        >
          <div className="relative group">
            {/* Image stack — all frames in DOM, switched via opacity (no src swaps = no flicker) */}
            <div
              className="relative transition-transform duration-300 group-hover:scale-105"
              style={{
                width: "min(800px, 90vw)",
                aspectRatio: "1 / 1",
                willChange: "transform",
              }}
            >
              {frameSrcs.map((src, i) => (
                <div
                  key={src}
                  className="absolute inset-0"
                  style={{ opacity: i === currentFrame ? 1 : 0 }}
                >
                  <Image
                    src={src}
                    alt={i === 0 ? "Orange" : ""}
                    fill
                    sizes="min(800px, 90vw)"
                    priority={i === 0}
                    loading={i === 0 ? undefined : "eager"}
                    onLoad={() => setLoadedCount((c) => c + 1)}
                    onError={() => setLoadedCount((c) => c + 1)}
                    className="object-contain pointer-events-none select-none"
                  />
                </div>
              ))}
            </div>

            {/* Click target — outside scaled div so it doesn't move on hover */}
            <div
              onClick={handleClick}
              onKeyDown={(e) => e.key === "Enter" && handleClick()}
              role="button"
              tabIndex={0}
              aria-label="Click to peel the orange"
              className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] rounded-full ${
                allLoaded ? "cursor-pointer" : "cursor-wait"
              }`}
              style={{
                background: "transparent",
                zIndex: 10,
                touchAction: "manipulation",
              }}
            />

            {/* Text — outside scaled div so it doesn't move on hover */}
            <div
              className={`absolute top-[85%] left-1/2 -translate-x-1/2 w-full pointer-events-none transition-opacity duration-500 ease-in-out ${
                showText ? "opacity-100" : "opacity-0"
              }`}
            >
              <p className="text-lg text-gray-700 text-center leading-relaxed">
                {allLoaded ? "click to peel." : "loading..."}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div
          className={`text-center text-black relative select-none flex flex-col items-center transition-all duration-700 ease-out ${
            showEnterPage
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
          }`}
        >
          {/* Mobile: above text, Desktop: absolute positioned left */}
          <div className="mb-6 md:mb-0 md:absolute md:-top-10 md:-left-54 opacity-90 select-none">
            <Image
              src="/orange/08.png"
              alt="Orange slice"
              width={180}
              height={180}
              className="object-contain select-none w-[120px] h-[120px] md:w-[180px] md:h-[180px]"
            />
          </div>
          <p className="text-lg mb-8 text-gray-700 max-w-md mx-auto leading-relaxed select-none px-4">
            peel back the layers—
            <br />
            there's more than meets the rind
          </p>
          <Link
            href="/work"
            className="inline-block rounded-full border border-black px-5 py-2.5 text-sm hover:bg-black hover:text-white transition-all duration-300 select-none"
          >
            enter
          </Link>
          {/* Mobile: below button, Desktop: absolute positioned right */}
          <div className="mt-6 md:mt-0 md:absolute md:-top-10 md:-right-45 opacity-90 select-none">
            <Image
              src="/orange/09.png"
              alt="me"
              width={180}
              height={180}
              className="object-contain select-none w-[120px] h-[120px] md:w-[180px] md:h-[180px]"
            />
          </div>
        </div>
      )}
    </div>
  );
}
