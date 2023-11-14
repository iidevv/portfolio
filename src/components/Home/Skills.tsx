"use client"

import React from 'react';
import { skillsData } from '@/lib/data';
import { motion } from 'framer-motion';


const Skills = () => {
    const fadeInAnimation = {
        initial: {
            opacity: 0,
            y: 50
        },
        animate: (index: number) => (
            {
                opacity: 1,
                y: 0,
                transition: {
                    delay: 0.05 * index,
                    ease: "linear"
                }
            }
        )
    }
    return (
        <section id="skills" className="skills">
            <div className="site-container">
                <h2 className="section-title">Skills</h2>
                <div className="skills__blocks">
                    {skillsData.map((skillBlock, index) => (
                        <motion.div
                            className="skills__block"
                            key={index}
                            variants={fadeInAnimation}
                            initial="initial"
                            whileInView="animate"
                            viewport={{
                                once: true,
                            }}
                            custom={index}
                        >
                            <h3 className="skills__title">{skillBlock.title}</h3>
                            <ul className="skills__items">
                                {skillBlock.items && skillBlock.items.map((item, itemIndex) => (
                                    <li className="skills__item" key={itemIndex}>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <skillBlock.icon />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills;