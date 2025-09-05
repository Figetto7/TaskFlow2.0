import type { Task, Action } from "../Types/Types";

export default function TasksReducer(tasks: Task[], action: Action): Task[] {
  switch (action.type) {
    case 'addedTask':
      return [
        ...tasks,
        {
          id: action.task.id,
          title: action.task.title,
          description: action.task.description,
          completed: action.task.completed,
          dueDate: action.task.dueDate ?? null,
          priority: action.task.priority,
          tags: action.task.tags,
          createdAt: new Date(),
          subtasks: action.task.subtasks ?? [],
          attachments: action.task.attachments ?? [],
        }
      ];

    case 'updateTask':
      return tasks.map((task) =>
        task.id === action.task.id ? { ...task, ...action.task } : task
      );

    case 'deleteTask':
      return tasks.filter((task) => task.id !== action.id);

    case 'toggledTask':
      return tasks.map((task) =>
        task.id === action.id ? { ...task, completed: !task.completed } : task
      );

    default:
      throw new Error('Unknown action: ' + action.type);
  }
}
