"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const TOTAL_FRAMES = 5;
const FRAME_DURATION = 500; // milliseconds per frame (slower for clarity)

export default function OrangeAnimation() {
  const [currentFrame, setCurrentFrame] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showText, setShowText] = useState(true);
  const [fadeOutImage, setFadeOutImage] = useState(false);
  const [showEnterPage, setShowEnterPage] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const animationRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Preload all orange frames and wait for them to fully load
    let loadedCount = 0;
    const totalImages = TOTAL_FRAMES;

    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new window.Image();
      img.src = `/orange/${i.toString().padStart(2, "0")}.png`;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === totalImages) {
          setImagesLoaded(true);
        }
      };
    }
  }, []);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (animationRef.current) {
        clearTimeout(animationRef.current);
      }
    };
  }, []);

  const handleClick = () => {
    if (isAnimating || isComplete || !imagesLoaded) return;

    // Start the animation sequence
    setIsAnimating(true);
    setShowText(false); // Start text fade-out

    // Auto-play through all frames
    let frame = 1;
    const playNextFrame = () => {
      if (frame < TOTAL_FRAMES) {
        setCurrentFrame(frame);
        frame++;
        animationRef.current = setTimeout(playNextFrame, FRAME_DURATION);
      } else {
        // Animation complete, fade out the last frame then show enter page
        setFadeOutImage(true);
        setTimeout(() => {
          setIsComplete(true);
          setIsAnimating(false);
          // Trigger enter page fade in
          setTimeout(() => setShowEnterPage(true), 50);
        }, 600); // Wait for fade out
      }
    };

    // Start after a brief delay for text fade-out
    animationRef.current = setTimeout(playNextFrame, 300);
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-white"
      role="button"
      aria-label="click me"
    >
      {!isComplete ? (
        <div className={`relative place-content-center transition-opacity duration-700 ease-in-out ${fadeOutImage ? "opacity-0" : "opacity-100"}`}>
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
            <div
              className={`absolute top-[85%] left-1/2 -translate-x-1/2 w-full pointer-events-none transition-opacity duration-500 ease-in-out ${
                showText ? "opacity-100" : "opacity-0"
              }`}
            >
              <p className="text-2xl sm:text-3xl md:text-3xl font-serif text-center">
                click to peel.
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className={`text-center text-black relative select-none flex flex-col items-center transition-all duration-700 ease-out ${
          showEnterPage ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}>
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
