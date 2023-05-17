import React from "react";
import profileImage from "../images/ivan-profile-pic.jpeg";



export default function Hero (){
    return (
        <div className="hero-section">
            <h1>Welcome to my <span>portfolio</span>!</h1>
            <p>Passionate web developer eager to learn and contribute. 
                Ready to build exceptional online experiences with a focus on blending aesthetics and functionality. 
                Let's make magic happen in the ever-evolving world of web development.</p>
            <img src={profileImage} alt="Profile picture of Ivan" />

        </div>
    )
}