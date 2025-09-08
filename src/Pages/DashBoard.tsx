import type { JSX } from "react"
import StatTaskCard from "../Components/StatTaskCard";
import { DummyTasks } from "../Helpers/Types/ElementsOfTypes";
import useTaskStats from "../Hooks/useTaskState";
import TaskCard from "../Components/TaskCard";
import PieChartNumberTasks from "../Components/PieChartNumberTasks";
import GraphCategoryXPriority from "../Components/GraphCategoryXPriority";
import ScrollTopButton from "../Components/ScrollTopButton";


export default function Dashboard(): JSX.Element {
  const { total, completed, pending, overdue } = useTaskStats(DummyTasks);

  return (
  <>
    <section>
      <ScrollTopButton />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center align-middle md:w-11/12 md:m-auto md:mt-4 mt-6">
        <div><StatTaskCard key="total" title="Total" value={total} color="var(--total-color)" /></div>
        <div><StatTaskCard key="completed" title="Completed" value={completed} color="var(--completed-color)" /></div>
        <div><StatTaskCard key="pending" title="Pending" value={pending} color="var(--pending-color)" /></div>
        <div><StatTaskCard key="overdue" title="Overdue" value={overdue} color="var(--overdue-color)" /></div>
      </div>
    </section>
    <section>
      <div className="m-4 p-4 md:w-11/12 md:m-auto mt-6">
        <h1 className="text-3xl font-bold text-center">Tasks Overview</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {DummyTasks.map(task => <TaskCard key={task.id} taskId={task.id} isDashboard={true} />)}
        </div>
      </div>
    </section>
    <section>
      <div className="m-4 p-4 md:w-11/12 md:m-auto mt-6">
        <h1 className="text-3xl font-bold text-center">Analytics Overview</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-2">
          <PieChartNumberTasks completed={completed} pending={pending} overdue={overdue} />
          <GraphCategoryXPriority tasks={DummyTasks} />
        </div>
      </div>
    </section> 
    <footer className="w-full ultraThinBorder !rounded-sm" style={{backgroundColor: "var(--footer-bg)"}}>
      <div className="flex flex-col text-center">
        <h1 className="text-4xl font-bold p-6">Task Flow</h1>
        <p className="p-1 text-lg">Knowledge & Task Manager</p>
        <div className="h-1 w-11/12 m-auto rounded-xl" style={{backgroundColor: "var(--ultra-thin-border-color)"}}></div>
        <p className="p-2 text-lg">© 2025 TaskFlow. All rights reserved.</p>
      </div>
    </footer>
  </>
  );
}
