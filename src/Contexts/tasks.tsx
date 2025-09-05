import React from "react";
import { useReducer } from "react";
import tasksReducer from "../Helpers/Utils/TasksReducer";
import { errorTask } from "../Helpers/Types/ElementsOfTypes";
import type { Task } from "../Helpers/Types/Types";
import type { ReactNode } from "react";
import type { TaskContextType } from "../Helpers/Types/Types";


const TaskContext = React.createContext<TaskContextType | undefined>(undefined);
const TASKS_STORAGE_KEY = import.meta.env.VITE_TASKS_STORAGE_KEY;

function loadTasksFromStorage({
  storage = localStorage,
  fallback = errorTask,
  key = TASKS_STORAGE_KEY,
} = {}) {
  try {
    const savedTasks = storage.getItem(key);
    if (!savedTasks) return fallback;

    const parsed = JSON.parse(savedTasks);

    if (!Array.isArray(parsed)) {
      console.warn('Formato non valido in localStorage, uso fallback.');
      return fallback;
    }

    return parsed;
  } catch (error) {
    console.error('Errore nel caricamento task da localStorage:', error);
    return fallback;
  }
}

function saveTasksToStorage(tasks: Task[], {
  storage = localStorage,
  key = TASKS_STORAGE_KEY,
} = {}) {
  try {
    const serialized = JSON.stringify(tasks);
    storage.setItem(key, serialized);
  } catch (error) {
    console.error('Errore nel salvataggio dei task su localStorage:', error);
  }
}

export const TaskProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [tasks, dispatch] = useReducer(tasksReducer, loadTasksFromStorage());
  React.useEffect(() => { saveTasksToStorage(tasks) }, [tasks])

  function addTask (newTask: Task) {
    dispatch({
      type: 'addedTask',
      task: {
        id: newTask.id,
        title: newTask.title,
        description: newTask.description,
        completed: false,
        dueDate: newTask.dueDate,
        priority: newTask.priority,
        tags: newTask.tags,
        createdAt: new Date(),
        subtasks: [],
        attachments: [],
      }
    });
  }

  function updateTask(updatedTask: Task) {
    dispatch({
      type: 'updateTask',
      task: updatedTask,
    });
  }

  function deleteTask(taskId: string) {
    dispatch({
      type: 'deleteTask',
      id: taskId
    });
  }

  function toggleTaskCompletion(taskId: string) {
    dispatch({
      type: 'toggledTask',
      id: taskId,
    });
  }

 return (
  <TaskContext.Provider value={{
    tasks,
    addTask,
    updateTask,
    deleteTask,
    toggleTaskCompletion
  }}>
    {children}
  </TaskContext.Provider>
 )
}

export default TaskContext;