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
    <div className={`mb-6 ${alignClasses[block.align || "left"]}`}>
      <blockquote className="text-sm italic text-gray-600 border-l-2 border-gray-300 pl-4 py-2">
        {block.content}
        {block.author && (
          <cite className="block mt-2 text-xs text-gray-500 not-italic">
            {block.author}
          </cite>
        )}
      </blockquote>
    </div>
  );
}
