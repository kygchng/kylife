import Image from "next/image";
import { ImageBlock as ImageBlockType } from "../../lib/types";

interface ImageBlockProps {
  block: ImageBlockType;
}

export default function ImageBlock({ block }: ImageBlockProps) {
  const sizeClasses = {
    sm: "max-w-md",
    md: "max-w-2xl",
    lg: "max-w-4xl",
    full: "w-full"
  };

  const aspectRatioClasses = {
    square: "aspect-square",
    video: "aspect-video",
    wide: "aspect-[16/9]",
    tall: "aspect-[3/4]",
    auto: ""
  };

  return (
    <div className="mb-8">
      <div className={`mx-auto ${sizeClasses[block.size || "md"]}`}>
        <div className={`relative bg-gray-100 ${aspectRatioClasses[block.aspectRatio || "auto"]}`}>
          <Image
            src={block.src}
            alt={block.alt}
            fill={block.aspectRatio !== "auto"}
            width={block.aspectRatio === "auto" ? 800 : undefined}
            height={block.aspectRatio === "auto" ? 600 : undefined}
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 800px"
          />
        </div>
        {block.caption && (
          <p className="text-sm text-gray-600 mt-2 text-center italic">
            {block.caption}
          </p>
        )}
      </div>
    </div>
  );
}