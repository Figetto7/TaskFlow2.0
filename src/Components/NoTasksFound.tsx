import type { JSX } from "react"
import { TbSearchOff } from "react-icons/tb";

export default function NoTasksFound(): JSX.Element {
  return (
    <div className="text-center pt-5 text-lg flex flex-col items-center justify-center gap-6 mt-8">
      <TbSearchOff className="inline-block mr-2" size={60} />
      <p className="text-xl md:text-3xl">No tasks found with these filters.</p>
    </div>
  )
}