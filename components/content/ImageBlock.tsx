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

  const isAuto = !block.aspectRatio || block.aspectRatio === "auto";

  return (
    <div className="mb-8">
      <div className={`mx-auto ${sizeClasses[block.size || "md"]}`}>
        {block.title && (
          <p className="text-sm font-medium tracking-wide mb-1">{block.title}</p>
        )}
        {block.description && (
          <p className="text-xs text-gray-500 mb-3">{block.description}</p>
        )}
        {isAuto ? (
          <Image
            src={block.src}
            alt={block.alt}
            width={0}
            height={0}
            sizes="(max-width: 768px) 100vw, 896px"
            style={{ width: "100%", height: "auto", display: "block" }}
          />
        ) : (
          <div className={`relative bg-gray-100 ${aspectRatioClasses[block.aspectRatio!]}`}>
            <Image
              src={block.src}
              alt={block.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 896px"
            />
          </div>
        )}
        {block.caption && (
          <p className="text-xs text-gray-500 mt-2 text-center">{block.caption}</p>
        )}
      </div>
    </div>
  );
}
