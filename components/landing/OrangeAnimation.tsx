"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { LettersPullUp } from "../ui/LettersPullUp";

const TOTAL_FRAMES = 5;

export default function OrangeAnimation() {
  const [currentFrame, setCurrentFrame] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [showText, setShowText] = useState(true);

  useEffect(() => {
    // Preload all orange frames
    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new window.Image();
      img.src = `/orange/${i.toString().padStart(2, "0")}.png`;
    }
  }, []);

  const handleClick = () => {
    if (currentFrame < TOTAL_FRAMES - 1) {
      if (currentFrame === 0) {
        setShowText(false); // Start fade-out
        setTimeout(() => {
          setCurrentFrame((prev) => prev + 1);
        }, 300); // Wait for fade-out to complete
      } else {
        setCurrentFrame((prev) => prev + 1);
      }
    } else if (currentFrame === TOTAL_FRAMES - 1) {
      setIsComplete(true);
    }
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-white"
      role="button"
      aria-label="click me"
    >
      {!isComplete ? (
        <div className="relative place-content-center transition-opacity duration-500 ease-out">
          <div className="relative inline-block transition-transform duration-300 hover:scale-105">
            <Image
              src={`/orange/${(currentFrame + 1)
                .toString()
                .padStart(2, "0")}.png`}
              alt={`Orange animation frame ${currentFrame + 1}`}
              width={800}
              height={800}
              priority={currentFrame === 0}
              className="object-contain pointer-events-none"
            />
            <div
              onClick={handleClick}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] rounded-full cursor-pointer"
              style={{
                background: "transparent",
                zIndex: 10,
              }}
            />
            {currentFrame === 0 && (
              <div
                className={`absolute top-[85%] left-1/2 -translate-x-1/2 w-full pointer-events-none transition-opacity duration-250 ${
                  showText ? "opacity-100" : "opacity-0"
                }`}
              >
                <LettersPullUp
                  text="click to peel"
                  className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-700"
                />
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="text-center text-black relative select-none">
          <div className="absolute -top-10 -left-54 opacity-90 select-none">
            <Image
              src="/orange/08.png"
              alt="Orange slice"
              width={180}
              height={180}
              className="object-contain select-none"
            />
          </div>
          <div className="absolute -top-20 -right-34 opacity-90 select-none">
            <Image
              src="/orange/09.png"
              alt="me"
              width={120}
              height={120}
              className="object-contain select-none"
            />
          </div>
          <p className="text-lg mb-8 text-gray-700 max-w-md mx-auto leading-relaxed select-none">
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
        </div>
      )}
    </div>
  );
}
