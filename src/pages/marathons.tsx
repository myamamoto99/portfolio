import MarathonSectionCard from "@/components/marathonSectionCard";
import { marathonSections } from "@/data/marathons";
import { gridStyles } from "@/styles";

export default function MarathonsPage() {
  const pr = marathonSections.reduce((fastest, marathon) => {
    return marathon.stats.finishTime !== "TBD" &&
      marathon.stats.finishTime < fastest.stats.finishTime
      ? marathon
      : fastest;
  });
  return (
    <section className={gridStyles.grid}>
      {marathonSections.map((section) => (
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
  );
}
