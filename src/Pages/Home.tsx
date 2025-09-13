import type { JSX } from "react"
import ScrollTopButton from "../Components/ScrollTopButton";
import { useTasks } from "../Hooks/useTasks";
import TaskCard from "../Components/TaskCard";
import { useState } from "react";
import TaskFilters from "../Components/TaskFilter";
import getFilteredTasks from "../Helpers/Utils/getFilteredTasks";
import type { Task } from "../Helpers/Types/Types";
import NoTasksFound from "../Components/NoTasksFound";

export default function Home(): JSX.Element {
  const { tasks } = useTasks();
  const [priorityFilter, setPriorityFilter] = useState('');
  const [tagFilter, setTagFilter] = useState('');
  const [searchFilter, setSearchFilter] = useState('');
  const filteredTasks = getFilteredTasks(tasks, priorityFilter, tagFilter, searchFilter);
  return (
    <div className="lg:ml-80 md:ml-75">
      <div className="md:text-center mt-8 md:mt-0">
      <h1 className="text-4xl font-semibold mb-3">Home</h1>
      <p className="md:text-lg">Welcome Back, let's manage your tasks</p>
      </div>
      <ScrollTopButton />
      <TaskFilters priorityFilter={priorityFilter} setPriorityFilter={setPriorityFilter} tagFilter={tagFilter} setTagFilter={setTagFilter} searchFilter={searchFilter} setSearchFilter={setSearchFilter} />
      {filteredTasks.length === 0 && <NoTasksFound />}
      <section className="grid grid-cols-1 lg:grid-cols-2  gap-4 mt-4">
        {filteredTasks.filter((task: Task) => task.dueDate && new Date(task.dueDate) < new Date() && !task.completed).map((task: Task) => ( <TaskCard key={task.id} taskId={task.id} isDashboard={false} /> ))}
        {filteredTasks.filter((task: Task) => !task.completed && task.priority === "high" && !(task.dueDate && new Date(task.dueDate) < new Date())).map((task: Task) => ( <TaskCard key={task.id} taskId={task.id} isDashboard={false} /> ))}
        {filteredTasks.filter((task: Task) => !task.completed && task.priority === "medium" && !(task.dueDate && new Date(task.dueDate) < new Date())).map((task: Task) => ( <TaskCard key={task.id} taskId={task.id} isDashboard={false} /> ))}
        {filteredTasks.filter((task: Task) => !task.completed && task.priority === "low" && !(task.dueDate && new Date(task.dueDate) < new Date())).map((task: Task) => ( <TaskCard key={task.id} taskId={task.id} isDashboard={false} /> ))}
        {filteredTasks.filter((task: Task) => task.completed ).map((task: Task) => ( <TaskCard key={task.id} taskId={task.id} isDashboard={false} /> ))}
      </section>
    </div>
  )
}