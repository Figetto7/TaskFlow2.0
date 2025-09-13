import type { JSX } from "react";
import { useState } from "react";
import { FaCalendar } from "react-icons/fa";
import getStylesPriority from "../Helpers/Utils/getStylesPriority";
import getStylesCategory from "../Helpers/Utils/getStylesCategory";
import { useTasks } from "../Hooks/useTasks";
import ModifyTaskModal from "./ModifyTaskModal";


export default function TaskCard({ taskId }: { taskId: string }): JSX.Element {
  const { tasks } = useTasks();
  const [showModifyTaskModal, setShowModifyTaskModal] = useState(false);
  const currentTask = tasks.find(task => task.id === taskId);
  
  if (!currentTask) return <div>Task not found</div>;
  
  const { priorityText } = getStylesPriority(currentTask.priority);
  const { tagColor, tagImage } = getStylesCategory(currentTask.tags);
  const expired = currentTask.dueDate < new Date() && !currentTask.completed;
  const classToApply = expired ? "redBorder" : "ultraThinBorder";

  const handleTaskClick = () => { setShowModifyTaskModal(true); };

  return (
    <>
      <div onClick={handleTaskClick} className={`p-4 m-2 ${classToApply} flex flex-row gap-2`} style={{ opacity: currentTask.completed ? 0.5 : 1, backgroundColor: expired ? 'var(--expired-color)' : ""}}>
        <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-semibold" style={{ textDecoration: currentTask.completed ? 'line-through' : 'none' }}> {currentTask.title} </h2>
        <p className="text-lg" style={{ textDecoration: currentTask.completed ? 'line-through' : 'none' }}> {currentTask.description} </p>
        <p> <FaCalendar className="inline-block mr-1 mb-1" /> {currentTask.dueDate.toLocaleDateString()}</p>
        <div className="flex flex-row justify-between md:justify-start md:gap-4">
          <p style={{ color: priorityText, backgroundColor: 'transparent' }} className="font-semibold border-2 p-1 rounded-lg text-lg"> {currentTask.priority} </p>
          <p style={{ color: tagColor }} className="flex items-center gap-1 border-2 p-1 rounded-lg font-semibold text-lg"> {tagImage} {currentTask.tags} </p>
        </div>
      </div>
      </div>
      <ModifyTaskModal isOpen={showModifyTaskModal} onClose={() => setShowModifyTaskModal(false)} task={currentTask} />
    </>
  );
}