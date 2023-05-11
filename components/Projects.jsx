import React, {useEffect} from "react";
import projectsData from "../projectsData";



export default function Projects (){

    useEffect(()=>{
        const panels = document.querySelectorAll(".panel");
        
        panels.forEach((panel) =>{
            panel.addEventListener('click', () =>{
                removeActiveClass();
                panel.classList.add('active')
            })
        })
        const removeActiveClass = () => {
            panels.forEach(panel => {
                panel.classList.remove('active');
            })
        }   
    },[])    




    return (
        <>
            <div className="projects-section">
            <h1 className="projects-title">Projects</h1>
                <div className="projects-container">
                {projectsData.map((project, i) => (
                    <div
                      className="panel"
                      style={{ 
                        backgroundImage: `url(${project.url})` 
                    }}
                      key={i}
                    >
                      <h3>{project.title}</h3>
                      <p>{project.description}</p>
                      <a className="link github" href="#">GitHub Repo</a>
                      <a className="link netlify" href="#">Try it out!</a>
                    </div>
                ))}

            </div>
        </div>
        </>
    )
}
