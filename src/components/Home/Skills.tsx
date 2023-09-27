import React from 'react';

const Skills = () => {
    const skills = [
        {
            title: "Languages & Technologies",
            items: ["HTML, CSS (SCSS, BEM)", "JavaScript (ES6+)", "TypeScript"]
        },
        {
            title: "Frameworks & Libraries",
            items: ["React.js", "Redux", "Tailwind CSS"]
        },
        {
            title: "Backend",
            items: ["Node.js/Express.js", "PHP",]
        },
        {
            title: "Databases",
            items: ["MongoDB", "MySQL"]
        },
        {
            title: "API",
            items: ["RESTful API"]
        },
    ]
    return (
        <div className="skills">
            {skills.map((skillSection, index) => (
                <div className="skills__section" key={index}>
                    <h3 className="skills__title">{skillSection.title}:</h3>
                    <ul className="skills__items">
                        {skillSection.items && skillSection.items.map((item, itemIndex) => (
                            <li className="skills__item" key={itemIndex}>{item}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}

export default Skills;