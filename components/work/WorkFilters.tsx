"use client";

import { useRouter, useSearchParams } from "next/navigation";

const FILTERS = ["all", "build", "art", "misc"] as const;

export default function WorkFilters() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentFilter = searchParams.get("filter") || "all";

  const handleFilterChange = (filter: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (filter === "all") {
      params.delete("filter");
    } else {
      params.set("filter", filter);
    }
    router.push(`/work?${params.toString()}`);
  };

  return (
    <div className="flex gap-2 mb-8">
      {FILTERS.map((filter) => (
        <button
          key={filter}
          onClick={() => handleFilterChange(filter)}
          className={`px-2 py-0.5 border rounded-full text-xs transition ${
            currentFilter === filter
              ? "bg-black text-white"
              : "border-gray-300 hover:border-black"
          }`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}