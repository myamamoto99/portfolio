import MarathonSectionCard from "@/components/marathonSectionCard";
import Controls from "@/components/controls";
import { marathonSections } from "@/data/marathons";
import { RootState, setMarathonsFilterId } from "@/store";
import { gridStyles } from "@/styles";
import { useDispatch, useSelector } from "react-redux";
import { MarathonSection } from "@/types/marathons";

export default function MarathonsPage() {
  const dispatch = useDispatch();
  const activeControlId = useSelector((state: RootState) => state.controls.marathonsFilterId);

  const filteredMarathons =
    activeControlId === "all"
      ? marathonSections
      : marathonSections.filter((section) =>
          activeControlId === "completed"
            ? section.stats.finishTime !== "TBD"
            : section.stats.finishTime === "TBD"
        );

  const pr = filteredMarathons.reduce((fastest, marathon) => {
    return marathon.stats.finishTime !== "TBD" &&
      marathon.stats.finishTime < fastest.stats?.finishTime
      ? marathon
      : fastest;
  }, {} as MarathonSection);
  const controlOptions = [
    { id: "all", label: "All" },
    { id: "completed", label: "Completed" },
    { id: "upcoming", label: "Upcoming" },
  ];

  return (
    <div>
      <Controls
        options={controlOptions}
        activeId={activeControlId}
        onChange={(nextId) => dispatch(setMarathonsFilterId(nextId))}
      />
      <section className={gridStyles.grid}>
        {filteredMarathons.map((section) => (
          <MarathonSectionCard
            key={section.title}
            title={section.title}
            raceDate={section.raceDate}
            imageUrl={section.imageUrl}
            stats={section.stats}
            isPR={pr.title === section.title}
          />
        ))}
      </section>
    </div>
  );
}
