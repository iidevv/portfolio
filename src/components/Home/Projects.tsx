import React from 'react'
import { projectsData } from '@/lib/data';
import { Project } from './Project';

export const Projects = () => {
  
  return (
    <section id="projects" className="projects">
      <div className="site-container">
        <h2 className="section-title">Projects</h2>
        <div className="projects__items">
          {projectsData.map((project) => (
            <Project {...project} key={project.title} />
          ))}
        </div>
      </div>
    </section>
  )
}