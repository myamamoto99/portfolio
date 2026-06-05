import { uiStyles, bakingStyles } from "@/styles";
import { FiZoomIn, FiZoomOut } from "react-icons/fi";

export default function ZoomButton({ zoomType }: { zoomType: "in" | "out" }) {
  return (
    <button
      type="button"
      className={uiStyles.zoomButton}
      onClick={() => {
        const imageElement = document.querySelector(
          `.${bakingStyles.modalImage}`
        ) as HTMLImageElement;
        if (imageElement) {
          const currentScale = imageElement.style.transform
            ? parseFloat(imageElement.style.transform.replace(/scale\((.*)\)/, "$1"))
            : 1;
          const newScale =
            zoomType === "in" ? currentScale + 0.2 : Math.max(currentScale - 0.2, 0.5);
          imageElement.style.transform = `scale(${newScale})`;
        }
      }}
      aria-label={zoomType === "in" ? "Zoom in" : "Zoom out"}
    >
      {zoomType === "in" ? <FiZoomIn className="h-4 w-4" /> : <FiZoomOut className="h-4 w-4" />}
    </button>
  );
}
