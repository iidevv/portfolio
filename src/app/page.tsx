import ContactForm from '@/components/ContactForm';
import HeroObject from '@/components/Home/HeroObject';
import Skills from '@/components/Home/Skills';
import { EmailTemplate } from '@/components/EmailTemplate';

export default function Home() {
  return (
    <main className="main">
      <section className="hero">
        <div className="site-container">
          <div className="hero__inner">
            <div className="hero__content">
              <h1 className="hero__title">
                <span>Hi, I&apos;m Ilya! </span><span>Full Stack Developer with <strong>React & Node.js</strong>.</span>
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
          <div className="contact__inner">
            <div className="contact__form">
              <h3 className="contact__subtitle">lets talk</h3>
              <ContactForm />
            </div>
            <div className="contact__info">
              <h3 className="contact__subtitle">Get in touch with me</h3>
              <p className="mb-4">I am available for full-time positions or freelance.</p>
              <ul className="contact-list">
                <li>
                  <a aria-label="linkedin" href="https://www.linkedin.com/in/ilya-ilyich/" target="_blank" rel="noopener noreferrer">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#clip0_29_2)">
                        <path d="M21.75 0.5625H2.25C1.80756 0.557997 1.3814 0.729196 1.06504 1.03853C0.74867 1.34787 0.56794 1.77007 0.5625 2.2125V21.7913C0.568923 22.233 0.750087 22.6543 1.06634 22.9628C1.3826 23.2713 1.8082 23.442 2.25 23.4375H21.75C22.1925 23.441 22.6183 23.2692 22.9345 22.9597C23.2507 22.6502 23.4316 22.2281 23.4375 21.7856V2.20688C23.4296 1.76574 23.2479 1.34555 22.9319 1.03764C22.6159 0.729721 22.1912 0.558971 21.75 0.5625Z" fill="#0076B2" />
                        <path d="M3.94876 9.13687H7.34438V20.0625H3.94876V9.13687ZM5.64751 3.69937C6.03697 3.69938 6.41768 3.81489 6.74148 4.0313C7.06528 4.24771 7.31762 4.5553 7.46657 4.91515C7.61553 5.275 7.65441 5.67095 7.57829 6.0529C7.50217 6.43485 7.31448 6.78564 7.03896 7.0609C6.76344 7.33616 6.41246 7.52352 6.03044 7.59927C5.64842 7.67503 5.25251 7.63577 4.8928 7.48647C4.53309 7.33718 4.22574 7.08454 4.00964 6.76054C3.79354 6.43653 3.67839 6.05571 3.67876 5.66625C3.67925 5.14443 3.88689 4.64415 4.25605 4.27535C4.62521 3.90654 5.12569 3.69937 5.64751 3.69937ZM9.47438 9.13687H12.7294V10.6369H12.7744C13.2281 9.77812 14.3344 8.8725 15.9863 8.8725C19.425 8.865 20.0625 11.1281 20.0625 14.0625V20.0625H16.6669V14.7469C16.6669 13.4812 16.6444 11.8519 14.9025 11.8519C13.1606 11.8519 12.8644 13.2319 12.8644 14.6644V20.0625H9.47438V9.13687Z" fill="white" />
                      </g>
                      <defs>
                        <clipPath id="clip0_29_2">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </a>
                </li>
                <li>
                  <a aria-label="github" href="https://github.com/rmerfy" target="_blank" rel="noopener noreferrer">
                    <svg className='contact-icon' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#clip0_29_7)">
                        <path d="M12 0.297C9.14948 0.295651 6.39157 1.30907 4.22013 3.15577C2.04869 5.00248 0.605556 7.56186 0.149142 10.3756C-0.307273 13.1893 0.252848 16.0737 1.7292 18.5121C3.20555 20.9505 5.50171 22.7837 8.2065 23.6835C8.8065 23.7945 9.027 23.4225 9.027 23.106C9.027 22.8195 9.015 21.8745 9.0105 20.8725C5.6715 21.5985 4.968 19.4565 4.968 19.4565C4.422 18.069 3.636 17.7 3.636 17.7C2.547 16.9545 3.7185 16.971 3.7185 16.971C4.923 17.055 5.5575 18.207 5.5575 18.207C6.6285 20.0415 8.3655 19.5105 9.0495 19.2045C9.1575 18.429 9.468 17.8995 9.8115 17.5995C7.146 17.2965 4.344 16.2675 4.344 11.6685C4.344 10.359 4.8135 9.288 5.58 8.448C5.4555 8.145 5.0445 6.9255 5.6955 5.2725C5.6955 5.2725 6.7035 4.95 8.997 6.5025C9.97584 6.23623 10.9856 6.10056 12 6.099C13.02 6.1035 14.0475 6.237 15.006 6.5025C17.2965 4.95 18.303 5.2725 18.303 5.2725C18.9555 6.9255 18.546 8.1465 18.4215 8.448C19.191 9.288 19.656 10.359 19.656 11.6685C19.656 16.278 16.848 17.292 14.1765 17.589C14.607 17.961 14.991 18.6915 14.991 19.8105C14.991 21.4155 14.9775 22.7085 14.9775 23.103C14.9775 23.4225 15.1935 23.796 15.8025 23.679C18.5068 22.7782 20.8021 20.9442 22.2775 18.5054C23.7529 16.0666 24.312 13.1822 23.8547 10.3688C23.3974 7.55533 21.9536 4.99653 19.7817 3.15055C17.6099 1.30456 14.8519 0.291939 12.0015 0.294L12 0.297Z" />
                      </g>
                      <defs>
                        <clipPath id="clip0_29_7">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </a>
                </li>
                <li>
                  <a aria-label="email" href="mailto:ilya.ilyich1105@gmail.com" target="_blank" rel="noopener noreferrer">
                    <svg className='contact-icon' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21.3333 2.5C22 2.5 22.5648 2.73148 23.0278 3.19444C23.4907 3.65741 23.7222 4.22222 23.7222 4.88889V19.1111C23.7222 19.7778 23.4907 20.3426 23.0278 20.8056C22.5648 21.2685 22 21.5 21.3333 21.5H2.38889C1.72222 21.5 1.15741 21.2685 0.694444 20.8056C0.231481 20.3426 0 19.7778 0 19.1111V4.88889C0 4.22222 0.231481 3.65741 0.694444 3.19444C1.15741 2.73148 1.72222 2.5 2.38889 2.5H21.3333ZM21.3333 7.27778V4.88889L11.8333 10.8333L2.38889 4.88889V7.27778L11.8333 13.1667L21.3333 7.27778Z" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
