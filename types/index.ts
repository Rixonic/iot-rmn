import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};


export interface DashboardCardProps {
  title: string;
  temperature: number;
  high: number;
  low: number;
  log: { date: string; message: string }[];
}