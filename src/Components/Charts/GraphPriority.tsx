import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from 'chart.js';
import { useTheme } from '../../Hooks/useTheme';
import { useMemo } from 'react';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

export default function GraphCategory({completed, pending, overdue}: {completed: number, pending: number, overdue: number}) {
  const { theme } = useTheme();
  const data = useMemo(() => {
        const HighColor = theme === 'dark' ? '#f87171' : '#b91c1c';
        const MediumColor = theme === 'dark' ? '#fbbf24' : '#d97706';
        const LowColor = theme === 'dark' ? '#34d399' : '#059669';
       return {
         labels: ['High', 'Medium', 'Low'],
        datasets: [{
          data: [completed, pending, overdue],
          backgroundColor: [HighColor, MediumColor, LowColor],
          borderWidth: 0,
        }]
       };
     }, [completed, pending, overdue, theme]);
  
const options = {
  plugins: {
    legend: {
      display: false,
    }
  },
  layout: {
    padding: 0
  },
  scales: {
    x: {
      ticks: {
        color: theme === 'dark' ? 'white' : 'black',
        font: { size: 14 }
      },
      grid: {
        drawTicks: false,
        drawBorder: false,
        display: false,
        borderColor: 'transparent'
      }
    },
    y: {
      beginAtZero: true,
      ticks: {
        color: theme === 'dark' ? 'white' : 'black',
        font: { size: 14 },
        callback: function (value: number | string) {
          if (Number.isInteger(value)) return value;
          return '';
        }
      },
      grid: {
        color: theme === 'dark' ? '#444' : '#ddd',
        lineWidth: 1,
        drawBorder: false,
        borderColor: 'transparent'
      }
    }
  }
};





  return (
    <div className='ultraThinBorder'>
      <h1 className='text-2xl font-semibold p-1 text-center'>Tasks by Priority</h1>
      <div className="h-80 p-1.5 items-center justify-center flex flex-col w-full ">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
}