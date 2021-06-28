import React from "react";
// import { Link } from "react-router-dom"
// import Resume from "../../assets/Full Stack Developer - Steven Van Court(tech).pdf"
import "./style.css";

function Header () {
    return (
        <header className="text-center">
            <h1 className="display-4 col-12">My Food Storage</h1>
            {/* <nav className="navbar navbar-expand navbar-light d-flex justify-content-between">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link
                        to="/"
                        className={
                            window.location.pathname ==="/" || window.location.pathname ==="/react_portfolio" || window.location.pathname ==="/react_portfolio/about"
                            ? "nav-link active"
                            : "nav-link"
                        }>
                        About
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                        to="/projects"
                        className={window.location.pathname === "/react_portfolio/projects" ? "nav-link active" : "nav-link"
                        }>
                        Projects
                        </Link>
                    </li>
                    <li className="nav-item"><a className="nav-link" href={Resume} target = "_blank" rel="noopener noreferrer">Resume</a></li>
                </ul>
        </nav> */}
    </header>
    );
}

export default Header;