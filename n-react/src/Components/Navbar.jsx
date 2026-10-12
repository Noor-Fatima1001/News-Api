import React, { Component } from 'react'
import
{
  Link
} from "react-router-dom";

import '@fortawesome/fontawesome-free/css/all.min.css';
const Navbar = () => {


  
    return (
      <div>
    <hr style={{ borderTop: '1px solid black' }} />
        <nav className="navbar navbar-expand-lg sticky-top navbar-light bg-light ">
  <div className="container-fluid">
  
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse fw-bold d-flex justify-content-between align-items-center" style={{color:"black"}} id="navbarSupportedContent">
      <ul className="navbar-nav ">
        <li className="nav-item mx-4 mb-0 ">
          <Link className="nav-link" aria-current="page" to="/">Home</Link>
        </li>
       
         <li className="nav-item mx-2">
          <Link className="nav-link" to="/health">Page</Link>
        </li>
         <li className="nav-item mx-2">
          <Link className="nav-link" to="/business">Science</Link>
        </li>
         <li className="nav-item mx-2">
          <Link className="nav-link" to="/entertainment">Technology</Link>
        </li>
         <li className="nav-item mx-2">
          <Link className="nav-link" to="/sports">Beauty</Link>
        </li>
         <li className="nav-item mx-2">
          <Link className="nav-link" to="/general">Health</Link>
        </li>
         <li className="nav-item mx-2">
          <Link className="nav-link" to="/science">Art & Culture</Link>
        </li>
        <li className="nav-item mx-2">
          <Link className="nav-link" to="/general">Opinion</Link>
        </li>
        <li className="nav-item mx-2">
          <Link className="nav-link" to="/sports">Video</Link>
        </li>
        <li className="nav-item mx-2">
          <Link className="nav-link" to="/science">Gallery</Link>
        </li>
      
    
      </ul>

    </div>
    <div>
      <form className='nav-link d-inline mx-5' action="#">
          <i className='fas fa-search'></i>
         </form>
    </div>
  </div>
</nav>
<hr style={{ borderTop: '4px solid black' }} />

      </div>
    )
  }

export default Navbar


