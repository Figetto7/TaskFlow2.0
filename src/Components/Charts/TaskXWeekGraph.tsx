import {Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend,} from "chart.js";
import { Line } from "react-chartjs-2";
import getTaskTrend from "../../Helpers/Utils/getTaskTrend.ts";
import { useMemo } from "react";
import type { Task } from "../../Helpers/Types/Types";
import { useTheme } from "../../Hooks/useTheme";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function TaskXWeekGraph({tasks}: {tasks: Task[]}) {
  const { labels, created, completed } = useMemo(() => getTaskTrend(tasks), [tasks]);
  const { theme } = useTheme();
  const data = {
  labels: labels,
  datasets: [
    {
      label: 'Tasks Created',
      data: created,
      borderColor: theme === 'dark' ? '#a78bfa' : '#7c3aed',
      backgroundColor: theme === 'dark' ? '#a78bfa' : '#7c3aed',
      tension: 0.3
    },
    {
      label: 'Tasks Completed',
      data: completed,
      borderColor: theme === 'dark' ? '#34d399' : '#10b981',
      backgroundColor: theme === 'dark' ? '#34d399' : '#10b981',
      tension: 0.3
    }
  ]
};

 const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
      labels: {
        color: theme === 'dark' ? 'white' : 'black',
        font: {
          size: 15
        }
      }
    },
    title: { display: false }
  },
  scales: {
    x: {
      ticks: {
        color: theme === 'dark' ? '#E5E7EB' : '#374151',
        font: {
          size: 12
        }
      },
      grid: {
        color: theme === 'dark' ? '#475569' : '#E5E7EB',
        lineWidth: 1
      }
    },
    y: {
      ticks: {
        color: theme === 'dark' ? '#E5E7EB' : '#374151',
        font: {
          size: 12
        }
      },
      grid: {
        color: theme === 'dark' ? '#475569' : '#E5E7EB',
        lineWidth: 1
      }
    }
  }
};
  return (

      <div className='ultraThinBorder'>
        <h1 className='text-2xl font-semibold p-1 text-center'>Task Trend</h1>
        <div className="h-80 p-1.5 items-center justify-center flex flex-col w-full ">
          <Line data={data} options={options} />
        </div>
      </div>
  );
}
