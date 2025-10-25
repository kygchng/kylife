"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const TOTAL_FRAMES = 5;

export default function OrangeAnimation() {
  const [currentFrame, setCurrentFrame] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // Preload all orange frames
    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new window.Image();
      img.src = `/orange/${i.toString().padStart(2, "0")}.png`;
    }
  }, []);

  const handleClick = () => {
    if (currentFrame < TOTAL_FRAMES - 1) {
      setCurrentFrame((prev) => prev + 1);
    } else if (currentFrame === TOTAL_FRAMES - 1) {
      setIsComplete(true);
    }
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center cursor-pointer bg-white"
      onClick={handleClick}
      role="button"
      aria-label="click me"
    >
      {!isComplete ? (
        <div className="relative place-content-center transition-opacity duration-500 ease-out">
          <Image
            src={`/orange/${(currentFrame + 1)
              .toString()
              .padStart(2, "0")}.png`}
            alt={`Orange animation frame ${currentFrame + 1}`}
            width={800}
            height={800}
            priority={currentFrame === 0}
            className="object-contain transition-transform duration-500 ease-out hover:scale-105"
          />
        </div>
      ) : (
        <div className="text-center text-black relative">
          <div className="absolute -top-20 -left-64 opacity-90">
            <Image
              src="/orange/08.png"
              alt="Orange slice"
              width={300}
              height={300}
              className="object-contain"
            />
          </div>
          <div className="absolute -top-20 -right-34 opacity-90">
            <Image
              src="/orange/09.png"
              alt="me"
              width={120}
              height={120}
              className="object-contain"
            />
          </div>
          <p className="text-lg mb-8 text-gray-700 max-w-md mx-auto leading-relaxed">
            peel back the layers—
            <br />
            there's more than meets the rind
          </p>
          <Link
            href="/work"
            className="inline-block rounded-full border border-black px-5 py-2.5 text-sm hover:bg-black hover:text-white transition-all duration-300"
          >
            enter
          </Link>
        </div>
      )}
    </div>
  );
}
