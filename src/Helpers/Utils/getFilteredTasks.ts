import type { Task } from "../Types/Types";

export default function getFilteredTasks(tasks: Task[], priorityFilter: string, tagFilter: string, searchFilter: string): Task[] {
  if(undefined === tasks || null === tasks) {
    return [];
  }
  return tasks.filter(task => {
    const matchesPriority = !priorityFilter || task.priority.toLowerCase() === priorityFilter.toLowerCase();
    const matchesTags = tagFilter === '' || task.tags.toLowerCase() === tagFilter.toLowerCase();
    const matchesSearch = !searchFilter || task.title.toLowerCase().includes(searchFilter.toLowerCase());

    return matchesPriority && matchesTags && matchesSearch;
  });
}