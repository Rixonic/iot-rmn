import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};


export interface DashboardCardProps {
  title: string;
  unit?: string;
  temperature?: number ;
  high?: number;
  low?: number;
  log: { date: string; message: string }[];
}


export interface DataProps {
  waterSide: {
      tempIn: {
          temp: number,
          max: number,
          min: number
      },
      tempOut: {
          temp: number,
          max: number,
          min: number
      },
      flow: {
          flow: number,
          min: number
      },
      pressureIn: {
          pressure: number,
          max: number,
          min: number
      },
      pressureOut: {
          pressure: number,
          max: number,
          min: number
      }
  },
  rack: {
      tempRoom: {
          temp: number,
          max: number,
          min: number
      }
  },
  chillers: [
      {
          name: string,
          pressureIn: {
              pressure: number,
              max: number,
              min: number
          },
          pressureOut: {
              pressure: number,
              max: number,
              min: number
          }
      }
  ]
}
