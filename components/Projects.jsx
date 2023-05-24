import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import projectsData from "../projectsData";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const [active, setActive] = useState(null);
  const projectsContainerRef = useRef(null);
  const panelRefs = useRef([]);

    useEffect(() => {
      panelRefs.current = panelRefs.current.slice(0, projectsData.length);

      // Clean up ScrollTriggers when the component unmounts or updates
      return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    }, [projectsData.length]);



    useEffect(() => {
      panelRefs.current.forEach((panel, index) => {
        gsap.fromTo(
          panel,
          {
            x: "500%",
          },
          {
            delay: index * 0.1,
            x: "0%",
            duration: 1,
            ease: "bounce.out",
            scrollTrigger: {
              trigger: panel,
              start: "top 80%", // Adjust the start position based on your needs
              toggleActions: "play none none reset",
            },
          }
        );
      });
    }, []);

    function toggleActiveClass(index) {
      if (active === index) {
        setActive(null);
      } else {
        setActive(index);
      }
    }

  return (
    <>
      <div className="projects-section" id="projects" ref={projectsContainerRef}>
        <h1 className="projects-title">Projects</h1>
        <div className="projects-container">
          {projectsData.map((project, i) => (
            <div
              className={`panel ${active === i ? "active" : ""}`}
              style={{
                backgroundImage: `url(${project.url})`,
              }}
              key={i}
              onClick={() => toggleActiveClass(i)}
              ref={(el) => (panelRefs.current[i] = el)}
            >
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a
                className="link github"
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Repo
              </a>
              <a
                className="link netlify"
                href={project.netlify}
                target="_blank"
                rel="noopener noreferrer"
              >
                Try it out!
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
