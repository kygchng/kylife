export type Tag = "art" | "build" | "misc";

// Content block types for flexible project pages
export type ContentBlock =
  | TextBlock
  | ImageBlock
  | ImageGridBlock
  | VideoBlock
  | SpacerBlock
  | QuoteBlock
  | CodeBlock;

export interface TextBlock {
  type: "text";
  content: string; // supports markdown
  size?: "sm" | "md" | "lg"; // text size
  align?: "left" | "center" | "right";
}

export interface ImageBlock {
  type: "image";
  src: string;
  alt: string;
  caption?: string;
  size?: "sm" | "md" | "lg" | "full"; // width/layout
  aspectRatio?: "square" | "video" | "wide" | "tall" | "auto";
}

export interface ImageGridBlock {
  type: "imageGrid";
  images: Array<{
    src: string;
    alt: string;
    caption?: string;
  }>;
  columns?: 2 | 3 | 4;
  gap?: "sm" | "md" | "lg";
}

export interface VideoBlock {
  type: "video";
  src: string; // URL or path
  poster?: string; // thumbnail
  caption?: string;
  autoplay?: boolean;
  loop?: boolean;
}

export interface SpacerBlock {
  type: "spacer";
  size: "sm" | "md" | "lg" | "xl";
}

export interface QuoteBlock {
  type: "quote";
  content: string;
  author?: string;
  align?: "left" | "center" | "right";
}

export interface CodeBlock {
  type: "code";
  content: string;
  language?: string;
  filename?: string;
}

export interface Project {
  slug: string;
  title: string;
  date: string; // ISO date or year
  cover: string; // path to cover image
  description: string; // short description for gallery
  tags: Tag[];

  // New flexible content system
  content: ContentBlock[];

  // Legacy support (deprecated)
  images?: string[];
}