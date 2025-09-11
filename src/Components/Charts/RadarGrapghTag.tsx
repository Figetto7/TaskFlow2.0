import { useMemo } from 'react';
import {Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend,} from 'chart.js';
import { Radar } from 'react-chartjs-2';
import type { Task } from '../../Helpers/Types/Types';
import { useTheme } from '../../Hooks/useTheme';

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

export default function RadarGraphTag({tasks}: {tasks: Task[]}) {
    const { theme } = useTheme();
    const data = useMemo(() => {
    const radarBackground = theme === 'dark' ? 'rgba(147, 197, 253, 0.7)' : 'rgba(59, 130, 246, 0.5)';
    const radarBorder = theme === 'dark' ? '#9099a3' : '#0f172a';
    const workTask = tasks.filter(task => task.tags === 'work');
    const schoolTask = tasks.filter(task => task.tags === 'school');
    const personalTask = tasks.filter(task => task.tags === 'personal');
    const othersTask = tasks.filter(task => task.tags === 'others');
    return {
       labels: ["","Work", "School", "Personal", "Others"],
       datasets: [{
         data: [0, workTask.length, schoolTask.length, personalTask.length, othersTask.length],
         backgroundColor: [radarBackground],
         borderColor: [radarBorder],
       }]
     };
   }, [tasks, theme]);

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false
    }
  },
  scales: {
    r: {
      beginAtZero: true,
      ticks: {
        stepSize: 1,
        color: theme === 'dark' ? '#E5E7EB' : '#374151',
        font: {
          size: 15,
          weight: 'normal' as const
        },
        backdropColor: theme === 'dark' ? 'rgba(15, 23, 42, 0.9)' : 'rgba(255, 255, 255, 0.9)',
        backdropPadding: 6,
        showLabelBackdrop: true
      },
      grid: {
        color: theme === 'dark' ? '#475569' : '#d1d5db',
      },
      pointLabels: {
        color: theme === 'dark' ? 'white' : 'black',
        font: {
          size: 20,
        }
      }
    }
  }
}


  return (
    <div className='ultraThinBorder'>
      <h1 className='text-2xl font-semibold p-1 text-center'>Tasks by Tag</h1>
      <div className="h-96 items-center justify-center flex flex-col w-full">
        <Radar data={data} options={options} />
      </div>
    </div>
  )
}
