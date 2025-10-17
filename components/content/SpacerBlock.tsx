import { SpacerBlock as SpacerBlockType } from "../../lib/types";

interface SpacerBlockProps {
  block: SpacerBlockType;
}

export default function SpacerBlock({ block }: SpacerBlockProps) {
  const sizeClasses = {
    sm: "h-4",
    md: "h-8",
    lg: "h-16",
    xl: "h-24"
  };

  return <div className={sizeClasses[block.size]} />;
}