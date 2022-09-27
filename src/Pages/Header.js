import React from 'react';
import './tutor.css'
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Header = () => {
  return (
    <div className=''>
      <nav className="navbar navbar-expand-lg bg-banner">
        <div className="container-fluid mt-3 ms-5">
          <Link className="navbar-brand text-white fw-bold mb-0 lh-1" href="#">Tutor Master
            <br />
            <span className='logo-title lh-1 '>knowledge Transfer</span>
          </Link>
          <br />
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav text-white  ms-auto mb-2 mb-lg-0 nav-text">
              <li className="nav-item">
                <Link className="nav-link text-white active banner-text" aria-current="page" href="#">Home</Link>
              </li>
              <li className="nav-item d-margin">
                <Link className="nav-link active text-white" aria-current="page" href="#">Training</Link>
              </li>
              <li className="nav-item d-margin">
                <Link className="nav-link active text-white" aria-current="page" href="#">About</Link>
              </li>
              <li className='d-margin me-5'>
                <Link className="nav-link active text-primary bg-light" aria-current="page" href="#">Login
                </Link></li>
            </ul>

          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;