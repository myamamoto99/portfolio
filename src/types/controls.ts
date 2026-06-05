import type { ReactNode } from "react";

type ControlOption = {
  id: string;
  label: string;
  icon?: ReactNode;
};

export type ControlsState = {
  marathonsFilterId: string;
};

export type ControlsProps = {
  options: ControlOption[];
  activeId: string;
  onChange: (id: string) => void;
  className?: string;
};

export type ControlButtonProps = {
  option: ControlOption;
  isActive: boolean;
  onClick: (id: string) => void;
};
