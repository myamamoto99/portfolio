import { controlsStyles } from "@/styles";
import { ControlButtonProps } from "@/types";

export default function ControlButton({ option, isActive, onClick }: ControlButtonProps) {
  return (
    <button
      type="button"
      onClick={() => onClick(option.id)}
      aria-pressed={isActive}
      className={`${controlsStyles.buttonBase} ${
        isActive ? controlsStyles.buttonActive : controlsStyles.buttonInactive
      }`}
    >
      {option.icon && <span className={controlsStyles.icon}>{option.icon}</span>}
      <span>{option.label}</span>
    </button>
  );
}
