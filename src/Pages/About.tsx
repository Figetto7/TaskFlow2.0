import type { JSX } from "react"
import ScrollTopButton from "../Components/ScrollTopButton"
import { mainFeatures, technologyStack } from "../Helpers/Types/ElementsOfTypes"
import AboutCard from "../Components/AboutCard"

export default function Analytics(): JSX.Element {
return (
    <div className="lg:ml-80 md:ml-75">
      <ScrollTopButton />
      <div className="md:text-center mt-8 md:mt-0">
      <h1 className="text-4xl font-semibold mb-3">TaskFlow</h1>
      <p className="lg:text-lg">Modern and minimalist application for the effective management of your personal tasks.</p>
      <h3 className="text-2xl font-semibold mb-3 text-center mt-2">Main Features</h3>
      <section className="grid lg:grid-cols-2 grid-cols-1 gap-4 p-4">
        {mainFeatures.map(feature => <AboutCard key={feature.title} info={feature} />)}
      </section>
      <h3 className="text-2xl font-semibold mb-3 text-center mt-2">Technologies Used</h3>
      <section className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 p-4">
        {technologyStack.map(tech => <AboutCard key={tech.title} info={tech} />)}
      </section>
      </div>
    </div>
  )
}