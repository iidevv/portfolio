import { Hero } from '@/components/Home/Hero';
import { Contact } from '../components/Home/Contact';
import { About } from '@/components/Home/About';
import { Projects } from '../components/Home/Projects';

export default function Home() {
  return (
    <main className="main">
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  )
}
import React from 'react'