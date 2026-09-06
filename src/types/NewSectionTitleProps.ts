import type { ComponentType } from "react";

export interface NewSectionTitleProps {
  icon: ComponentType<{ width?: number; height?: number; size?: number; className?: string }>;
  title: string;
  className?: string;
}
