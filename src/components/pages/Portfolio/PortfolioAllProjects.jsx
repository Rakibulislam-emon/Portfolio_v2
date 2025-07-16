import React from 'react'
import { projects } from '../../Data/data'
import ProjectCard from './ProjectCard'

export default function PortfolioAllProjects() {
  return (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} variant="grid" />
            ))}
          </div>
  )
}
