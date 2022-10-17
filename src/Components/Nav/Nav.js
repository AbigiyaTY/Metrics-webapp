import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

function Nav() {
  return (
    <nav className="nav">
      <div className="container my-4">
        <div className="row">
          <div className="col-1" />
          <h2 className="col-3 titleNav"><Link to="/">General News</Link></h2>
          <div className="col-5" />
          <i className="fa fa-microphone col-1 px-1" />
          <i className="fa fa-globe col-1" />
          <div className="col-1" />
        </div>
      </div>
    </nav>
  );
}

export default Nav;