import type { Task } from "../Types/Types";

export default function getTaskTrend(tasks: Task[]) {
  const formatDate = (date: Date | string) => new Date(date).toISOString().split("T")[0];
  const counts: Record<string, { created: number; completed: number }> = {};

  tasks.forEach(task => {
    const createdDay = formatDate(task.createdAt);
    const dayEntry = counts[createdDay] ??= { created: 0, completed: 0 };
    dayEntry.created++;
    if (task.completed && task.completedAt) {
      const completedDay = formatDate(task.completedAt);
      const completedEntry = counts[completedDay] ??= { created: 0, completed: 0 };
      completedEntry.completed++;
    }
  });

  const sorted = Object.entries(counts).sort(([a], [b]) => a.localeCompare(b));

  return {
    labels: sorted.map(([date]) => date),
    created: sorted.map(([, v]) => v.created),
    completed: sorted.map(([, v]) => v.completed),
  };
}
