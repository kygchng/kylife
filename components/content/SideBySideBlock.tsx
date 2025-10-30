import Image from "next/image";
import { SideBySideBlock as SideBySideBlockType } from "../../lib/types";

interface SideBySideBlockProps {
  block: SideBySideBlockType;
}

export default function SideBySideBlock({ block }: SideBySideBlockProps) {
  const imagePosition = block.imagePosition || "left";

  return (
    <div className="mb-8">
      <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 items-center ${
        imagePosition === "right" ? "md:grid-flow-dense" : ""
      }`}>
        {/* Image */}
        <div className={`relative aspect-square bg-gray-100 ${
          imagePosition === "right" ? "md:col-start-2" : ""
        }`}>
          <Image
            src={block.image}
            alt={block.alt}
            fill
            className="object-cover rounded"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        {/* Text Content */}
        <div className={imagePosition === "right" ? "md:col-start-1 md:row-start-1" : ""}>
          <h4 className="text-base font-medium mb-2">{block.title}</h4>
          <p className="text-md text-gray-700 leading-relaxed">{block.description}</p>
        </div>
      </div>
    </div>
  );
}
