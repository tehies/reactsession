import { useState } from "react";
import { Link } from "react-router-dom";
import Hamburger from "hamburger-react";
import "./navbar.css";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="header-logo">Landing</div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <Hamburger />
        </div>
        <div className={`nav-elements  ${showNavbar && "active"}`}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/userdetail">Userdetail</Link>
            </li>
            <li>
            <Link to="/dash">Dashboard</Link>
            </li>
            <Link to="/login"><button className="header-button" >Log in</button></Link>
          {/* {butt ?
          <button className="header-button" onClick={logout}>user out </button>
            :  
          <button className="header-button" onClick={login}> user in</button>
           } */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
