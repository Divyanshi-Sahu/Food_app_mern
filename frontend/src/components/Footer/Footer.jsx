import React from 'react'
import './Footer.css'
import { assets } from '../../assets/frontend_assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
          <div className="footer-content">
              <div className='footer-content-left'>
                  {/* <img src={assets.logo} alt="" /> */}
                  <h2 style={{color:"white", fontSize:"30px"}}>Veg-Mania</h2>

                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, tempora!</p>
                  <div className="footer-social-icon">
                    <a href='https://www.facebook.com'> <img src={assets.facebook_icon} alt="" /></a>
                    <a href='https://www.twitter.com'> <img src={assets.twitter_icon} alt="" /></a>
                     <a href='https://www.linkedin.com'><img src={assets.linkedin_icon} alt="" /></a>
                  </div> 
              </div>
              
              <div className='footer-content-center'>
                  <h2>Company</h2>
                  <ul>
                      <li><a href='#'>Home</a></li>
                      <li><a>About us</a></li>
                      <li><a href='/myOrders'>Delivery</a></li>
                      <li><a>Privacy Policy</a></li>
                  </ul>
                </div>
              <div className='footer-content-right'>
                  <h2>Get In Touch</h2>
                  <ul>
                    <li>+91-8976756242</li>
                    <li><a href="mailto:www.gmail.com">contact@vegmania.com</a></li>
                  </ul>
                </div>
          </div>   
          <hr />
          <p className='footer-copyright'>Copyright 2024 &copy; Veg-Mania.com - All Rights Reserved.</p>
    </div>
  )
}

export default Footer