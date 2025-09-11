import { useMemo } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { useTheme } from '../../Hooks/useTheme';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function PieChartNumberTasks({ completed, pending, overdue }: { completed: number, pending: number, overdue: number }) {
   const { theme } = useTheme();
   
   const data = useMemo(() => {
     const completedColor = theme === 'dark' ? '#34d399' : '#059669';
     const pendingColor = theme === 'dark' ? '#fbbf24' : '#d97706';
     const overdueColor = theme === 'dark' ? '#f87171' : '#b91c1c';
     const completedBorder = theme === 'dark' ? '#34d399' : '#059669';
     const pendingBorder = theme === 'dark' ? '#fbbf24' : '#d97706';
     const overdueBorder = theme === 'dark' ? '#f87171' : '#b91c1c';
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
   }, [completed, pending, overdue, theme]);

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