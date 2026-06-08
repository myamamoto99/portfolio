import { controlsStyles } from "@/styles";
import { FilterButtonProps } from "@/types";

export default function FilterButton({ option, isActive, onClick }: FilterButtonProps) {
  return (
    <button
      type="button"
      onClick={() => onClick(option.id)}
      aria-pressed={isActive}
      className={`${controlsStyles.buttonBase} ${
        isActive ? controlsStyles.buttonActive : controlsStyles.buttonInactive
      }`}
    >
      <span>{option.label}</span>
    </button>
  );
}
