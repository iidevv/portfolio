import React from 'react';
import { LanguageIcon, InboxStackIcon, ServerStackIcon, TableCellsIcon, ShareIcon } from '@heroicons/react/24/solid';
const Skills = () => {
    const skills = [
        {
            title: "Languages",
            items: ["HTML, CSS (SCSS, BEM)", "JavaScript (ES6+)", "TypeScript"],
            icon: <LanguageIcon />
        },
        {
            title: "Frameworks & Libraries",
            items: ["React.js", "Next.js", "Redux", "Tailwind CSS"],
            icon: <InboxStackIcon />
        },
        {
            title: "Backend",
            items: ["Node.js (Express.js)"],
            icon: <ServerStackIcon />
        },
        {
            title: "Databases",
            items: ["MongoDB", "MySQL"],
            icon: <TableCellsIcon />
        },
        {
            title: "API",
            items: ["RESTful API"],
            icon: <ShareIcon />
        },
    ]
    return (
        <div className="skills">
            {skills.map((skillBlock, index) => (
                <div className="skills__block" key={index}>
                    <h3 className="skills__title">{skillBlock.title}</h3>
                    <ul className="skills__items">
                        {skillBlock.items && skillBlock.items.map((item, itemIndex) => (
                            <li className="skills__item" key={itemIndex}>{item}</li>
                        ))}
                    </ul>
                    {skillBlock.icon}
                </div>
            ))}
        </div>
    );
}

export default Skills;