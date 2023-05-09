import React, { useState } from 'react'
import Header from "../components/Header"
import Hero from "../components/Hero"
import Projects from "../components/Projects"
import PastWork from "../components/PastWork"




export default function App() {
  return (
    <main>
      <Header />
      <Hero />
      <Projects />
      <PastWork />
    </main>
  )
}