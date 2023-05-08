import React, {useState} from "react";


export default function Header (){
    const [menuOpen, setMenuOpen] = useState(false)
    return (
        <header>
                <h3>Ivan Beserminji</h3>
            
                <div className={!menuOpen ? "hamburger-menu" : "hamburger-menu open"} onClick={() => setMenuOpen(!menuOpen)}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div> 


            <ul className={`menu ${menuOpen ? 'show' : ''}`}>
                <li>HOME</li>
                <li>PROJECTS</li>
                <li>PAST WORK</li>
                <li>PAST LIFE</li>
            </ul>
        </header>
    )
}