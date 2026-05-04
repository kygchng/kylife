import Image from "next/image";
import { ImageGridBlock as ImageGridBlockType } from "../../lib/types";

interface ImageGridBlockProps {
  block: ImageGridBlockType;
}

export default function ImageGridBlock({ block }: ImageGridBlockProps) {
  const columnClasses = {
    2: "grid-cols-1 sm:grid-cols-2",
    3: "grid-cols-3",
    4: "grid-cols-2 sm:grid-cols-4",
  };

  const gapClasses = {
    sm: "gap-2",
    md: "gap-3",
    lg: "gap-6",
  };

  const header = (
    <>
      {block.title && (
        <p className="text-sm font-medium tracking-wide mb-1">{block.title}</p>
      )}
      {block.description && (
        <p className="text-xs text-gray-500 mb-3">{block.description}</p>
      )}
    </>
  );

  if (block.uniform) {
    return (
      <div className="mb-8">
        {header}
        <div
          className={`grid ${columnClasses[block.columns || 3]} ${gapClasses[block.gap || "md"]}`}
        >
          {block.images.map((image, index) => (
            <div key={index}>
              <div className="aspect-square relative overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 50vw, 33vw"
                />
              </div>
              {image.caption && (
                <p className="text-xs text-gray-500 mt-1 text-center">
                  {image.caption}
                </p>
              )}
            </div>
          ))}
        </div>
        {block.caption && (
          <p className="text-xs text-gray-500 mt-2 text-center">
            {block.caption}
          </p>
        )}
      </div>
    );
  }

  // Proportional flex layout — portrait image (index 0) defines row height naturally;
  // landscape images (index 1+) fill that height with cover crop.
  // Wrapped in max-w-4xl to match single ImageBlock width.
  if (block.flexRatios && block.flexRatios.length === block.images.length) {
    const gapPx = block.gap === "sm" ? 8 : block.gap === "lg" ? 24 : 12;
    return (
      <div className="mb-8">
        <div className="max-w-4xl mx-auto">
          {header}
          <div
            style={{
              display: "flex",
              gap: `${gapPx}px`,
              alignItems: "stretch",
            }}
          >
            {block.images.map((image, index) => {
              const definesHeight = index === 0;
              return (
                <div
                  key={index}
                  style={{
                    flex: block.flexRatios![index],
                    minWidth: 0,
                    overflow: "hidden",
                  }}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={0}
                    height={0}
                    sizes="(max-width: 640px) 100vw, 50vw"
                    style={{
                      width: "100%",
                      height: definesHeight ? "auto" : "100%",
                      objectFit: definesHeight ? undefined : "cover",
                      display: "block",
                    }}
                  />
                </div>
              );
            })}
          </div>
        </div>
        {block.caption && (
          <p className="text-xs text-gray-500 mt-2 text-center">
            {block.caption}
          </p>
        )}
      </div>
    );
  }

  // Default: natural aspect ratio grid
  return (
    <div className="mb-8">
      {header}
      <div
        className={`grid ${columnClasses[block.columns || 3]} ${gapClasses[block.gap || "md"]} items-start`}
      >
        {block.images.map((image, index) => (
          <div key={index}>
            <Image
              src={image.src}
              alt={image.alt}
              width={0}
              height={0}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              style={{ width: "100%", height: "auto", display: "block" }}
            />
            {image.caption && (
              <p className="text-xs text-gray-500 mt-1 text-center">
                {image.caption}
              </p>
            )}
          </div>
        ))}
      </div>
      {block.caption && (
        <p className="text-xs text-gray-500 mt-2 text-center">
          {block.caption}
        </p>
      )}
    </div>
  );
}
