import React from "react";
import { Link } from "react-router-dom";
import facebook from "../images/footer/facebook.png";
import instagram from "../images/footer/instagram.png";
import github from "../images/footer/github.png";
import whatsapp from "../images/footer/whatsapp.png";
import youtube from "../images/footer/youtube.png";


export default function Footer (){
    return (
        <footer>
            <div className="footer-icons">
                <img src={facebook} alt="facebook-logo" />
                <img src={instagram} alt="instagram-logo" />
                <img src={github} alt="github-logo" />
                <img src={whatsapp} alt="whatsapp-logo" />
                <img src={youtube} alt="youtube-logo" />
            </div>
                <p>Made by Ivan Beserminji with React in Wolfsburg 2023.</p>




        
        </footer>
    )
}