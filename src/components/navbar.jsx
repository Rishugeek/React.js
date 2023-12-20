import React,{useState} from "react";
import "./Navbar.css"


export default function Navbar() {
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);
    

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
    return (
        <>
       
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark" style={{backgroundColor: "#111"}}>
                <a className="navbar-brand" href="/" >weBBers<span>.</span></a>
                <button className="navbar-toggler"  type="button" data-toggle="collapse" data-target="/navbarNav" aria-controls="navbarNav" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" id="nav-links" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="nav-links" href="/about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="nav-links" href="/academics">Academics</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="nav-links" href="/placements">Placements</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="nav-links" href="/contact">Contact Us</a>
                        </li>
                        
                    </ul>
                </div>
            </nav>
        </>
    )
}