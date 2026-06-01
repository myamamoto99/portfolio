import MarathonSectionCard from "@/components/MarathonSectionCard";
import { marathonSections } from "@/data/marathons";
import { marathonStyles } from "@/styles/marathons";

export default function MarathonsPage() {
  return (
    <section className={marathonStyles.grid}>
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
