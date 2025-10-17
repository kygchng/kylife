import { CodeBlock as CodeBlockType } from "../../lib/types";

interface CodeBlockProps {
  block: CodeBlockType;
}

export default function CodeBlock({ block }: CodeBlockProps) {
  return (
    <div className="mb-8">
      {block.filename && (
        <div className="bg-gray-100 px-4 py-2 text-sm text-gray-600 border-b">
          {block.filename}
        </div>
      )}
      <pre className="bg-gray-900 text-gray-100 p-4 overflow-x-auto rounded-b">
        <code className={block.language ? `language-${block.language}` : ""}>
          {block.content}
        </code>
      </pre>
    </div>
  );
}