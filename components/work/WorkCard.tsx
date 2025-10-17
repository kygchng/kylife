import Link from "next/link";
import Image from "next/image";
import { Project } from "../../lib/types";

interface WorkCardProps {
  project: Project;
}

export default function WorkCard({ project }: WorkCardProps) {
  return (
    <Link href={`/work/${project.slug}`} className="block group">
      <div className="aspect-square bg-gray-100 mb-3 relative overflow-hidden">
        <Image
          src={project.cover}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
      <h3 className="font-medium mb-1">{project.title}</h3>
      <p className="text-sm text-gray-600 mb-2">{project.date}</p>
      <div className="flex flex-wrap gap-1">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-0.5 border rounded-full text-xs text-gray-700"
          >
            {tag}
          </span>
        ))}
      </div>
    </Link>
  );
}