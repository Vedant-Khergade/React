

import React from 'react';

import PropTypes from 'prop-types'; //use "impt" to get this line
import { Link } from 'react-router-dom';





export default function Navbar(props) { // use rfc to get this.
  return (
  
      <nav className={`navbar navbar-expand-lg  navbar-${props.mode2} bg-${props.mode2}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/description">{props.Heading}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/home">{props.Home}</Link>
        </li> 
        <li className="nav-item"> 
          <Link className="nav-link" to="/about">About</Link>
        </li>
        
      </ul>
     
    </div>
  </div>

  <div className={`form-check form-switch text-${props.mode2==='dark'?'light':'dark'}`}>
  <input className="form-check-input" onClick={props.toogleMode} type="checkbox" id="flexSwitchCheckDefault"/>
  <label className="form-check-label " htmlFor="flexSwitchCheckDefault">{props.text2}</label>
</div>
</nav>

  )
}





//-----------------------------------------------------------------------------------------------------------------------------------
//Types of props

Navbar.propTypes={

  Heading:PropTypes.string.isRequired,

  Home:PropTypes.string.isRequired

  
};


Navbar.defaultProps={

  Heading:'Text',

  Home:''

};




//props are Read only

//Here "Heading" and "Home" are variables.

//We can use this "Navbar"  component for diff-diff web apps
// simply by changing  these variables' values using 'props'.


//'props' means properties.