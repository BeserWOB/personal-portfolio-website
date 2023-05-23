import React, { useState } from 'react';
import { Link } from 'react-scroll';


const Header = React.forwardRef((props, ref) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header ref={ref} id='header'>
      <h3>Ivan Beserminji</h3>

      <div
        className={!menuOpen ? 'hamburger-menu' : 'hamburger-menu open'}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <div></div>
        <div></div>
        <div></div>
      </div>

      <div className={`menu ${menuOpen ? 'show' : ''}`}>
        <Link to="header" smooth={true} duration={1000}>
            HOME
        </Link>
        <Link to="projects" smooth={true} duration={500}>
            PROJECTS
        </Link>
        <Link to="past-work" smooth={true} duration={500}>
            PAST WORK
        </Link>
        <Link to="past-life" smooth={true} duration={500}>
            PAST LIFE
        </Link>

      </div>
    </header>
  );
});

export { Header };
