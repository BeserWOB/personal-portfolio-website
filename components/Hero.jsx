import React, {useRef, useEffect} from "react";
import { gsap } from 'gsap';
import profileImage from "../images/ivan-profile-pic.jpeg";



export default function Hero (){
    
    const heroTitleRef = useRef(null);
    const heroTextRef = useRef(null);
    const heroImageRef = useRef(null);

    useEffect(() => {
            gsap.fromTo(
                [heroTitleRef.current, heroTextRef.current, heroImageRef.current],
                {
                    y: "-300%",
                    x: "-300%",
                },
                {
                    y: "0%",
                    x: "0%",
                    duration: 2,
                    ease: "power4.inOut",
                }
            )
      }, []);


    return (
        <div className="hero-section" >
            <h1 ref={heroTitleRef}>Welcome to my <span>portfolio</span>!</h1>
            <p ref={heroTextRef}>Passionate web developer eager to learn and contribute. 
                Ready to build exceptional online experiences with a focus on blending aesthetics and functionality. 
                Let's make magic happen in the ever-evolving world of web development.</p>
            <img src={profileImage} alt="Profile picture of Ivan" ref={heroImageRef}/>

        </div>
    )
};