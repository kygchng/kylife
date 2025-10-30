import { RichTextBlock as RichTextBlockType } from "../../lib/types";

interface RichTextBlockProps {
  block: RichTextBlockType;
}

export default function RichTextBlock({ block }: RichTextBlockProps) {
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

  // Process content to support **bold labels:**
  // Convert **Label:** to <strong>Label:</strong>
  const processedContent = block.content
    .replace(/\*\*(.*?):\*\*/g, '<strong class="font-medium">$1:</strong>')
    .replace(/\n/g, '<br/>');

  return (
    <div className={`mb-4 ${alignClasses[block.align || "left"]}`}>
      <div
        className={`${sizeClasses[block.size || "md"]} leading-relaxed`}
        dangerouslySetInnerHTML={{
          __html: processedContent
        }}
      />
    </div>
  );
}
