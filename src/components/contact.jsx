import React from 'react'
import img1 from "./../assetss/contact/retrosupply-jLwVAUtLOAQ-unsplash.jpg"
import "./Contact.css"
export default function Contact({back}) {
    if(back){
        document.body.style.backgroundImage="none";
    }
  return (
    <section className = "contact-section">
      <div className = "contact-bg">
        <h3>Get in Touch with Us</h3>
        <h2>contact us</h2>
        <div className = "line">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <p className = "Ctext">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda iste facilis quos impedit fuga nobis modi debitis laboriosam velit reiciendis quisquam alias corporis, maxime enim, optio ab dolorum sequi qui.</p>
      </div>
      <div className = "contact-body">
        <div className = "contact-info">
          <div>
            <span><i className = "fas fa-mobile-alt"></i></span>
            <span className = "Ctext">Phone No.</span>
            <span className = "Ctext" >+91 1234567890</span>
          </div>
          <div>
            <span><i className = "fas fa-envelope-open"></i></span>
            <span className = "Ctext" >E-mail</span>
            <span className = "Ctext">mail@bit.com</span>
          </div>
          <div>
            <span><i className = "fas fa-map-marker-alt"></i></span>
            <span className = "Ctext">Address</span>
            <span className = "Ctext">2939 Patrick Street, Vicotria TX, United States</span>
          </div>
          <div>
            <span><i className = "fas fa-clock"></i></span>
            <span className = "Ctext" >Opening Hours</span>
            <span className = "Ctext" >Monday - Friday (9:00 AM to 5:00 PM)</span>
          </div>
        </div>

        <div className = "contact-form">
          <form>
            <div>
              <input type = "text" className = "form-control" placeholder="First Name"/>
              <input type = "text" className = "form-control" placeholder="Last Name"/>
            </div>
            <div>
              <input type = "email" className = "form-control" placeholder="E-mail"/>
              <input type = "text" className = "form-control" placeholder="Phone"/>
            </div>
            <textarea rows = "5" placeholder="Message" className = "form-control"></textarea>
            <input type = "submit" className = "send-btn" value = "send message"/>
          </form>

          <div>
            <img src = {img1} alt = ""/>
          </div>
        </div>
      </div>

      <div className = "map">
        <iframe title='if' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7776.530886157364!2d77.574224!3d12.954859!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1592715c4e7f%3A0x7dfaf94e52204678!2sBengaluru%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1702208559201!5m2!1sen!2sin" width="100%" height="450"  style={{"border":"0"}} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
      </div>

    </section>
  )
}
