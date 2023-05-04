import React, {useState} from "react";


export default function Header (){
    const [menuOpen, setMenuOpen] = useState(false)
    return (
        <header>
            <img src="../images/ivan.jpg" alt="profile picture of Ivan" />
            <h3>Beserminji Ivan</h3>

            
                <div className={!menuOpen ? "hamburger-menu" : "hamburger-menu open"} onClick={() => setMenuOpen(!menuOpen)}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div> 


            <ul className={`menu ${menuOpen ? 'show' : ''}`}>
                <li>Home</li>
                <li>About</li>
                <li>Projects</li>
                <li>Contact</li>
            </ul>
        </header>
    )
}