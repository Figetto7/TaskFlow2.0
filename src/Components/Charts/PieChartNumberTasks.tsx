import { useMemo } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { useTheme } from '../../Hooks/useTheme';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function PieChartNumberTasks({ completed, pending, overdue }: { completed: number, pending: number, overdue: number }) {
   const { theme } = useTheme();
   
   const data = useMemo(() => {
     const completedColor = getComputedStyle(document.documentElement).getPropertyValue('--completed-color').trim();
     const pendingColor = getComputedStyle(document.documentElement).getPropertyValue('--pending-color').trim();
     const overdueColor = getComputedStyle(document.documentElement).getPropertyValue('--overdue-color').trim();
     const completedBorder = getComputedStyle(document.documentElement).getPropertyValue('--chart-completed-border').trim();
     const pendingBorder = getComputedStyle(document.documentElement).getPropertyValue('--chart-pending-border').trim();
     const overdueBorder = getComputedStyle(document.documentElement).getPropertyValue('--chart-overdue-border').trim();
     const CompletedNumber = `${completed} Completed`;
     const PendingNumber = `${pending} Pending`;
     const OverdueNumber = `${overdue} Overdue`;
     return {
       labels: [CompletedNumber, PendingNumber, OverdueNumber],
       datasets: [{
         data: [completed, pending, overdue],
         backgroundColor: [completedColor, pendingColor, overdueColor],
         borderColor: [completedBorder, pendingBorder, overdueBorder],
       }]
     };
   }, [completed, pending, overdue]);

const options = {
  plugins: {
    legend: {
      display: true,
      position: 'top' as const,
      align: 'center' as const,
      labels: {
        color: theme === 'dark' ? 'white' : 'black',
        font: {
          size: 19 
        },
        usePointStyle: false, 
        boxWidth: 15,
        boxHeight: 15,
        padding: 15,
        textAlign: 'left' as const,
      },
      rtl: false,
      textDirection: 'ltr' as const,
    }
  },
  layout: {
    padding: 10
  },
  maintainAspectRatio: false,
  responsive: true,
};
  
   return (
    <div className='ultraThinBorder'>
      <h1 className='text-2xl font-semibold p-1 text-center'>Tasks by Status</h1>
      <div className="h-80 p-1.5 items-center justify-center flex flex-col w-full ">
        <Doughnut data={data} options={options} />
       </div>
     </div>
   )
}