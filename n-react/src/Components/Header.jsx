import React from 'react';
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png.webp";
import '@fortawesome/fontawesome-free/css/all.min.css';


const Header = () => {
  return (
    <div className='container d-flex justify-content-between align-items-center mt-2'>
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div className="fw-bold">
        <Link className="nav-link d-inline p-2" to="/signup">Sign up</Link>
        <div className='d-inline p-2 text-muted'>|</div>
        <Link className="nav-link d-inline p-2" to="/">
          <i className="fab fa-instagram m-2"></i>
           <i className="fab fa-facebook m-2"></i>
          <i className="fab fa-twitter m-2"></i>
          <i className="fab fa-youtube m-2"></i>
          <i className="fab fa-vimeo-v m-2"></i>
           <i className="fab fa-linkedin m-2"></i>
        </Link>
      </div>
    </div>
  );
};

export default Header;
