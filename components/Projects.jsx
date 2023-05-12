import React, {useState, useEffect} from "react";
import projectsData from "../projectsData";



export default function Projects (){
    const [active, setActive] = useState(null);

    function toggleActiveClass(index) {
        if (active === index) {
          setActive(null);
        } else {
          setActive(index);
        }
      }
    

    return (
        <>
            <div className="projects-section">
            <h1 className="projects-title">Projects</h1>
                <div className="projects-container">
                {projectsData.map((project, i) => (
                    <div
                    className={`panel ${active === i ? 'active' : ''}`}
                      style={{ 
                        backgroundImage: `url(${project.url})` 
                    }}
                      key={i}
                      onClick={() => toggleActiveClass(i)}
                    >
                      <h3>{project.title}</h3>
                      <p>{project.description}</p>
                      <a className="link github" href="#">GitHub Repo </a>
                      <a className="link netlify" href="#">Try it out!</a>
                    </div>
                ))}

            </div>
        </div>
        </>
    )
}

