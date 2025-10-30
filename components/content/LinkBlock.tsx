import { LinkBlock as LinkBlockType } from "../../lib/types";

interface LinkBlockProps {
  block: LinkBlockType;
}

export default function LinkBlock({ block }: LinkBlockProps) {
  const sizeClasses = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg"
  };

  const alignClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right"
  };

  return (
    <div className={`mb-4 ${alignClasses[block.align || "left"]}`}>
      <a
        href={block.url}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center gap-1 ${sizeClasses[block.size || "md"]} text-black hover:text-gray-600 transition-colors underline decoration-1 underline-offset-2`}
      >
        {block.text}
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
    </div>
  );
}
