import React from "react";
import logo from '../images/Logo.jpg';
import '../css/header.css';

function Header() {
  return (
    <>
    {/* Header */}
    <nav class="navbar navbar-expand-lg navbar-light" style={{backgroundColor:'white'}}>
      <div class="container">
        <a class="navbar-brand" href="javascript:void(0);">
            <img src={logo} alt="logo"/>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <button type="button" class="btn btn-outline-primary m-2"> Home </button>
            </li>
            <li class="nav-item">
              <button type="button" class="btn btn-outline-primary m-2"> Account </button>
            </li>
            <li class="nav-item dropdown">
            
              <button type="button" class="btn btn-outline-primary m-2">CSV sample</button>
            </li>
            <li class="nav-item">
              <button type="button" class="btn btn-outline-primary m-2"> Sign Up </button>
            </li>
            <li className="nav-item">
            <button type="button" class="btn btn-primary m-2 signin"> Sign In </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    {/* Header Ends Here */}
        
        </>
  );
}

export default Header;