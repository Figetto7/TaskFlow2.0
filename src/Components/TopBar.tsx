import type { JSX } from "react"
import { useTheme } from "../Hooks/useTheme"
import { ThemeToggle } from "./toggleTheme";
import { Link } from "react-router-dom";

export default function TopBar(): JSX.Element {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className="flex flex-row w-11/12 m-auto mt-3 justify-between ultraThinBorder">
      <div className="flex flex-row items-center gap-2 p-4"> 
        <img src="src/Assets/Images/TaskFlowFavIcon.png" alt="TaskFlow Logo" className="logo"  />
        <Link to="/arrival" className="text-3xl font-semibold">TaskFlow</Link>
      </div>
      <div className="flex flex-row items-center gap-2 p-4">
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      </div>
    </div>
  )
}
