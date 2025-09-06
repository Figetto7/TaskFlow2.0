import type { Task } from "./Types";

export const errorTask: Task[] = [
  {
    id: "1",
    title: "Errore",
    description: "Errore nel Caricare le Task",
    completed: false,
    dueDate: new Date(),
    priority: "high",
    tags: "work",
    createdAt: new Date()
  }
];



export const DummyTasks: Task[] = [
  {
    id: "1",
    title: "Dental check-up",
    description: "Book and attend routine dental check-up.",
    completed: false,
    dueDate: new Date("2025-08-20"),
    priority: "medium",
    tags: "personal",
    createdAt: new Date(),
  },
  {
    id: "2",
    title: "Summer vacation 2025",
    description: "Plan and book vacation for August 2025.",
    completed: false,
    dueDate: new Date("2028-09-01"),
    priority: "low",
    tags: "others",
    createdAt: new Date(),
  },
  {
    id: "3",
    title: "Advanced TypeScript course",
    description: "Enroll in and complete an online TypeScript course for future projects.",
    completed: true,
    dueDate: new Date("2025-10-15"),
    priority: "medium",
    tags: "work",
    createdAt: new Date(),
  },
  {
    id: "4",
    title: "Deploy app to production",
    description: "Set up CI/CD and deploy TaskFlow to production server.",
    completed: true,
    dueDate: new Date("2025-12-01"),
    priority: "high",
    tags: "school",
    createdAt: new Date()
  }
];
