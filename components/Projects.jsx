import React, {useEffect} from "react";
import projectsData from "../projectsData";



export default function Projects (){

    useEffect(()=>{
        const panels = document.querySelectorAll(".panel");
       
        panels[0].classList.add('active');
        
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
                {projectsData.map((project, i) => 
                    <div 
                        className="panel"
                        key={i}    
                        >
                        <img 
                            src={project.url} 
                            alt="project screenshot" 
                        />
                        <h3>{project.title}</h3>
                        <p className="github">{project.github}</p>
                        <p className="netlify">{project.netlify}</p>
                    </div>
                )}
            </div>
        </div>
        </>
    )
}