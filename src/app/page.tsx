import ContactForm from '@/components/ContactForm';
import HeroObject from '@/components/Home/HeroObject';
import Skills from '@/components/Home/Skills';

export default function Home() {
  return (
    <main className="main">
      <section className="hero">
        <div className="site-container">
          <div className="hero__inner">
            <div className="hero__content">
              <h1 className="hero__title">
                Hi, I&apos;m Ilya!
              </h1>
              <div className="hero__text">
                <p>
                  Full Stack Developer with <strong>React</strong>. <br />
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
      <section id="about" className="about">
        <div className="site-container">
          <h2 className="section-title">About</h2>
          <div className="about__inner">
            <div className="about__content">
              <p>
                Working with JavaScript and use tools like React, Node.js, Express.js, and MongoDB.
                Quick to learn and like to work with people <br /> to solve problems and build good web apps.

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
      {/* <section id="projects" className="projects">
        <div className="site-container">
          <h2 className="section-title">Projects</h2>
        </div>
      </section> */}
      <section id="contact" className="contact">
        <div className="site-container">
          <h2 className="section-title">Contact</h2>
          <ContactForm />
        </div>
      </section>
    </main>
  )
}
