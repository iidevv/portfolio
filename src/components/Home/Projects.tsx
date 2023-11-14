"use client"

import React from 'react'
import { projectsData } from '@/lib/data';
import { Project } from './Project';
import ProjectModal from './ProjectModal';

export const Projects = () => {
  const [modalIsOpen, setModalOpen] = React.useState({
    id: 1,
    isOpen: false
  });

  return (
    <section id="projects" className="projects">
      <div className="site-container">
        <h2 className="section-title">Projects</h2>
        <div className="projects__items">
          {projectsData.map((project) => (
            <Project {...project} key={project.title} setModalOpen={setModalOpen} />
          ))}
        </div>
        <ProjectModal projectsData={projectsData}  modalIsOpen={modalIsOpen} setModalOpen={setModalOpen} />
      </div>
    </section>
  )
}