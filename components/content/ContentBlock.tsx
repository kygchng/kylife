import { ContentBlock as ContentBlockType } from "../../lib/types";
import TextBlock from "./TextBlock";
import ImageBlock from "./ImageBlock";
import ImageGridBlock from "./ImageGridBlock";
import VideoBlock from "./VideoBlock";
import SpacerBlock from "./SpacerBlock";
import QuoteBlock from "./QuoteBlock";
import CodeBlock from "./CodeBlock";
import SectionHeaderBlock from "./SectionHeaderBlock";
import SubHeaderBlock from "./SubHeaderBlock";
import RichTextBlock from "./RichTextBlock";
import LinkBlock from "./LinkBlock";
import SideBySideBlock from "./SideBySideBlock";

interface ContentBlockProps {
  block: ContentBlockType;
}

export default function ContentBlock({ block }: ContentBlockProps) {
  switch (block.type) {
    case "text":
      return <TextBlock block={block} />;
    case "image":
      return <ImageBlock block={block} />;
    case "imageGrid":
      return <ImageGridBlock block={block} />;
    case "video":
      return <VideoBlock block={block} />;
    case "spacer":
      return <SpacerBlock block={block} />;
    case "quote":
      return <QuoteBlock block={block} />;
    case "code":
      return <CodeBlock block={block} />;
    case "sectionHeader":
      return <SectionHeaderBlock block={block} />;
    case "subHeader":
      return <SubHeaderBlock block={block} />;
    case "richText":
      return <RichTextBlock block={block} />;
    case "link":
      return <LinkBlock block={block} />;
    case "sideBySide":
      return <SideBySideBlock block={block} />;
    default:
      return null;
  }
}