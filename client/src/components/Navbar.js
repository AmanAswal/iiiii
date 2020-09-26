import React from 'react';
import {Link, withRouter} from 'react-router-dom';

function Navbar(props){
  return (
    <nav>
    <div className="nav-wrapper" style={{backgroundColor: "#6200ee"}}>
      <Link to="#" className="brand-logo">To-Do list</Link>
      <ul id="nav-mobile" className="right">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </div>
  </nav>
  )
}

export default withRouter (Navbar);
