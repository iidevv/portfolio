import React from 'react';
import { skillsData } from '@/lib/data';
const Skills = () => {
    return (
        <div className="skills">
            {skillsData.map((skillBlock, index) => (
                <div className="skills__block" key={index}>
                    <h3 className="skills__title">{skillBlock.title}</h3>
                    <ul className="skills__items">
                        {skillBlock.items && skillBlock.items.map((item, itemIndex) => (
                            <li className="skills__item" key={itemIndex}>{item}</li>
                        ))}
                    </ul>
                    <skillBlock.icon />
                </div>
            ))}
        </div>
    );
}

export default Skills;