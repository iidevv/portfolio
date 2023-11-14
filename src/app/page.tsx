import { Hero } from '@/components/Home/Hero';
import { Contact } from '../components/Home/Contact';
import { About } from '@/components/Home/About';
import { Projects } from '../components/Home/Projects';
import Skills from '@/components/Home/Skills';

export default function Home() {
  return (
    <main className="main">
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  )
}
import React from 'react'