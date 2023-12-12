import React from "react";
import "./HomePage.css"
import CardSec from "./cardSec";
import ProgramsSec from "./programsSec";
import PlacementSection from "./placementSection";
export default function Home(){
    return(<>
    
    <section className="banner" id="banner">
        <div className="content">
          <h2>"Where Learning Meets Excellence"</h2><br/>
          <p className="homePageText">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium praesentium tempore id incidunt
            quaerat doloribus cupiditate repudiandae, laborum, sapiente consequuntur nihil. Officiis explicabo quae
            doloremque veritatis nesciunt ad dolor doloribus?</p>
          <a href="/academics" className="Hbtn">Explore More</a>
        </div>
      </section>
      <CardSec/>
      <ProgramsSec/>
      <PlacementSection/>
      </>
    );
}