import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { Projects } from '../components/Projects';
import { Skills } from '../components/Skills';
import { PastWork } from '../components/PastWork';
import { PastLife } from '../components/PastLife';
import Footer from '../components/Footer';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const headerRef = useRef(null);
  const heroRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const pastWorkRef = useRef(null);
  const pastLifeRef = useRef(null);

  useEffect(() => {
    animateComponent(headerRef);
  }, []);

  useEffect(() => {
    animateComponent(heroRef);
  }, []);

  useEffect(() => {
    animateComponent(projectsRef);
  }, []);

  useEffect(() => {
    animateComponent(skillsRef);
  }, []);

  useEffect(() => {
    animateComponent(pastWorkRef);
  }, []);

  useEffect(() => {
    animateComponent(pastLifeRef);
  }, []);


  const animateComponent = (ref) => {
    gsap.fromTo(
      ref.current,
      {
        opacity: 0,
      },
      {
        delay: .4,
        opacity: 1,
        duration: 1.4,
        ease: "none",
        scrollTrigger: {
          trigger: ref.current,
          start: 'top center+=120',
          toggleActions: 'play none none reverse',
        },
      }
    );
  };

  return (
    <main>
      <Header ref={headerRef} />
      <Hero ref={heroRef} />
      <Projects ref={projectsRef} />
      <Skills ref={skillsRef} />
      <PastWork ref={pastWorkRef} />
      <PastLife ref={pastLifeRef} />
      <Footer />
    </main>
  );
}
