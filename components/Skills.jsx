import React from "react";
import skillsBackground from "../images/skills-background.jpeg"



const Skills =  React.forwardRef((props, ref) => {
    return (
          <div className="about__content-skills" ref={ref}>
            <h3 className="about__content-title">My Skills</h3>
            <div className="skills">
              <div className="skills__skill">HTML</div>
              <div className="skills__skill">CSS</div>
              <div className="skills__skill">JavaScript</div>
              <div className="skills__skill">React</div>
              <div className="skills__skill">Git</div>
              <div className="skills__skill">Figma</div>
              <div className="skills__skill">Canva</div>
              <div className="skills__skill">Responsive Design</div>
              <div className="skills__skill">Three.js</div>
              <div className="skills__skill">GSAP</div>
            </div>
          </div>
    )
})

export { Skills };