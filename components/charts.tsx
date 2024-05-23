import React from 'react';
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

interface DoubleLineChartProps {
  series: {
    name: string;
    data: number[];
  }[];
  categories: string[];
}

export const DoubleLineChart: React.FC<DoubleLineChartProps> = ({ series, categories }) => {
  const options: ApexOptions = {
    chart: {
      type: 'line', // Especifica explícitamente el tipo como 'line'
    },
    xaxis: {
      categories,
    },
    stroke: {
      curve: 'smooth',
    },
    title: {
      text: 'Temperatura de Entrada y Salida',
      align: 'left',
    },
  };

  return <Chart options={options} series={series} type="line" height={350} />;
};
