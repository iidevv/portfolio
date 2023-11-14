"use client"

import React, { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'

type ProjectProps = {
    id: number,
    title: string,
    description: string,
    tags: readonly string[],
    category: string,
    thumbnail: string,
    images: readonly string[],
    project_link: string,
    github_link: string,
    setModalOpen: React.Dispatch<React.SetStateAction<{
        id: number;
        isOpen: boolean;
    }>>
}

export const Project = ({
    id,
    title,
    description,
    tags,
    category,
    thumbnail,
    images,
    project_link,
    github_link,
    setModalOpen
}: ProjectProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"]
    })
    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
    return (
        <motion.div
            ref={ref}
            style={{
                opacity: opacityProgress,
                scale: scaleProgress,
            }}
        >
            <article className="project" onClick={() => {
                setModalOpen({
                    id,
                    isOpen: true,
                })
            }}>
                <div className="project__image">
                    <Image src={thumbnail} alt={`Project ${title}`} width={300} height={400} />
                </div>
                <div className="project__info">
                    <h3 className="project__title">{title}</h3>
                    <p className="project__description">{description}</p>
                    {/* <ul className="project__tags">
                        {tags.map(tag => (
                            <li>{tag}</li>
                        ))}
                    </ul> */}
                </div>
            </article >
        </motion.div>
    )
}