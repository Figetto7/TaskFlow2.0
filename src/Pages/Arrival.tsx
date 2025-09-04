import type { JSX } from "react"
import { Link } from "react-router-dom"


export default function Arrival(): JSX.Element {
  return (
    <section className="flex flex-col items-center justify-center text-center gap-6 md:gap-11 mt-20 px-4">
      <h1 className="text-3xl md:text-6xl">Organize Your Work</h1>
      <span className="text-3xl gradientText md:text-5xl">Like Never Before</span>
      <p className="lg:text-3xl md:text-xl md:w-1/2">TaskFlow combines the power of AI with intuitive design to help you manage tasks, track progress, and collaborate seamlessly with your team.</p>
      <div className="flex flex-col gap-6 md:flex-row">
        <Link to="/login" className="text-2xl md:text-4xl rounded-lg p-3" style={{backgroundColor: "var(--highlight-text-color)", color: "var(--theme-color)"}}>Get Started</Link>
        <Link to="/fakeDashboard" className="text-2xl md:text-3xl gradientText border p-3 rounded-lg">Watch a Demo</Link>
      </div>
    </section>
  )
}