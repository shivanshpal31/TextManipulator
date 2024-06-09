import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";
// import PropTypes from 'prop-types'

export default function Navbar(props) {
  const borderRadius = {
    borderRadius: "3px",
    marginLeft: "2px",
    marginRight: "2px",
  };

  return (
    <nav className={`navbar navbar-expand-lg`} style={props.theme}>
      <Link className="navbar-brand" to="/" style={props.theme}>
        {props.title}
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/" style={props.theme}>
              Home <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item" >
            <Link className="nav-link" to="/about" style={props.theme}>
              {props.aboutText}
            </Link>
          </li>
        </ul>

        <div
          className="btn-group me-2"
          role="group"
          aria-label="Basic radio toggle button group"
        >
          <input
            type="radio"
            style={borderRadius}
            className="btn-check"
            name="btnradio"
            id="light"
            autoComplete="off"
            // onClick={props.toggle} 
          />
          <label
            className="btn btn-light text-dark"
            style={borderRadius}
            htmlFor="btnradio1"
            onClick={props.toggleLight}
          >
            Light Theme
          </label>

          <input
            type="radio"
            style={borderRadius}
            className="btn-check"
            name="btnradio"
            id="dark"
            autoComplete="off"
            onClick={props.darkTheme}
          />
          <label className="btn btn-dark" style={borderRadius} htmlFor="btnradio2" onClick={props.toggleDark}>
            Dark Theme
          </label>

          <input
            type="radio"
            className="btn-check "
            style={borderRadius}
            name="btnradio"
            id="pro"
            autoComplete="off"
            onClick={props.proTheme}
          />
          <label className="btn btn-info" style={borderRadius} htmlFor="btnradio3" onClick={props.togglePro}>
            Pro Theme
          </label>
        </div>
      </div>
    </nav>
  );
}

// Navbar.propTypes = {
//     title: PropTypes.string.isRequired,
//     aboutText: PropTypes.string.isRequired
// }

// Navbar.defaultProps = {
//     title: 'Set title here',
//     aboutText: 'About'
//   };
