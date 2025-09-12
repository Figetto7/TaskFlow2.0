import type { JSX } from "react"
import type { AboutInfo } from "../Helpers/Types/Types"


export default function AboutCard({info}:{info: AboutInfo}): JSX.Element {
  return (
    <div className="ultraThinBorder p-2">
      <div className="flex justify-center pb-5 pt-2">{info.icon}</div>
      <h2 className="text-xl text-center pb-3 font-semibold">{info.title}</h2>
      <p className="text-center">{info.description}</p>
    </div>

  )
}