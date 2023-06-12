import React, { Component } from "react";
import logo from "../assets/img/logo.png";
import "../styles/header.scss";
export default class Header extends Component {
  render() {
    return (
      <>
        <div className="header">
          <div className="logo">
            <a href="/">
              <img src={logo} alt="logo"></img>
            </a>
          </div>
          <div className="icon-header">
            <div className="icon">
              <i className="fa-solid fa-phone"></i>
            </div>
            <div className="icon">
              <i className="fa-solid fa-location-dot"></i>
            </div>
            <div className="icon">
              <i className="fa-regular fa-user"></i>
            </div>
            <div className="icon">
              <i className="fa-regular fa-bell"></i>
            </div>
            <div className="icon">
              <i className="fa-solid fa-bag-shopping"></i>
            </div>
          </div>
        </div>
      </>
    );
  }
}
