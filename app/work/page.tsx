import WorkFilters from "../../components/work/WorkFilters";
import WorkGallery from "../../components/work/WorkGallery";
import WorkPageWrapper from "../../components/work/WorkPageWrapper";

interface WorkPageProps {
  searchParams: Promise<{ filter?: string }>;
}

export default async function WorkPage({ searchParams }: WorkPageProps) {
  const { filter = "all" } = await searchParams;

  return (
    <WorkPageWrapper>
      <div className="px-4 md:px-6 py-6 pb-16">
        <h1 className="text-2xl font-medium mb-8">Work</h1>
        <WorkFilters />
        <WorkGallery filter={filter} />
      </div>
    </WorkPageWrapper>
  );
}