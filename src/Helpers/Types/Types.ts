import type { User, UserCredential } from "firebase/auth";


export type AuthContextType = {
  user: User | null;
  loading: boolean;
  signInWithEmail: (email: string, password: string) => Promise<UserCredential>;
  signUpWithEmail: (email: string, password: string) => Promise<UserCredential>;
  resetPassword: (email: string) => Promise<void>;
  signInWithGoogle: () => Promise<UserCredential>;
  signOutUser: () => Promise<void>;
};

export type Theme = 'light' | 'dark';

export type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};


export type Task = {
  id: string,
  title: string,
  description: string,
  completed: boolean,
  dueDate: Date ,
  priority: 'low' | 'medium' | 'high' | "Choose a priority",
  tags: 'school' | 'work' | 'personal' | 'others' | 'Choose a category',
  createdAt: Date,
  completedAt?: Date,
}

export type Action = | { type: 'addedTask'; task: Task } | { type: 'deleteTask'; id: string } | { type: 'toggledTask'; id: string } | { type: 'updateTask'; task: Task } | { type: 'Error'; message: string };


export type TaskContextType =  {
  tasks: Task[];
  addTask: (newTask: Task) => void;
  updateTask: (updatedTask: Task) => void;
  deleteTask: (taskId: string) => void;
  toggleTaskCompletion: (taskId: string) => void;
}

export type MenuItem = {
  path: string;
  label: string;
}


export type PriorityOption = {
  value: "Choose a priority" | "low" | "medium" | "high";
  label: string;
}

export type TagsOption = {
  value: "Choose a category" | "school" | "work" | "personal" | "others";
  label: string;
}


export type FormData = {
  title: string;
  description: string;
  priority: 'low' | 'medium' | 'high' | "Choose a priority",
  tags: 'school' | 'work' | 'personal' | 'others' | 'Choose a category',
  dueDate: string;
}

export type AboutInfo = {
  title: string;
  description: string;
  icon: React.ReactNode;
}