import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Link } from 'react-scroll';


export default function Header (){
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkModeOn, setDarkModeOn] = useState(true)
  
  const headerRef = useRef(null);
  const nameRef = useRef(null);
  const navRef = useRef(null);
  const headerTl = gsap.timeline({defaults: {
      duration: .6, 
      ease: "power4.inOut", 
}});
  
useEffect(() => {
    headerTl
      .fromTo(nameRef.current, { x: "-500%" ,}, { x: "0%" ,})
      .fromTo(navRef.current, { x: "220%" }, {x: "0%" , delay: 1, duration: 1.5});
},[]);

function closeTheMenu () {
  setMenuOpen(false);
}

function toggleTheme (){
  setDarkModeOn(!darkModeOn)
  document.body.classList = darkModeOn ? "dark-mode" : "light-mode"
}


  window.addEventListener('scroll', () => {
    if(window.scrollY > 50){
      headerRef.current.classList.add="header-scrolled"
    } else if(window.scrollY < 50){
      headerRef.current.classList.remove="header-scrolled"
    }
  })

    
  return (
    <header id='header' className='header' ref={headerRef}>

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
        <Link 
          to="hero" 
          smooth={true} 
          duration={1000}
          onClick={closeTheMenu}
          >
            HOME
        </Link>
        <Link 
          to="projects" 
          smooth={true} 
          duration={1000}
          onClick={closeTheMenu}
          >
            PROJECTS
        </Link>
        <Link 
          to="past-work" 
          smooth={true} 
          duration={1000}
          onClick={closeTheMenu}
          >
            PAST WORK
        </Link>
        <Link 
          to="past-life" 
          smooth={true} 
          duration={1000}
          onClick={closeTheMenu}
          >
            PAST LIFE
        </Link>
        <button onClick={toggleTheme}>
          toggle
        </button>

      </div>
    </header>
  );
};
