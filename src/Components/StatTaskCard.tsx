import type { JSX } from "react";

export default function StatTaskCard({ title, value, color }: { title: string; value: number; color: string }): JSX.Element {
  return (
    <section className="p-4 m-1.5 ultraThinBorder">
      <div className="flex flex-row gap-4">
        <h2 className="text-lg font-semibold md:text-2xl" style={{ color : color}}>{title}</h2>
      </div>
      <p className="text-xl md:text-2xl font-bold">{value}</p>
    </section>
  )
}