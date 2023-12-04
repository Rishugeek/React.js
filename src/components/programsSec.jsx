import React from 'react'
import img1 from "./../assetss/mimi-thian-slWBjTGhREQ-unsplash.jpg"
import img2 from "./../assetss/annie-spratt-_dAnK9GJvdY-unsplash.jpg"
import img3 from "./../assetss/andrew-neel-QLqNalPe0RA-unsplash.jpg"
import img4 from "./../assetss/eli-francis-_M-DrbiNFa4-unsplash.jpg"
import img5 from "./../assetss/jefferson-sees-QGOWg4m3C7o-unsplash.jpg"
import img6 from "./../assetss/aaron-burden-xG8IQMqMITM-unsplash.jpg"
import "./ProgramsSec.css"
export default function ProgramsSec() {
  return (
  <section className="bg">
    <h1>ProGRamS @ weBBers</h1>
    <br/>
    <p style={{color:"white"}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis sapiente earum doloremque, ducimus quo nesciunt non, excepturi incidunt exercitationem ab quidem pariatur. Laborum assumenda deserunt cumque. Obcaecati dolores placeat quaerat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam nostrum nobis inventore ut laborum saepe, possimus pariatur voluptas exercitationem, perferendis provident dignissimos veritatis itaque necessitatibus quibusdam sint, autem sunt dolor.</p>
    <div className="holder">
        <div className="UGcard">
            <div className="imgBox">
                <img src={img1} alt=""/>
                <img src={img2} alt=""/>
                
            </div>
            <div className="details">
                <div className="con">
                    <h2>UG Programs</h2>
                    <br/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi deserunt accusamus adipisci tenetur facilis fugit, temporibus sunt cum incidunt dolorem est! Repudiandae facilis quidem assumenda officiis iusto vitae repellat tempora.</p>
                    <br/>
                    <a href="/" className="btn">Know More <i className="fa-solid fa-arrow-right"></i></a>
                </div>
            </div>
        </div>
        <div className="UGcard">
            <div className="imgBox">
                <img src={img3} alt=""/>
                <img src={img4} alt=""/>
                
            </div>
            <div className="details">
                <div className="con">
                    <h2>PG Programs</h2>
                    <br/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi deserunt accusamus adipisci tenetur facilis fugit, temporibus sunt cum incidunt dolorem est! Repudiandae facilis quidem assumenda officiis iusto vitae repellat tempora.</p>
                    <br/>
                    <a href="/" className="btn">Know More <i className="fa-solid fa-arrow-right"></i></a>
                </div>
            </div>
        </div>
        <div className="UGcard">
            <div className="imgBox">
                <img src={img5} alt=""/>
                <img src={img6} alt=""/>
            </div>
            <div className="details">
                <div className="con">
                    <h2>Ph.D Programs</h2>
                    <br/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi deserunt accusamus adipisci tenetur facilis fugit, temporibus sunt cum incidunt dolorem est! Repudiandae facilis quidem assumenda officiis iusto vitae repellat tempora.</p>
                    <br/>
                    <a href="/" className="btn">Know More <i className="fa-solid fa-arrow-right"></i></a>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}
