import React from "react";
import "./HomePage.css"
import CardSec from "./cardSec";
export default function Home(){
    return(<>
    <section className="banner" id="banner">
        <div className="content">
          <h2>"Where Learning Meets Excellence"</h2><br/>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium praesentium tempore id incidunt
            quaerat doloribus cupiditate repudiandae, laborum, sapiente consequuntur nihil. Officiis explicabo quae
            doloremque veritatis nesciunt ad dolor doloribus?</p>
          <a href="/" className="btn">Explore More</a>
        </div>
      </section>
      <CardSec/>
      </>
    );
}