import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Link } from 'react-scroll';


export default function Header (){
  const [menuOpen, setMenuOpen] = useState(false);

  const nameRef = useRef(null);
  const navRef = useRef(null);
  const headerTl = gsap.timeline({defaults: {
      duration: .6, 
      ease: "power4.inOut", 
}});
  
useEffect(() => {
    headerTl
      .fromTo(nameRef.current, { x: "-500%" ,}, { x: "0%" ,})
      .fromTo(navRef.current, { x: "120%" }, {x: "0%" , delay: 1, duration: 1.5});
},[]);
    
  return (
    <header id='header'>
      <h3 ref={nameRef}>Ivan Beserminji</h3>

      <div
        className={!menuOpen ? 'hamburger-menu' : 'hamburger-menu open'}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <div></div>
        <div></div>
        <div></div>
      </div>

      <div ref={navRef} className={`menu ${menuOpen ? 'show' : ''}`} id='menu'>
        <Link to="hero" smooth={true} duration={1000}>
            HOME
        </Link>
        <Link to="projects" smooth={true} duration={1000}>
            PROJECTS
        </Link>
        <Link to="past-work" smooth={true} duration={1000}>
            PAST WORK
        </Link>
        <Link to="past-life" smooth={true} duration={1000}>
            PAST LIFE
        </Link>

      </div>
    </header>
  );
};
