import React , { useState}from "react";
import "./Navbar.css"
function val(){
    window.addEventListener('scroll',function(){
        const header = document.querySelector('header');
        header.classList.toggle("sticky",window.scrollY > 0);
    });
}

export default function Navbar() {
    
    const [cls,setClose]=useState(true);
    let f=()=>{
        setClose(!cls);
        let l=document.getElementsByClassName("navigation")[0];

        if(cls){
            l.classList.add("show");
            
        }
        else{
            l.classList.remove("show");
            
        }
    };
    return (
        <header>
            {val()}
            <a href="/" className="logo">weBBers<span>.</span></a>
            <i className={cls?"fa-solid fa-bars":"fa-solid fa-xmark"}  onClick={f} style={{color:"white"}}></i>
            <ul className="navigation">
                <li><a href="/home">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/academics">Academics</a></li>
                <li><a href="/placements">Placements</a></li>
                <li><a href="/contact">Contact Us</a></li>
            </ul>
        </header>
    )
}