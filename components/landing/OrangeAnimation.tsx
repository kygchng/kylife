"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const TOTAL_FRAMES = 8;

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
      className="fixed inset-0 flex items-center justify-center cursor-pointer"
      style={{ backgroundColor: "#9baf8e" }}
      onClick={handleClick}
      role="button"
      aria-label="click me"
    >
      {!isComplete ? (
        <div className="relative place-content-center">
          <Image
            src={`/orange/${(currentFrame + 1)
              .toString()
              .padStart(2, "0")}.png`}
            alt={`Orange animation frame ${currentFrame + 1}`}
            width={1200}
            height={1200}
            priority={currentFrame === 0}
            className="object-contain"
          />
        </div>
      ) : (
        <div className="text-center text-black">
          <h1 className="text-3xl mb-6">kylie chang</h1>
          <h1 className="text-xl italic mb-6">welcome!</h1>
          <Link
            href="/work"
            className="inline-block rounded-full border border-black px-4 py-2 text-sm hover:bg-black hover:text-white transition"
          >
            enter
          </Link>
        </div>
      )}
    </div>
  );
}
