import React from "react"
import logo from "../../assets/Logo.webp"
import {Link} from "react-router-dom"

export default function Header() {
    return(
        <header>
            <div className="app-header">
                <img className="app-logo" src={logo} alt="logo" />
            </div>
            <nav className="app-nav">
                <Link className="nav-element" to="/home">Acceuil</Link>   
                <Link className="nav-element" to="/about">A Propos</Link>
                <Link className="nav-element" to="/projects">Projects</Link>
                <Link className="nav-element" to="/contact">Contact</Link>
            </nav>
        </header>
    )
}