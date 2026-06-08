import { DropdownProps } from "@/types";
import { controlsStyles } from "@/styles";

export default function Dropdown({ id, label, options, value, onChange }: DropdownProps) {
  return (
    <div className={controlsStyles.sortContainer}>
      <label htmlFor={id} className={controlsStyles.sortLabel}>
        {label}
      </label>
      <select
        id={id}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className={controlsStyles.sortSelect}
      >
        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
