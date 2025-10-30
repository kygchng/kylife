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
          <p className="text-sm text-gray-700 leading-relaxed">{block.description}</p>
          {block.link && (
            <a
              href={block.link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-black hover:text-gray-600 transition-colors underline decoration-1 underline-offset-2 mt-2"
            >
              {block.link.text}
              <svg
                className="w-3 h-3 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
