import { useTheme } from "../Hooks/useTheme";
import ReactEcharts from "echarts-for-react";
import type { JSX } from "react";
import { useMemo } from "react";

interface PieChartProps {
  completed: number;
  pending: number;
  overdue: number;
}

export default function PieChartNumberTasks({ completed, pending, overdue }: PieChartProps): JSX.Element {
  const { theme } = useTheme();
  const colors = useMemo(() => ({
    completed: getComputedStyle(document.documentElement).getPropertyValue('--chart-completed').trim(),
    pending: getComputedStyle(document.documentElement).getPropertyValue('--chart-pending').trim(),
    overdue: getComputedStyle(document.documentElement).getPropertyValue('--chart-overdue').trim(),
    textColor: theme === 'dark' ? '#ffffff' : '#000000'
  }), [theme]);

  const chartData = useMemo(() => [
    { value: completed, name: 'Completed', itemStyle: { color: colors.completed } },
    { value: pending, name: 'Pending', itemStyle: { color: colors.pending } },
    { value: overdue, name: 'Overdue', itemStyle: { color: colors.overdue } }
  ], [completed, pending, overdue, colors]);

  const options = useMemo(() => ({
    legend: {
      orient: 'horizontal',
      y: 'top',
      x: 'center',
      data: ['Completed', 'Pending', 'Overdue'],
      textStyle: {
        color: colors.textColor,
        fontSize: 14
      }
    },
    tooltip: {
      trigger: 'item',
      formatter: '{b}: {c} ({d}%)'
    },
    color: [colors.completed, colors.pending, colors.overdue],
    series: [
      {
        type: 'pie',
        radius: ['30%', '60%'],
        avoidLabelOverlap: false,
        label: {
          show: true,
          position: 'outside',
          formatter: '{b}',
          fontSize: 14,
          color: colors.textColor
        },
        labelLine: {
          show: true,
          length: 15,
          length2: 10,
          lineStyle: {
            color: colors.textColor,
            width: 1
          }
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 15,
            fontWeight: 'bold',
            color: colors.textColor
          },
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        },
        data: chartData
      }
    ]
  }), [chartData, colors]);

  return (
    <div className="ultraThinBorder p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Tasks Overview</h1>
      <ReactEcharts option={options} />
    </div>
  );
}