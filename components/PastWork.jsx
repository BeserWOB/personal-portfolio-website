import React from "react";
import pastWork1 from "../images/past-work-1.jpeg"
import pastWork2 from "../images/past-work-2.jpeg"
import pastWork3 from "../images/past-work-3.jpeg"
import pastWork4 from "../images/past-work-4.jpeg"


const PastWork = React.forwardRef((props, ref) => {
    return (
        <main ref={ref} id="past-work">
        
            <h1 className="past-work--title">Past Work</h1>
        <div className="past-work-section">

            <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img src={pastWork1} alt="photo of past work as a musician"/>
                  </div>
                  <div className="flip-card-back">
                    <p> As a web developer with a passion for creativity, I have always been drawn to the intersection of technology and art. 
                        But before I dove into the world of code, I was a musician, exploring the expressive power of sound.</p>
                  </div>
                </div>
            </div>

            <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img src={pastWork2} alt="photo of past work as a musician"/>
                  </div>
                  <div className="flip-card-back">
                    <p> My love for music has given me a unique perspective in my work as a web developer. 
                        Just as every note in a song contributes to the overall sound, every line of code 
                        is a crucial piece in creating a functional and beautiful website.</p>
                  </div>
                </div>
            </div>

            <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img src={pastWork3} alt="photo of past work as a musician"/>
                  </div>
                  <div className="flip-card-back">
                    <p> Whether I'm building a sleek and modern e-commerce platform or a vibrant and interactive web application, 
                        my background in music has taught me the importance of attention to detail and collaboration.</p>
                  </div>
                </div>
            </div>

            <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img src={pastWork4} alt="photo of past work as a musician"/>
                  </div>
                  <div className="flip-card-back">
                    <p> Take a look around my website to learn more about my work and interests, 
                        and feel free to reach out if you have any questions or project ideas. 
                        Let's make something beautiful together!</p>
                  </div>
                </div>
            </div>
        </div>
        </main>
    )
})

export { PastWork }