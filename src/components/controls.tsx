import { controlsStyles } from "@/styles";
import { ControlsProps } from "@/types";
import ControlButton from "./controlButton";

export default function Controls({ options, activeId, onChange, className }: ControlsProps) {
  return (
    <div
      className={`${controlsStyles.wrap} ${className ?? ""}`.trim()}
      role="group"
      aria-label="Controls"
    >
      {options.map((option) => (
        <ControlButton
          key={option.id}
          option={option}
          isActive={option.id === activeId}
          onClick={onChange}
        />
      ))}
    </div>
  );
}
