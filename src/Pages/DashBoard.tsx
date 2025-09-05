import type { JSX } from "react"
import StatTaskCard from "../Components/StatTaskCard";
import { DummyTasks } from "../Helpers/Types/ElementsOfTypes";
import useTaskStats from "../Hooks/useTaskState";


export default function Dashboard(): JSX.Element {
  const { total, completed, pending, overdue } = useTaskStats(DummyTasks);

  return (
    <section>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center align-middle md:w-11/12 md:m-auto md:mt-4">
        <div><StatTaskCard key="total" title="Total" value={total} color="var(--total-color)" /></div>
        <div><StatTaskCard key="completed" title="Completed" value={completed} color="var(--completed-color)" /></div>
        <div><StatTaskCard key="pending" title="Pending" value={pending} color="var(--pending-color)" /></div>
        <div><StatTaskCard key="overdue" title="Overdue" value={overdue} color="var(--overdue-color)" /></div>
      </div>
    </section>
  );
}
