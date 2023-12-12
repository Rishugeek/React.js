import React from 'react'
import "./Preloader.css"
export default function Preloader() {
    return (
        <>
            <h1 className="Htitle">
                weBBers<span style={{color: "#ff0157"}}>.</span>
            </h1>
            <div id="preloader">
                <div className="loading__text">
                    LOADING
                </div>
            </div>
        </>
    )
}
