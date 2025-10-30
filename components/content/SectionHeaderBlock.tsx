import { SectionHeaderBlock as SectionHeaderBlockType } from "../../lib/types";

interface SectionHeaderBlockProps {
  block: SectionHeaderBlockType;
}

export default function SectionHeaderBlock({ block }: SectionHeaderBlockProps) {
  const alignClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right"
  };

  return (
    <h2 className={`text-2xl font-medium mb-8 mt-16 tracking-tight ${alignClasses[block.align || "left"]}`}>
      {block.content}
    </h2>
  );
}
