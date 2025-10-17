import { VideoBlock as VideoBlockType } from "../../lib/types";

interface VideoBlockProps {
  block: VideoBlockType;
}

export default function VideoBlock({ block }: VideoBlockProps) {
  return (
    <div className="mb-8">
      <div className="max-w-4xl mx-auto">
        <video
          className="w-full"
          controls
          autoPlay={block.autoplay}
          loop={block.loop}
          poster={block.poster}
        >
          <source src={block.src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {block.caption && (
          <p className="text-sm text-gray-600 mt-2 text-center italic">
            {block.caption}
          </p>
        )}
      </div>
    </div>
  );
}