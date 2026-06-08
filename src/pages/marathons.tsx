import MarathonSectionCard from "@/components/marathonSectionCard";
import Controls from "@/components/controls";
import { marathonSections } from "@/data/marathons";
import { RootState, setMarathonsFilterId, setMarathonsSortId } from "@/store";
import { gridStyles } from "@/styles";
import { useDispatch, useSelector } from "react-redux";
import { MarathonSection } from "@/types/marathons";

const filterOptions = [
  { id: "all", label: "All" },
  { id: "completed", label: "Completed" },
  { id: "upcoming", label: "Upcoming" },
];

const sortOptions = [
  { id: "date-desc", label: "Newest Race Date" },
  { id: "date-asc", label: "Oldest Race Date" },
  { id: "time-asc", label: "Fastest Finish Time" },
  { id: "time-desc", label: "Slowest Finish Time" },
];

export default function MarathonsPage() {
  const dispatch = useDispatch();
  const { marathonsFilterId, marathonsSortId } = useSelector((state: RootState) => state.controls);

  const filteredMarathons =
    marathonsFilterId === "all"
      ? marathonSections
      : marathonSections.filter((section) =>
          marathonsFilterId === "completed"
            ? section.stats.finishTime !== "TBD"
            : section.stats.finishTime === "TBD"
        );

  const pr = filteredMarathons
    .filter((marathon) => marathon.stats.finishTime !== "TBD")
    .reduce<MarathonSection | null>(
      (fastest, marathon) =>
        !fastest || marathon.stats.finishTime < fastest.stats.finishTime ? marathon : fastest,
      null
    );

  const sortedMarathons = [...filteredMarathons].sort((a, b) => {
    const dateA = new Date(a.raceDate).getTime();
    const dateB = new Date(b.raceDate).getTime();

    if (marathonsSortId === "date-asc") {
      return dateA - dateB;
    }

    if (marathonsSortId === "date-desc") {
      return dateB - dateA;
    }

    const aIsTbd = a.stats.finishTime === "TBD";
    const bIsTbd = b.stats.finishTime === "TBD";

    if (aIsTbd && bIsTbd) {
      return 0;
    }

    if (aIsTbd) {
      return 1;
    }

    if (bIsTbd) {
      return -1;
    }

    if (marathonsSortId === "time-asc") {
      return a.stats.finishTime.localeCompare(b.stats.finishTime);
    }

    return b.stats.finishTime.localeCompare(a.stats.finishTime);
  });

  return (
    <div>
      <Controls
        filterOptions={filterOptions}
        sortOptions={sortOptions}
        onFilterChange={(nextId) => dispatch(setMarathonsFilterId(nextId))}
        onSortChange={(nextId) => dispatch(setMarathonsSortId(nextId))}
      />
      <section className={gridStyles.grid}>
        {sortedMarathons.map((section) => (
          <MarathonSectionCard
            key={section.title}
            title={section.title}
            raceDate={section.raceDate}
            imageUrl={section.imageUrl}
            stats={section.stats}
            isPR={pr?.title === section.title}
          />
        ))}
      </section>
    </div>
  );
}
