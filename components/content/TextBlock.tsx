import { TextBlock as TextBlockType } from "../../lib/types";

interface TextBlockProps {
  block: TextBlockType;
}

export default function TextBlock({ block }: TextBlockProps) {
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
    <div className={`mb-6 ${alignClasses[block.align || "left"]}`}>
      <div
        className={`prose prose-neutral max-w-none ${sizeClasses[block.size || "md"]}`}
        dangerouslySetInnerHTML={{
          __html: block.content.replace(/\n/g, '<br/>')
        }}
      />
    </div>
  );
}