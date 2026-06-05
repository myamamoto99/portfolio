import { bakingStyles } from "@/styles";
import { BakingImageProps } from "@/types";
import ZoomButton from "@/components/zoomButton";
import Image from "next/image";
import { FiX } from "react-icons/fi";

export default function BakingImage({ title, date, imageUrl, onClose }: BakingImageProps) {
  return (
    <div
      className={bakingStyles.modalBackdrop}
      role="dialog"
      aria-modal="true"
      aria-label={`${title} image preview`}
      onClick={onClose}
    >
      <div className={bakingStyles.modalFrame} onClick={(event) => event.stopPropagation()}>
        <div className={bakingStyles.modalImageWrap}>
          <Image
            src={imageUrl}
            alt={title}
            className={bakingStyles.modalImage}
            fill
            sizes="100vw"
            priority
          />

          <button
            type="button"
            className={bakingStyles.modalClose}
            onClick={onClose}
            aria-label="Close image preview"
          >
            <FiX className="h-5 w-5" />
          </button>

          <div className={bakingStyles.modalMeta}>
            <h3 className={bakingStyles.modalTitle}>{title}</h3>
            <p className={bakingStyles.modalDate}>{date}</p>
          </div>
          <div className={bakingStyles.modalZoomControls}>
            <ZoomButton zoomType="in" />
            <ZoomButton zoomType="out" />
          </div>
        </div>
      </div>
    </div>
  );
}
