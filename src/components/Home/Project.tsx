"use client"

import React, { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'

type ProjectProps = {
    title: string,
    description: string,
    tags: readonly string[],
    category: string,
    images: readonly string[],
    project_link: string,
    github_link: string
}

export const Project = ({
    title,
    description,
    tags,
    category,
    images,
    project_link,
    github_link
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
            <article className="project" >
                <div className="project__info">
                    <h3 className="project__title">{title}</h3>
                    <p className="project__description">{description}</p>
                    <ul className="project__tags">
                        {tags.map(tag => (
                            <li key={tag}>{tag}</li>
                        ))}
                    </ul>
                    <ul className="project__links">
                        {project_link !== "" &&
                            <li><a href={project_link} target="_blank" rel="noopener noreferrer"></a></li>
                        }
                        {github_link !== "" &&
                            <li><a href={github_link} target="_blank" rel="noopener noreferrer"></a></li>
                        }
                    </ul>
                </div>
                <div className="project__image">
                    <Image src={images[0]} alt={`Project ${title}`} width={300} height={300} layout="responsive" />
                </div>
            </article >
        </motion.div>
    )
}