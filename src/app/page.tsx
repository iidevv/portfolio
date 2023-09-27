import ContactForm from '@/components/ContactForm';
import HeroCircle from '@/components/Home/HeroCircle';
import Skills from '@/components/Home/Skills';

export default function Home() {
  return (
    <main className="main">
      <section className="hero">
        <div className="container">
          <div className="hero__inner">
            <div className="hero__content">
              <h1 className="hero__title">
                Hi, I'm Ilya!
              </h1>
              <p>
                I'm a full-stack developer with MERN stack. <br />
                Building nice-looking sites & apps and make sure they work well on the inside. <br />
                Let's work together and make cool stuff!
              </p>
            </div>
            <div className="hero__circle">
              <HeroCircle/>
            </div>
          </div>
        </div>
      </section>
      <section id="about" className="about">
        <div className="about__content">
          <p>
            Working with JavaScript and use tools like React, Node.js, Express.js, and MongoDB. <br />
            Quick to learn and like to work with people to solve problems and build good web apps.
          </p>
          <p>
            Currently on the lookout for opportunities to apply my skills and expand my horizons. <br />
            If you think we can work together, please get in touch.
          </p>
        </div>
        <Skills />
      </section>
      <section id="projects" className="projects">projects</section>
      <section id="contact" className="contact">
        <ContactForm />
      </section>
    </main>
  )
}
