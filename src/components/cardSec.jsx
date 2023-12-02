import React from "react";
import Card from "./card";
import img1 from "./../assetss/maria-lupan-fE5IaNta2KM-unsplash.jpg"
import img2 from "./../assetss/fabio-lucas-g5tvZdOK0EM-unsplash.jpg"
import img3 from "./../assetss/sigmund-a19OVaa2rzA-unsplash.jpg"
import "./CardSec.css"

    


export default function CardSec(){
    return(<>
    <section className="about" id="about" >
        <div className="row">
            <div className="col50" >

                <div className="H1"><span className="Professors">PAVING THE WAY</span></div>
                
                <div className="container">
                <Card image={img1} heading1="01" heading2="Card1"/>
                <Card image={img2} heading1="02" heading2="Card2"/>
                <Card image={img3} heading1="03" heading2="Card3"/>
                </div>
            </div>
            <div className="imgBx">
                
            </div>
        </div>
    </section>
    </>
    );
}