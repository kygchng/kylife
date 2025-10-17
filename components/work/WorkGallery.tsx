import { PROJECTS } from "../../lib/data/work";
import { Tag } from "../../lib/types";
import WorkCard from "./WorkCard";

interface WorkGalleryProps {
  filter: string;
}

export default function WorkGallery({ filter }: WorkGalleryProps) {
  const filteredProjects = filter === "all"
    ? PROJECTS
    : PROJECTS.filter(project => project.tags.includes(filter as Tag));

  return (
    <div className="grid gap-4 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {filteredProjects.map((project) => (
        <WorkCard key={project.slug} project={project} />
      ))}
    </div>
  );
}