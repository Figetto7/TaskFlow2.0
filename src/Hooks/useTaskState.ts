import { useMemo } from "react";
import type { Task } from "../Helpers/Types/Types";

export default function useTaskStats(tasks: Task[]): { total: number; completed: number; pending: number; overdue: number; } {
  return useMemo(() => ({
    total: tasks.length,
    completed: tasks.filter(t => t.completed).length,
    pending: tasks.filter(t => !t.completed).length,
    overdue: tasks.filter(t => t.dueDate && t.dueDate < new Date() && !t.completed).length,
  }), [tasks]);
};