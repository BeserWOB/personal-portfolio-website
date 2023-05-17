import React, { useState } from 'react'
import Header from "../components/Header"
import Hero from "../components/Hero"
import Projects from "../components/Projects"
import Skills from "../components/Skills"
import PastWork from "../components/PastWork"
import PastLife from "../components/PastLife"
import Footer from "../components/Footer"
import background from "../images/background.jpeg";
import skillsBackground from "../images/skills-background.jpeg";








export default function App() {
  return (
    <main>
      <Header />
      <Hero />
      <Projects />
      <Skills />
      <PastWork />
      <PastLife />
      <Footer />
    </main>
  )
}