import { QuoteBlock as QuoteBlockType } from "../../lib/types";

interface QuoteBlockProps {
  block: QuoteBlockType;
}

export default function QuoteBlock({ block }: QuoteBlockProps) {
  const alignClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right"
  };

  return (
    <div className={`mb-8 ${alignClasses[block.align || "left"]}`}>
      <blockquote className="text-lg italic text-gray-700 border-l-4 border-gray-300 pl-6">
        "{block.content}"
        {block.author && (
          <cite className="block mt-2 text-sm text-gray-500 not-italic">
             {block.author}
          </cite>
        )}
      </blockquote>
    </div>
  );
}