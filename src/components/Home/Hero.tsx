import React from 'react'
import HeroObject from '@/components/Home/HeroObject';

export const Hero = () => {
    return (
        <section id="hero" className="hero">
            <div className="site-container">
                <div className="hero__inner">
                    <div className="hero__content">
                        <h1 className="hero__title">
                            <span>Hello, I&apos;m Ilya! </span><span></span>
                        </h1>
                        <div className="hero__text">
                            <p>
                                a seasoned <strong>Full Stack Developer</strong> with a comprehensive background in designing and implementing visually appealing and highly functional websites and applications.
                            </p>
                            <p>
                                My focus is on delivering robust and innovative digital solutions. I am keen to collaborate on challenging projects to create outstanding results.
                            </p>
                            <p>
                                Let's work together to bring your ideas to life!
                            </p>
                        </div>
                        <div className="hero__links">
                            <a className="button button--hero" href="#projects">Projects</a>
                            <a className="button button--hero button--transparent" target="_blank" rel="noopener noreferrer" href="/ilya-ilyich-resume.pdf">Resume</a>
                        </div>
                    </div>
                    <HeroObject />
                </div>
            </div>
        </section>
    )
}
