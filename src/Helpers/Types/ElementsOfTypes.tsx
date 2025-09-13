import type { Task, MenuItem, PriorityOption, TagsOption, AboutInfo } from "./Types";
import { CheckCircle2, BarChart3, Smartphone, Database } from "lucide-react";
import { SiChartdotjs, SiReactrouter, SiFirebase, SiTailwindcss, SiTypescript, SiReact } from "react-icons/si";



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
    dueDate: new Date("2023-09-01"),
    priority: "low",
    tags: "others",
    createdAt: new Date(),
  },
  {
    id: "3",
    title: "Advanced TypeScript course",
    description: "Enroll in and complete an online TypeScript course for future projects.",
    completed: false,
    dueDate: new Date("2023-10-15"),
    priority: "high",
    tags: "work",
    createdAt: new Date(),
  },
  {
    id: "4",
    title: "Deploy app to production",
    description: "Set up CI/CD and deploy TaskFlow to production server.",
    completed: false,
    dueDate: new Date("2022-12-01"),
    priority: "high",
    tags: "school",
    createdAt: new Date()
  },
  {
  id: "5",
  title: "Weekly groceries",
  description: "Buy weekly groceries including fruits, vegetables, and essentials.",
  completed: false,
  dueDate: new Date("2025-09-12"),
  priority: "medium",
  tags: "personal",
  createdAt: new Date(),
},
{
  id: "6",
  title: "Prepare project presentation",
  description: "Create slides and notes for the upcoming client presentation.",
  completed: false,
  dueDate: new Date("2025-09-25"),
  priority: "medium",
  tags: "work",
  createdAt: new Date(),
},
{
  id: "7",
  title: "Car service",
  description: "Schedule and complete annual car maintenance service.",
  completed: false,
  dueDate: new Date("2025-11-05"),
  priority: "low",
  tags: "personal",
  createdAt: new Date(),
},
{
  id: "8",
  title: "Study group session",
  description: "Organize and attend study group session for exam preparation.",
  completed: true,
  dueDate: new Date("2025-09-18"),
  priority: "low",
  tags: "school",
  createdAt: new Date(),
},
{
  id: "9",
  title: "Update portfolio website",
  description: "Add recent projects and improve the design of personal portfolio website.",
  completed: true,
  dueDate: new Date("2025-10-30"),
  priority: "high",
  tags: "work",
  createdAt: new Date(),
},
{
  id: "10",
  title: "Holiday gift shopping",
  description: "Buy gifts for family and friends ahead of the holiday season.",
  completed: true,
  dueDate: new Date("2025-12-15"),
  priority: "high",
  tags: "others",
  createdAt: new Date(),
}

];

export const menuItems: MenuItem[] = [
    { path: '/Home', label: 'Home' },
    { path: '/AddTask', label: 'Add Task' },
    { path: '/ModifyTasks', label: 'Modify Tasks' },
    { path: '/Analytics', label: 'Analytics' },
    { path: '/About', label: 'About' }
  ];


export const priorityOptions: PriorityOption[] = [
  { value: 'low', label: 'Low' },
  { value: 'medium', label: 'Medium' },
  { value: 'high', label: 'High' }
]

export const tagsOptions: TagsOption[] = [
  { value: 'school', label: 'School' },
  { value: 'work', label: 'Work' },
  { value: 'personal', label: 'Personal' },
  { value: 'others', label: 'Others' }
]


export const mainFeatures: AboutInfo[] = [
  {title: "Intuitive Task Management", description: "Easily add, edit, and organize your tasks with a user-friendly interface designed for efficiency.", icon: <CheckCircle2 size={60} className="icon"/> },
  {title: "Responsive Design", description: "Enjoy a seamless experience across all your devices, whether you're on a desktop, tablet, or smartphone.", icon: <Smartphone size={60} className="icon" /> },
  {title: "Analytics & Insights", description: "Track your productivity with built-in analytics that help you understand your task completion trends.", icon: <BarChart3 size={60} className="icon" /> },
  {title: "Real Functionalities", description: "Experience a real-word App with real persistence of data and features like priority and tagging.", icon: <Database size={60} className="icon" /> },
]

export const technologyStack: AboutInfo[] = [
  {title: "React", description: "A JavaScript library for building user interfaces.", icon: <SiReact size={60} className="icon" />},
  {title: "TypeScript", description: "A typed superset of JavaScript that compiles to plain JavaScript.", icon: <SiTypescript size={60} className="icon" />},
  {title: "Tailwind CSS", description: "A utility-first CSS framework for rapid UI development.", icon: <SiTailwindcss size={60} className="icon" />},
  {title: "FireBase", description: "A Google service for user authentication and identity management.", icon: <SiFirebase size={60} className="icon" />},
  {title: "React Router", description: "A collection of navigational components for React applications.", icon: <SiReactrouter size={60} className="icon" />},
  {title: "React-ChartJS-2", description: "A React wrapper for Chart.js, a popular charting library.", icon: <SiChartdotjs size={60} className="icon" />},
]