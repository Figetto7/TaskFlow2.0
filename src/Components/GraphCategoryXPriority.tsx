import ReactEcharts from "echarts-for-react";
import type { JSX } from "react";
import { useMemo } from "react";
import type { Task } from "../Helpers/Types/Types";
import { useTheme } from "../Hooks/useTheme";

export default function GraphCategoryXPriority({ tasks }: { tasks: Task[] }): JSX.Element {
  const { theme } = useTheme();
  const options = useMemo(() => {
    const schoolColor = getComputedStyle(document.documentElement).getPropertyValue('--school-color').trim();
    const workColor = getComputedStyle(document.documentElement).getPropertyValue('--work-color').trim();
    const personalColor = getComputedStyle(document.documentElement).getPropertyValue('--personal-color').trim();
    const othersColor = getComputedStyle(document.documentElement).getPropertyValue('--others-color').trim();

    return {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      legend: {
        data: ['School', 'Work', 'Personal', 'Others'],
        left: 'center',
        y: 'top',
        textStyle: {
          color: theme === 'dark' ? '#ffffff' : '#000000',
          fontSize: 15
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          data: ['High Priority', 'Medium Priority', 'Low Priority'],
          axisTick: {
            alignWithLabel: true
          },
          axisLabel: {
            color: theme === 'dark' ? '#ffffff' : '#000000',
            fontSize: 15
          }
        }
      ],
      yAxis: [
        {
          type: 'value',
          interval: 1, 
          minInterval: 1, 
          axisLabel: {
            color: theme === 'dark' ? '#ffffff' : '#000000',
            fontSize: 14
          }
        }
      ],
      series: [
        {
          name: 'School',
          type: 'bar',
          data: [
            tasks.filter(task => task.tags === 'school' && task.priority === 'high').length,
            tasks.filter(task => task.tags === 'school' && task.priority === 'medium').length,
            tasks.filter(task => task.tags === 'school' && task.priority === 'low').length
          ],
          itemStyle: {
            color: schoolColor
          }
        },
        {
          name: 'Work',
          type: 'bar',
          data: [
            tasks.filter(task => task.tags === 'work' && task.priority === 'high').length,
            tasks.filter(task => task.tags === 'work' && task.priority === 'medium').length,
            tasks.filter(task => task.tags === 'work' && task.priority === 'low').length
          ],
          itemStyle: {
            color: workColor
          }
        },
        {
          name: 'Personal',
          type: 'bar',
          data: [
            tasks.filter(task => task.tags === 'personal' && task.priority === 'high').length,
            tasks.filter(task => task.tags === 'personal' && task.priority === 'medium').length,
            tasks.filter(task => task.tags === 'personal' && task.priority === 'low').length
          ],
          itemStyle: {
            color: personalColor
          }
        },
        {
          name: 'Others',
          type: 'bar',
          data: [
            tasks.filter(task => task.tags === 'others' && task.priority === 'high').length,
            tasks.filter(task => task.tags === 'others' && task.priority === 'medium').length,
            tasks.filter(task => task.tags === 'others' && task.priority === 'low').length
          ],
          itemStyle: {
            color: othersColor
          }
        }
      ]
    };
  }, [tasks, theme]);

  return (
    <div className="ultraThinBorder p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Tasks by Category and Priority</h1>
      <ReactEcharts option={options} />
    </div>
  );
}