import Image from "next/image";
import { useRouter } from "next/router";

import { marathonStyles } from "@/styles/marathons";
import { MarathonSectionCardProps, MarathonStatLabels } from "@/types/marathon";

export default function MarathonSectionCard({
  title,
  raceDate,
  imageUrl,
  stats,
}: MarathonSectionCardProps) {
  const { basePath } = useRouter();
  const resolvedImageUrl = imageUrl.startsWith("/") && !imageUrl.startsWith(`${basePath}/`)
    ? `${basePath}${imageUrl}`
    : imageUrl;

  return (
    <article
      tabIndex={0}
      className={marathonStyles.sectionContainer}
    >
      <Image
        src={resolvedImageUrl}
        alt={title}
        className={marathonStyles.image}
        fill
        sizes="(min-width: 768px) 50vw, 100vw"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/58 via-slate-950/18 to-transparent" />

      <div className="absolute inset-x-0 bottom-0 z-10 p-4 text-white transition-opacity duration-300 group-hover:opacity-0 group-focus-within:opacity-0">
        <h3 className="text-base font-semibold leading-tight md:text-lg">{title}</h3>
        <p className="mt-1 text-xs text-slate-100/90 md:text-sm">{raceDate}</p>
      </div>

      <div className="absolute inset-x-0 bottom-0 z-20 translate-y-full border-t border-white/20 bg-slate-950/84 p-4 text-white backdrop-blur-sm transition-transform duration-300 group-hover:translate-y-0 group-focus-within:translate-y-0">
        <h4 className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-200">Race Stats</h4>
        <dl className="mt-2 grid grid-cols-2 gap-x-4 gap-y-1.5 text-xs md:text-sm">
            {(Object.entries(stats) as [keyof typeof MarathonStatLabels, string][]).map(([statName, statData]) => {
                return (
                    <>
                    <dt className={marathonStyles.statName}>{MarathonStatLabels[statName]}</dt>
                    <dd className={marathonStyles.statData}>{statData}</dd>
                    </>
                )
            })}
        </dl>
      </div>
    </article>
  );
}