import React from "react";
import { useReducer } from "react";
import tasksReducer from "../Helpers/Utils/TasksReducer";
import type { Task } from "../Helpers/Types/Types";
import type { ReactNode } from "react";
import type { TaskContextType } from "../Helpers/Types/Types";
import { DummyTasks } from "../Helpers/Types/ElementsOfTypes";

const TaskContext = React.createContext<TaskContextType | undefined>(undefined);
const TASKS_STORAGE_KEY = import.meta.env.VITE_TASKS_STORAGE_KEY || 'taskflow-tasks';

function loadTasksFromStorage({
  storage = localStorage,
  dummyTasks = DummyTasks, 
  key = TASKS_STORAGE_KEY,
} = {}) {
  try {
    const savedTasks = storage.getItem(key);
    
    if (!savedTasks) {

      return dummyTasks;
    }

    const parsed = JSON.parse(savedTasks);


    if (!Array.isArray(parsed)) {
      return dummyTasks;
    }

    // Converti le date da stringhe a oggetti Date
    const tasksWithDates = parsed.map(task => ({
      ...task,
      dueDate: new Date(task.dueDate),
      createdAt: new Date(task.createdAt)
    }));

    return tasksWithDates;
  } catch (error) {
    console.error('Errore nel caricamento task da localStorage:', error);
    return dummyTasks;
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
  
  
  React.useEffect(() => { 
    saveTasksToStorage(tasks) 
  }, [tasks]);

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