import type { JSX } from "react"
import ScrollTopButton from "../Components/ScrollTopButton";
import { useTasks } from "../Hooks/useTasks";
import TaskCard from "../Components/TaskCard";

export default function Home(): JSX.Element {
  const { tasks } = useTasks();
  return (
    <div className="lg:ml-80 md:ml-75">
      <div className="md:text-center mt-8 md:mt-0">
      <h1 className="text-4xl font-semibold mb-3">Home</h1>
      <p className="md:text-lg">Welcome Back, let's manage your tasks</p>
      </div>
      <ScrollTopButton />
      <section className="grid grid-cols-1 lg:grid-cols-2  gap-4 mt-4">
        {tasks.map((task) => (
          <TaskCard key={task.id} taskId={task.id} isDashboard={false} />
        ))}
      </section>
    </div>
  )
}