import Image from "next/image";
import { ImageGridBlock as ImageGridBlockType } from "../../lib/types";

interface ImageGridBlockProps {
  block: ImageGridBlockType;
}

export default function ImageGridBlock({ block }: ImageGridBlockProps) {
  const columnClasses = {
    2: "grid-cols-1 sm:grid-cols-2",
    3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
  };

  const gapClasses = {
    sm: "gap-2",
    md: "gap-4",
    lg: "gap-6"
  };

  return (
    <div className="mb-8">
      <div className={`grid ${columnClasses[block.columns || 3]} ${gapClasses[block.gap || "md"]}`}>
        {block.images.map((image, index) => (
          <div key={index}>
            <div className="aspect-square relative bg-gray-100">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
            {image.caption && (
              <p className="text-xs text-gray-600 mt-1 text-center italic">
                {image.caption}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}