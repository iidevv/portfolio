import React from 'react'
import HeroObject from '@/components/Home/HeroObject';

export const Hero = () => {
    return (
        <section id="hero" className="hero">
            <div className="site-container">
                <div className="hero__inner">
                    <div className="hero__content">
                        <h1 className="hero__title">
                            <span>Hi, I&apos;m Ilya! </span><span>Full Stack Developer with 5 years of experience</span>
                        </h1>
                        <div className="hero__text">
                            <p>
                                <br />
                                I build nice-looking sites & apps <br />
                                and make sure they work well on the inside. <br />
                            </p>
                            <p>
                                Let&apos;s work together and make cool stuff!
                            </p>
                        </div>
                        <div className="hero__links">
                            <a className="button button--hero" href="#projects">Projects</a>
                            <a className="button button--hero button--transparent" target="_blank" rel="noopener noreferrer" href="/ilya.ilyich.min.pdf">Resume</a>
                        </div>
                    </div>
                    <HeroObject />
                </div>
            </div>
        </section>
    )
}
