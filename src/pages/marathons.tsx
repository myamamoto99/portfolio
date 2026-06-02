import MarathonSectionCard from "@/components/MarathonSectionCard";
import { marathonSections } from "@/data/marathons";
import { gridStyles } from "@/styles";

export default function MarathonsPage() {
  return (
    <section className={gridStyles.grid}>
      {marathonSections.map((section) => (
        <MarathonSectionCard
          key={section.title}
          title={section.title}
          raceDate={section.raceDate}
          imageUrl={section.imageUrl}
          stats={section.stats}
        />
      ))}
    </section>
  );
}
