import { controlsStyles } from "@/styles";
import { ControlsProps } from "@/types";
import FilterButton from "./filterButton";
import Dropdown from "./dropdown";
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";

export default function Controls({
  filterOptions,
  sortOptions,
  onFilterChange,
  onSortChange,
}: ControlsProps) {
  const activeFilterId = useSelector((state: RootState) => state.controls.marathonsFilterId);
  const activeSortId = useSelector((state: RootState) => state.controls.marathonsSortId);
  return (
    <div className={controlsStyles.container}>
      <div className={controlsStyles.wrap} role="group" aria-label="Controls">
        {filterOptions.map((option) => (
          <FilterButton
            key={option.id}
            option={option}
            isActive={option.id === activeFilterId}
            onClick={onFilterChange}
          />
        ))}
      </div>
      <Dropdown
        id="marathon-sort"
        label="Sort By"
        options={sortOptions}
        value={activeSortId}
        onChange={onSortChange}
      />
    </div>
  );
}
