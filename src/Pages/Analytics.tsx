import type { JSX } from "react"
import { useTasks } from "../Hooks/useTasks";
import StatTaskCard from "../Components/StatTaskCard";
import useTaskStats from "../Hooks/useTaskState";
import ScrollTopButton from "../Components/ScrollTopButton";
import PieChartNumberTasks from "../Components/Charts/PieChartNumberTasks";
import GraphCategory from "../Components/Charts/GraphPriority";
import  RadarGraphTag  from "../Components/Charts/RadarGrapghTag";
import  TaskXWeekGraph from "../Components/Charts/TaskXWeekGraph";

export default function Analytics(): JSX.Element {
  const { tasks } = useTasks();
  const total = tasks.length;
  const { completed, pending, overdue } = useTaskStats(tasks);
return (
    <div className="lg:ml-80 md:ml-75">
      <ScrollTopButton />
      <div className="md:text-center mt-8 md:mt-0">
      <h1 className="text-4xl font-semibold mb-3">Analytics</h1>
      <p className="md:text-lg">View and analyze your tasks here</p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 items-center align-middle md:w-11/12 md:m-auto md:mt-4 mt-6">
        <div><StatTaskCard key="total" title="Total" value={total} color="var(--total-color)" /></div>
        <div><StatTaskCard key="completed" title="Completed" value={completed} color="var(--completed-color)" /></div>
        <div><StatTaskCard key="pending" title="Pending" value={pending} color="var(--pending-color)" /></div>
        <div><StatTaskCard key="overdue" title="Overdue" value={overdue} color="var(--overdue-color)" /></div>
      </div>
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
       
      <GraphCategory completed={completed} pending={pending} overdue={overdue} />
      <RadarGraphTag tasks={tasks} />
      <TaskXWeekGraph tasks={tasks} />
      <PieChartNumberTasks completed={completed} pending={pending} overdue={overdue} />
      </section>
    </div>
  )
}