import { useMemo } from "react";
import { useTasks } from "./useTasks";
const useTaskStats = () => {
  const { tasks } = useTasks();
  
  return useMemo(() => ({
    total: tasks.length,
    completed: tasks.filter(t => t.completed).length,
    pending: tasks.filter(t => !t.completed).length,
    overdue: tasks.filter(t => t.dueDate && t.dueDate < new Date() && !t.completed).length,
  }), [tasks]);
};