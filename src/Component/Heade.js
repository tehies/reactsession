import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='header-top'>
    <header class="container">
 
      <div className="header-nenu">
        <Link to='/'>Home</Link>
        <Link to='/about'>Axios</Link>
        <Link to='/thankyou'>Contact</Link>
        <Link to="/dash">Dashboard</Link>
      </div>
      <div className="header-logo">
      Landing
      </div>
      <div className="header-button">
        <button>BUY NOW</button>
      </div>
    </header>
    </div>
  )
}
export default Header;