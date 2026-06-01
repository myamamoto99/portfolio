import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";

import { gameStyles } from "@/styles/games";
import { PuzzleGames } from "@/types/game";

const getDomainLabel = (href: string) => {
  try {
    return new URL(href).hostname.replace(/^www\./, "");
  } catch {
    return "preview unavailable";
  }
};

export default function PuzzleGameCard({
  href,
  title,
  hook,
  staticPreviewImage,
}: PuzzleGames) {
  const visualRef = useRef<HTMLDivElement | null>(null);
  const [previewLoaded, setPreviewLoaded] = useState(false);
  const [previewError, setPreviewError] = useState(false);
  const [shouldLoadPreview, setShouldLoadPreview] = useState(
    () => typeof window !== "undefined" && typeof IntersectionObserver === "undefined"
  );

  const hasStaticPreview = Boolean(staticPreviewImage);
  const isValidExternalUrl = /^https?:\/\//.test(href);
  const domainLabel = useMemo(() => getDomainLabel(href), [href]);
  const showFallback = !isValidExternalUrl || previewError;

  useEffect(() => {
    if (hasStaticPreview || !isValidExternalUrl || shouldLoadPreview) {
      return;
    }

    const target = visualRef.current;
    if (!target) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setShouldLoadPreview(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "120px 0px",
        threshold: 0.12,
      }
    );

    observer.observe(target);

    return () => {
      observer.disconnect();
    };
  }, [hasStaticPreview, isValidExternalUrl, shouldLoadPreview]);

  const canRenderIframe =
    !hasStaticPreview &&
    !showFallback &&
    isValidExternalUrl &&
    shouldLoadPreview;

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={gameStyles.card}
    >
      <div ref={visualRef} className={gameStyles.cardVisual}>
        {staticPreviewImage && (
          <Image
            src={staticPreviewImage}
            alt={`${title} preview`}
            className={gameStyles.cardPreviewImage}
            fill
            sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
          />
        )}

        {canRenderIframe && (
          <iframe
            src={href}
            title={`${title} preview`}
            loading="lazy"
            className={gameStyles.cardPreviewFrame}
            sandbox="allow-same-origin allow-scripts allow-forms"
            referrerPolicy="no-referrer"
            tabIndex={-1}
            aria-hidden="true"
            onLoad={() => setPreviewLoaded(true)}
            onError={() => setPreviewError(true)}
          />
        )}

        {canRenderIframe && !previewLoaded && (
          <div className={gameStyles.cardPreviewLoading} />
        )}

        {showFallback && !hasStaticPreview && (
          <div className={gameStyles.cardPreviewFallback}>
            <span className="text-xs font-medium">Open to preview</span>
          </div>
        )}

        <span className={gameStyles.cardPreviewDomain}>{domainLabel}</span>
      </div>

      <div className="flex items-start justify-between gap-3">
        <h3 className={gameStyles.cardTitle}>{title}</h3>
      </div>

      <p className={gameStyles.cardHook}>{hook}</p>
    </a>
  );
}
