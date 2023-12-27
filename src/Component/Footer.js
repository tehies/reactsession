import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer-main'>
      <div className='container'>
      <div className='footer-copy'>
        <p>©2023 Yourcompany</p>
        <h2>LANDING</h2>
        <button>Purchase Now</button>
      </div>
      <hr/>
      <div className='footer-menu'>
        <div className="footer-menus">
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/thankyou'>Thankyou</Link>
        </div>
        <div className="social-link">
          <div class="icon-facebook"><img src={require('../images/facebook.png')}></img></div>
          <div class="icon-facebook"><img src={require('../images/Instagram.png')}></img></div>
          <div class="icon-facebook"><img src={require('../images/Linkedin.png')}></img></div>
          <div class="icon-facebook"><img src={require('../images/twitter.png')}></img></div>
          <div class="icon-facebook"><img src={require('../images/youtube.png')}></img></div>
        </div>
      </div>
    </div>
    </div>
  )
}
export default Footer;