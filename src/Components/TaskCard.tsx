import type { JSX } from "react";
import type { Task } from "../Helpers/Types/Types";
import { FaCalendar } from "react-icons/fa";
import getStylesPriority from "../Helpers/Utils/getStylesPriority";
import getStylesCategory from "../Helpers/Utils/getStylesCategory";

export default function TaskCard({ task }: { task: Task }): JSX.Element {
  const { priorityText } = getStylesPriority(task.priority);
  const { tagColor, tagImage } = getStylesCategory(task.tags);
  const expired = task.dueDate < new Date() && !task.completed;
  return (
    <div className="p-4 m-2 ultraThinBorder flex flex-col gap-2" style={{ opacity: task.completed ? 0.5 : 1, textDecoration: task.completed ? 'line-through' : 'none' }}>
      {expired && !task.completed && <h1 className="w-full h-1 bg-overdue-color mb-10 rounded-full text-3xl pulse-text">Expired</h1>}
      <h2 className="text-2xl font-semibold">{task.title}</h2>
      <p className="text-lg">{task.description}</p>
      <p> <FaCalendar className="inline-block mr-1 mb-1" /> {task.dueDate.toLocaleDateString()}</p>
      <div className="flex flex-row justify-between md:justify-start md:gap-4">
        <p style={{ color: priorityText, backgroundColor: 'transparent' }} className="font-semibold border-2 p-1 rounded-lg text-lg">{task.priority}</p>
        <p style={{ color: tagColor }} className="flex items-center gap-1 border-2 p-1 rounded-lg font-semibold text-lg">{tagImage} {task.tags}</p>
      </div>

    </div>
  );
}
