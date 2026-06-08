type ControlOption = {
  id: string;
  label: string;
};

export type ControlsState = {
  marathonsFilterId: string;
  marathonsSortId: string;
};

export type DropdownProps = {
  id: string;
  label: string;
  options: ControlOption[];
  value: string;
  onChange: (value: string) => void;
  containerClassName?: string;
  labelClassName?: string;
  selectClassName?: string;
};

export type ControlsProps = {
  filterOptions: ControlOption[];
  sortOptions: ControlOption[];
  onFilterChange: (id: string) => void;
  onSortChange: (id: string) => void;
  className?: string;
};

export type FilterButtonProps = {
  option: ControlOption;
  isActive: boolean;
  onClick: (id: string) => void;
};
