import { TextColumnsBlock as TextColumnsBlockType } from "../../lib/types";

interface TextColumnsBlockProps {
  block: TextColumnsBlockType;
}

export default function TextColumnsBlock({ block }: TextColumnsBlockProps) {
  const processContent = (content: string) =>
    content
      .replace(/\*\*(.*?)\*\*/g, '<strong class="font-medium">$1</strong>')
      .replace(/\n/g, "<br/>");

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-6">
      {block.columns.map((col, i) => (
        <div key={i}>
          <h3 className="text-sm font-medium mb-3 border-b border-gray-200 pb-2">
            {col.title}
          </h3>
          <div
            className="text-sm leading-relaxed"
            dangerouslySetInnerHTML={{ __html: processContent(col.content) }}
          />
        </div>
      ))}
    </div>
  );
}
