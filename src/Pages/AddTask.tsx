import type { JSX } from "react"
import NewTaskForm from "../Components/NewTaskForm"

export default function AddTask(): JSX.Element {
return (
    <div className="lg:ml-80 md:ml-75">
      <div className="md:text-center mt-8 md:mt-0">
      <h1 className="text-4xl font-semibold mb-3">Add Task</h1>
      </div>
      <section>
        <NewTaskForm />
      </section>
    </div>
  )
}