import { SVGProps } from "react";
import { ReactNode } from 'react';

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};


export interface DashboardCardProps {
  icon: ReactNode;
  title: string;
  temperature: number;
  high: number;
  low: number;
  log: { date: string; message: string }[];
}