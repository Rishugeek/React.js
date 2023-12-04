import React from 'react'
import "./Footer.css"
export default function FooterSec() {
  return (
    <>
    <footer className="footer-area">
       <div className="waves">
            <div className="wave" id="wave1"></div>
            <div className="wave" id="wave2"></div>
            <div className="wave" id="wave3"></div>
            <div className="wave" id="wave4"></div>
       </div>
       
        <div className="main">
            <div className="footer">
                <div className="single-footer">
                
                    <h4>about us</h4>
                    <p className='footerText'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dicta repellendus dolor perspiciatis libero tempora error eius vero aperiam, tenetur quidem dolorum temporibus quos perferendis ut sequi voluptatum assumenda rem.</p>
                    <div className="footer-social">
                        <a href="/"><i className="fa-brands fa-facebook"></i></a>
                        <a href="/"><i className="fa-brands fa-x-twitter"></i></a>
                        <a href="/"><i className="fa-brands fa-instagram"></i></a>
                        <a href="/"><i className="fa-brands fa-linkedin"></i></a>
                        <a href="/"><i className="fa-brands fa-github"></i></a>
                    </div>
                </div>
                <div className="single-footer">
                    <h4>Main Menu</h4>
                    <ul>
                        <li><a href="/"><i className="fa-solid fa-chevron-right"></i> Home</a></li>
                        <li><a href="/"><i className="fa-solid fa-chevron-right"></i> About Us</a></li>
                        <li><a href="/"><i className="fa-solid fa-chevron-right"></i> Academics</a></li>
                        <li><a href="/"><i className="fa-solid fa-chevron-right"></i> Placements</a></li>
                        <li><a href="/"><i className="fa-solid fa-chevron-right"></i> Contact Us</a></li>
                    </ul>
                </div>
                <div className="single-footer">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="/"><i className="fa-solid fa-chevron-right"></i> Privacy</a></li>
                        <li><a href="/"><i className="fa-solid fa-chevron-right"></i> Terms & Condition</a></li>
                        <li><a href="/"><i className="fa-solid fa-chevron-right"></i> Disclaimer</a></li>
                    </ul>
                </div>
                <div className="single-footer">
                    <h4>Contact Us</h4>
                    <ul>
                        <li><a href="https://www.google.com/maps?ll=12.954859,77.574224&z=16&t=m&hl=en&gl=IN&mapclient=embed&cid=9077842113699268216"><i className="fa-solid fa-location-dot"></i> Krishna Rajendra Rd, Parvathipuram, Vishweshwarapura, Basavanagudi, Bengaluru, Karnataka 560004</a></li>
                        <li><a href="/"><i className="fa-solid fa-phone"></i> +91 0123 456 789</a></li>
                        <li><a href="/"><i className="fa-solid fa-envelope"></i> weBBers@gmail.com</a></li>
                        <li><a href="/"><i className="fa-solid fa-globe"></i> www.weBBers.com</a></li>
                    </ul>
                
                </div>
            </div>
            <div className="copy">
                <p className='footerText'>Copyright &copy; 2023, weBBers All Rights Reserved | Designed & Developed by HeadHunters</p>

            </div>
        </div>
        
    </footer>
    
    </>
  )
}
