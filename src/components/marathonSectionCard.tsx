import Image from "next/image";
import { useRouter } from "next/router";
import { marathonStyles, gridStyles } from "@/styles";
import { MarathonSectionCardProps, MarathonStatLabels } from "@/types/marathon";
import { resolveBasePathImage } from "@/utils/imagePath";
import Badge from "./badge";

export default function MarathonSectionCard({
  title,
  raceDate,
  imageUrl,
  stats,
  isPR,
}: MarathonSectionCardProps) {
  const { basePath } = useRouter();
  const resolvedImageUrl = resolveBasePathImage(basePath, imageUrl)!;
  const isUpcoming = new Date(raceDate) > new Date();

  return (
    <article tabIndex={0} className={gridStyles.sectionContainer}>
      <Image
        src={resolvedImageUrl}
        alt={title}
        className={gridStyles.image}
        fill
        sizes="(min-width: 768px) 50vw, 100vw"
      />

      <div className={gridStyles.overlay} />

      {(isUpcoming || isPR) && (
        <div className={marathonStyles.badgeRow}>
          {isUpcoming && <Badge text="Upcoming" color="bg-orange-500/85 text-white" />}
          {isPR && <Badge text="PR" color="bg-green-500/85 text-white" />}
        </div>
      )}

      <div className={gridStyles.bottomInfo}>
        <h3 className={gridStyles.title}>{title}</h3>
        <p className={gridStyles.date}>{raceDate}</p>
      </div>

      <div className={marathonStyles.statsPanel}>
        <h4 className={marathonStyles.statsTitle}>Race Stats</h4>
        <dl className={marathonStyles.statsGrid}>
          {(Object.entries(stats) as [keyof typeof MarathonStatLabels, string][]).map(
            ([statName, statData]) => {
              return (
                <div key={statName} className="contents">
                  <dt className={marathonStyles.statName}>{MarathonStatLabels[statName]}</dt>
                  <dd className={marathonStyles.statData}>{statData}</dd>
                </div>
              );
            }
          )}
        </dl>
      </div>
    </article>
  );
}
