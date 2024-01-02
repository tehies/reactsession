import { useState } from "react";
import { Link } from "react-router-dom";
import Hamburger from "hamburger-react";
import "./navbar.css";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };
   
  const allUser = useSelector((state) => state.app.user);

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
            {/* <li>
              <Link to="/about">About</Link>
            </li> */}
            {/* <li>
              <Link to="/contact">Contact</Link>
            </li> */}
            <li>
              <Link to="/userdetail">Userdetail</Link>
            </li>
            <li>
            <Link to="/dash">Dashboard</Link>
            </li>
            <li>
            <Link to="/create">Create</Link>
            </li>
            <li>
            <Link to="/read">Read ({allUser.length})</Link>
            </li>
            <Link to="/login"><button className="header-button" >Log in</button></Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
