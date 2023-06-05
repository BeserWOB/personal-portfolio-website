import React, {useRef, useEffect} from "react";
import { gsap } from 'gsap';
import profileImage from "../images/ivan-profile-pic.jpeg";



export default function Hero (){
    
    const heroTitleRef = useRef(null);
    const heroTextRef = useRef(null);
    const heroImageRef = useRef(null);
    const heroTl = gsap.timeline({defaults: {
        duration: .6, 
        ease: "power4.inOut", 
}});
    
useEffect(() => {
      heroTl
        .fromTo(heroImageRef.current, { opacity: 0,  scale: 0}, { opacity: 1, scale: 1 })
        .fromTo(heroTextRef.current, { opacity: 0 , scale: 0}, { opacity: 1 , scale: 1})
        .fromTo(heroTitleRef.current, { opacity: 0 , x: "200%"}, { opacity: 1 , x: "0", ease: "elastic.out(1, 0.3)",});
  },[]);
    
    return (
        <div className="hero-section" id="hero">
            <h1 ref={heroTitleRef}>Welcome to my <span>portfolio</span>!</h1>
            <p ref={heroTextRef}>Passionate web developer eager to learn and contribute. 
                Ready to build exceptional online experiences with a focus on blending  aesthetics  and  functionality . 
                Let's make magic happen in the ever-evolving world of web development.</p>
            <img src={profileImage} alt="Profile picture of Ivan" ref={heroImageRef}/>

        </div>
    )
};