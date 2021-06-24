import React from "react";
import "./style.css";

function Footer() {
  return (
    <footer className="footer">
      <nav className="navbar-expand navbar-light">
        <ul className="nav navbar-nav d-flex justify-content-between">
          <li className="nav-itema"><a className="nav-link" href="Steven.Vancourt@gmail.com" target = "_blank" rel="noopener noreferrer">E-mail: Steven.Vancourt@gmail.com</a></li>
          <li className="nav-itema"><div className="nav-link">Cell Phone: 715-864-0930</div></li>
          <li className="nav-itema"><a className="nav-link" href="https://github.com/StevenVC-P" target = "_blank" rel="noopener noreferrer">GitHub: https://github.com/StevenVC-P</a></li>
          <li className="nav-itema"><a className="nav-link" href="https://www.linkedin.com/in/steven-vancourt-cia-08375263/" target = "_blank" rel="noopener noreferrer">LinkedIn: steven-vancourt-cia-08375263</a></li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
