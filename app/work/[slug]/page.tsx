import { notFound } from "next/navigation";
import { PROJECTS } from "../../../lib/data/work";
import ContentBlock from "../../../components/content/ContentBlock";

interface ProjectPageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = PROJECTS.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  const formattedDate = new Date(project.date).getFullYear();

  return (
    <div className="px-4 md:px-6 py-6 pb-16">
      {/* Project Header */}
      <div className="max-w-5xl mx-auto mb-12">
        <h1 className="text-3xl font-medium mb-2">{project.title}</h1>
        <p className="text-gray-600 mb-4">{formattedDate}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 border rounded-full text-xs"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Flexible Content Blocks */}
      <div className="max-w-5xl mx-auto">
        {project.content ? (
          project.content.map((block, index) => (
            <ContentBlock key={index} block={block} />
          ))
        ) : (
          /* Fallback for legacy projects */
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <div className="aspect-video relative bg-gray-100 mb-6">
                <img
                  src={project.cover}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-gray-700 leading-relaxed">{project.description}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}