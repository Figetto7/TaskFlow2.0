import type { JSX } from "react";
import type { Task } from "../Helpers/Types/Types";
import { FaCalendar } from "react-icons/fa";
import getStylesTaskCard from "../Helpers/Utils/getStylesTaskCard";
import getStylesPriority from "../Helpers/Utils/getStylesPriority";

export default function TaskCard({ task }: { task: Task }): JSX.Element {
  const { titleColor, subtitleColor } = getStylesTaskCard(task.completed ? 'completed' : (task.dueDate < new Date() ? 'overdue' : 'pending'));
  const { priorityText } = getStylesPriority(task.priority);
  const expired = task.dueDate < new Date() && !task.completed;
  return (
    <div className="p-4 m-2 ultraThinBorder flex flex-col gap-2" style={{ backgroundColor: expired ? 'var(--overdue-bg)' : '' }}>
      <h2 className="text-lg font-semibold" style={{ color: titleColor }}>{task.title}</h2>
      <p style={{ color: subtitleColor }}>{task.description}</p>
      <p> <FaCalendar className="inline-block mr-1" color={subtitleColor} /> {task.dueDate.toLocaleDateString()}</p>
      <div className="flex flex-row justify-between md:justify-start md:gap-4">
        <p style={{ color: priorityText, backgroundColor: 'transparent' }} className="font-semibold">{task.priority}</p>
        <p>{task.tags}</p>
      </div>

    </div>
  );
}
