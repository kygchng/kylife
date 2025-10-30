import { TextBlock as TextBlockType } from "../../lib/types";

interface TextBlockProps {
  block: TextBlockType;
}

export default function TextBlock({ block }: TextBlockProps) {
  const sizeClasses = {
    sm: "text-sm leading-relaxed",
    md: "text-base leading-relaxed",
    lg: "text-lg leading-relaxed"
  };

  const alignClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right"
  };

  return (
    <div className={`mb-4 ${alignClasses[block.align || "left"]}`}>
      <div
        className={`${sizeClasses[block.size || "md"]} max-w-none`}
        dangerouslySetInnerHTML={{
          __html: block.content.replace(/\n/g, '<br/>')
        }}
      />
    </div>
  );
}