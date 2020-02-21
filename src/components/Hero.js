import React from 'react';
import '../App.scss';
import logo from '../assets/img/logo.png';

const Hero = () => {
  return( 
<section className="hero is-info is-large">
  <div className="hero-head">
    <nav className="navbar">
      <div className="container">
        <div className="navbar-brand">
          <a className="navbar-item">
            <img src={logo} alt="Logo"/>
          </a>
          <span className="navbar-burger burger" data-target="navbarMenuHeroB">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div id="navbarBasicExample" className="navbar-menu">
          <div className="control navbar-item">
            <label className="radio navbar-item">
              <input type="radio" name="Personal"/>
              Personal
            </label>
            <label className="radio navbar-item">
              <input type="radio" name="Business"/>
              Business
            </label>
          </div>
        <div className="navbar-start">
          <a className="navbar-item">
            About
          </a>
          <a className="navbar-item">
            Pricing
          </a>
          <a className="navbar-item">
            FAQ
          </a>
          <a className="navbar-item">
            Contact us
          </a>
        </div>
        <div className="navbar-end">
        <div className="navbar-item">
          <div className="buttons">
            <a className="button is-primary is-rounded is-inverted is-outlined">
              <strong>Log In</strong>
            </a>
            <a className="button is-rounded is-primary">
              Join Now
            </a>
          </div>
        </div>
      </div>
        </div>
      </div>
    </nav>
  </div>

  <div className="hero-body">
    <div className="container">
      <p className="title">
        Just drive.<br></br>
        We'll do the rest
      </p>
      <p className="subtitle">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </p>
    </div>
  </div>

  <div className="hero-foot">
    <nav className="brand-name">
      <div className="container">
        <ul>
          <li>
            <a>brand</a>
          </li>
          <li>
            <a>brand</a>
          </li>
          <li>
            <a>brand</a>
          </li>
          <li>
            <a>brand</a>
          </li>
          <li>
            <a>brand</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</section>  );
}


export default Hero;
