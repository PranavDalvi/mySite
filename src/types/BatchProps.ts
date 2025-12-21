import type { ComponentType } from "react";

export interface BatchProps {
    title: string;
    icon?: ComponentType<{ width?: number; height?: number }>;
    backgroundColor?: string;
    version?: string;
}
