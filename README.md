# TaskFlow

A modern task management application built with React and TypeScript. TaskFlow combines clean UI design with comprehensive task organization features, offering both demo and authenticated user experiences.

## Description

TaskFlow is a full-featured task management system that allows users to create, organize, and track personal tasks. The application features a responsive design with dark/light theme support, comprehensive analytics with interactive charts, and Firebase authentication. Users can filter tasks by priority and category, view detailed analytics, and manage their workflow through an intuitive interface.

The project demonstrates modern React patterns including custom hooks, context providers, and component composition. It includes a demo mode with dummy data for showcasing features and a full authenticated experience with persistent data storage.

## Interesting Techniques

- **Custom Hook Patterns**: Implements specialized hooks like `useDebouncedSearch` for optimized search performance and `useTaskStats` for computed task statistics
- **Context API Architecture**: Uses multiple React contexts ([Context API](https://developer.mozilla.org/en-US/docs/Web/API/Context_API)) for state management across authentication, theming, and task data
- **CSS Custom Properties**: Leverages [CSS custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) for dynamic theming with variables like `--theme-color` and `--highlight-text-color`
- **Local Storage Integration**: Implements robust localStorage handling with error boundaries and fallback data loading
- **Responsive Design**: Uses [CSS Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout) and [Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout) for adaptive layouts
- **Modal Overlay Pattern**: Implements accessible modal dialogs with backdrop click handling and focus management
- **Reducer Pattern**: Uses `useReducer` for complex task state management with action-based updates
- **Intersection Observer**: Implements scroll-to-top functionality using visibility detection
- **Form Validation**: Integrates React Hook Form with custom validation patterns and error display

## Technologies and Libraries

- **[React](https://react.dev/)** (18+) with [TypeScript](https://www.typescriptlang.org/) for type safety
- **[React Router](https://reactrouter.com/)** for client-side routing and protected routes
- **[React Hook Form](https://react-hook-form.com/)** with **[React Select](https://react-select.com/)** for advanced form handling
- **[Chart.js](https://www.chartjs.org/)** with **[react-chartjs-2](https://react-chartjs-2.js.org/)** for interactive data visualization
- **[Firebase](https://firebase.google.com/)** for authentication and user management
- **[Framer Motion](https://www.framer.com/motion/)** for smooth animations and transitions
- **[React Pro Sidebar](https://github.com/azouaoui-med/react-pro-sidebar)** for responsive sidebar navigation
- **[React Icons](https://react-icons.github.io/react-icons/)** including Font Awesome and Lucide icons
- **[Tailwind CSS](https://tailwindcss.com/)** for utility-first styling
- **[Vite](https://vitejs.dev/)** for build tooling and development server

## Project Structure

```
# Struttura Progetto - Basata sulle Immagini Fornite

src/
├── Assets/
│   ├── Images/
│   │   └── TaskFlowFavIcon.ico
│
├── Components/
│   ├── Charts/
│   │   └── [Chart Components]
│   ├── [UI Components]
│
├── Contexts/
│   ├── auth.tsx
│   ├── tasks.tsx
│   └── theme.tsx
│
├── Helpers/
│   ├── Types/
│   │   └── [Type definitions]
│   └── Utils/
│       └── [Utility functions]
│
├── Hooks/
│   ├── useAuth.ts
│   ├── useDebounced.ts
│   ├── useIsMobile.ts
│   ├── useTasks.ts
│   ├── useTaskState.ts
│   └── useTheme.ts
│
├── Pages/
│   ├── About.tsx
│   ├── AddTask.tsx
│   ├── Analytics.tsx
│   ├── Arrival.tsx
│   ├── DashBoard.tsx
│   ├── Home.tsx
│   ├── Login.tsx
│   ├── ModifyTasks.tsx
│   ├── Register.tsx
│   └── ResetPassword.tsx
│
├── Styles/
│   ├── BaseStyles.css
│   └── Variables.css
│
├── App.tsx
├── firebase.ts
└── main.tsx

```

**Components/**: Houses all reusable UI components including specialized chart components in the `Charts/` subdirectory. Contains complex components like modals, forms, and navigation elements.

**Contexts/**: Contains React context providers for global state management including authentication, theming, and task data persistence.

**Helpers/**: Utility functions and type definitions. The `Types/` directory contains TypeScript interfaces and the `Utils/` directory houses helper functions for data processing and styling.

**Hooks/**: Custom React hooks for encapsulating reusable logic like debounced search, theme management, and responsive design detection.

**Pages/**: Top-level page components that correspond to different routes in the application, from authentication flows to main dashboard views.

The application uses a context-driven architecture where [src/Contexts/tasks.tsx](src/Contexts/tasks.tsx) manages the task state through a reducer pattern, while [src/Contexts/auth.tsx](src/Contexts/auth.tsx) handles Firebase authentication flows. The [src/Contexts/theme.tsx](src/Contexts/theme.tsx) provider manages dark/light mode switching with localStorage persistence.

Key components include [src/Components/NewTaskForm.tsx](src/Components/NewTaskForm.tsx) for task creation with comprehensive validation, and [src/Components/Charts/](src/Components/Charts/) directory containing multiple chart types for analytics visualization. The [src/Hooks/useTasks.ts](src/Hooks/useTasks.ts) and [src/Hooks/useAuth.ts](src/Hooks/useAuth.ts) custom hooks provide clean interfaces to their respective contexts.
