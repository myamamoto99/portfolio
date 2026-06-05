import { BakingCardProps } from "@/types";
import { resolveBasePathImage } from "@/utils/imagePath";
import Image from "next/image";
import { bakingStyles, gridStyles } from "@/styles";
import { useRouter } from "next/router";
import { FiMaximize } from "react-icons/fi";

export default function BakingCard({ title, imageUrl, onOpen }: BakingCardProps) {
  const { basePath } = useRouter();
  const resolvedImageUrl = resolveBasePathImage(basePath, imageUrl)!;

  return (
    <button
      type="button"
      className={bakingStyles.cardButton}
      onClick={onOpen}
      aria-label={`Open full-size image for ${title}`}
    >
      <Image
        src={resolvedImageUrl}
        alt={title}
        className={gridStyles.image}
        fill
        sizes="(min-width: 768px) 33vw, 100vw"
      />

      <div className={gridStyles.overlay} />

      <span className={bakingStyles.expandBadge} aria-hidden="true">
        <FiMaximize className="h-4 w-4" />
      </span>
    </button>
  );
}
