"use client"

import React, { useState } from 'react'
import Modal from 'react-modal';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { ProjectI } from '@/lib/data';
import Image from 'next/image';

type modalTypes = {
    projectsData: ProjectI[],
    modalIsOpen: {
        id: number,
        isOpen: boolean
    },
    setModalOpen: React.Dispatch<React.SetStateAction<{
        id: number,
        isOpen: boolean
    }>>
}

const ProjectModal = ({ projectsData, modalIsOpen, setModalOpen }: modalTypes) => {
    const project = projectsData.find(project => project.id === modalIsOpen.id);

    const {
        id,
        title,
        description,
        tags,
        category,
        thumbnail,
        images,
        project_link,
        github_link,
    } = project ?? {};

    return (
        <Modal
            isOpen={modalIsOpen.isOpen}
            ariaHideApp={false}
            onRequestClose={() => setModalOpen({
                id: 0,
                isOpen: false
            })}
            className="modal"
            overlayClassName="modal-overlay"
            bodyOpenClassName="body-fixed"
            contentLabel="Project"
            shouldCloseOnOverlayClick={true}
        >
            <div className="modal__header">
                <h3 className="modal__title">{title}</h3>
                <button aria-label="Close the dialog" className="modal__close" onClick={() => setModalOpen({
                    id: 0,
                    isOpen: false
                })}>
                    <XMarkIcon />
                </button>
            </div>
            <div className="modal__inner">
                <strong className="modal__subtitle">Project description</strong>
                <p className="modal__description">{description}</p>
                <strong className="modal__subtitle">Skills and deliverables</strong>
                <ul className="modal__tags">
                    {tags && tags.map((tag, i) => (
                        <li key={i}>{tag}</li>
                    ))}
                </ul>
                <strong className="modal__subtitle">Gallery</strong>
                <div className="modal__images">
                    {images && images.map((image, i) => (
                        <Image key={i} src={image} width={700} height={300} alt={`Image ${title} - ${i}`} />
                    ))}
                </div>
                <div className="modal__links">
                    {project_link && <a href={project_link} target="_blank" rel="noopener noreferrer">{project_link}</a>}
                    {github_link && <a href={github_link} target="_blank" rel="noopener noreferrer">{github_link}</a>}
                </div>
            </div>
        </Modal>
    )
}

export default ProjectModal