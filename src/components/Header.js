import React, { Component } from "react";
import logo from "../assets/img/logo.png";
import "../styles/header.scss";
import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <>
        <div className="header">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="logo"></img>
            </Link>
          </div>
          <div className="icon-header">
            <Link>
              <div className="icon">
                <i className="fa-solid fa-phone"></i>
              </div>
            </Link>
            <Link>
              <div className="icon">
                <i className="fa-solid fa-location-dot"></i>
              </div>
            </Link>
            <Link>
              <div className="icon">
                <i className="fa-regular fa-user"></i>
              </div>
            </Link>
            <Link>
              <div className="icon">
                <i className="fa-regular fa-bell"></i>
              </div>
            </Link>
            <Link to="/cart">
              <div className="icon">
                <i className="fa-solid fa-bag-shopping"></i>
              </div>
            </Link>
          </div>
        </div>
      </>
    );
  }
}
