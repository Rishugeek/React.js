import React from "react";
import "./card.css"

export default function Card({image,heading1,heading2}){
   
    return(<>
    
        <div className="card2" style={{backgroundImage:"url("+image+")"}}>
            
                <div className="content">
                    <h2>{heading1}</h2>
                            <h3>{heading2}</h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate neque corrupti ipsum. Inventore dignissimos fugit corporis? Quasi, exercitationem id tempora unde laudantium nisi, cupiditate repellat voluptate sit natus, sint quibusdam.</p>
                            <a href="/"><i className="fa-solid fa-arrow-right fa-shake fa-2xl"></i></a>
                            
                </div>
        </div>
    
    </>);
}