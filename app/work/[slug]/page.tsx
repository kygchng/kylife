import { notFound } from "next/navigation";
import Link from "next/link";
import { PROJECTS } from "../../../lib/data/work";
import ContentBlock from "../../../components/content/ContentBlock";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="px-4 md:px-6 py-6 pb-16">
      {/* Project Header */}
      <div className="max-w-5xl mx-auto mb-12">
        <h1 className="text-3xl font-medium mb-2">{project.title}</h1>
        <p className="text-gray-600 mb-4">{project.date}</p>
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

        {/* Breadcrumb Navigation */}
        <div className="mt-3 text-xs text-gray-400">
          <Link href="/work" className="hover:text-gray-600 hover:underline transition-colors">
            work
          </Link>
          <span className="mx-1">/</span>
          <Link
            href={`/work?filter=${project.tags[0]}`}
            className="hover:text-gray-600 hover:underline transition-colors"
          >
            {project.tags[0]}
          </Link>
          <span className="mx-1">/</span>
          <span className="text-gray-500">{project.slug}</span>
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
            </div>
          </div>
        )}
      </div>
    </div>
  );
}