import { SubHeaderBlock as SubHeaderBlockType } from "../../lib/types";

interface SubHeaderBlockProps {
  block: SubHeaderBlockType;
}

export default function SubHeaderBlock({ block }: SubHeaderBlockProps) {
  const alignClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right"
  };

  return (
    <h3 className={`text-lg font-medium mb-4 mt-12 tracking-tight ${alignClasses[block.align || "left"]}`}>
      {block.content}
    </h3>
  );
}
