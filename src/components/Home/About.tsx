import React from 'react'
import Skills from '@/components/Home/Skills';

export const About = () => {
    return (
        <section id="about" className="about">
            <div className="site-container">
                <h2 className="section-title">About</h2>
                <div className="about__inner">
                    <div className="about__content">
                        <p>
                        I work with JavaScript, focusing on React, Node.js, Express.js, and MongoDB. Additionally, I have experience with PHP, MySQL, and WordPress systems. I learn quickly and enjoy collaborating to build web apps.
                        </p>
                        <p>
                            Currently open to opportunities to apply my skills and expand my horizons.
                            If you think we can work together, please get in touch.
                        </p>
                    </div>
                    <Skills />
                </div>
            </div>
        </section>
    )
}
