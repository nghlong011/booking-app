import React, { Component } from "react";
import Header from "../components/Header";
import Slide from "../components/Slide";
import Contact from "../components/Contact";
import Nav_food from "../components/Nav_food";

export default class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <Slide />
        <Nav_food />
        <Contact />
      </>
    );
  }
}
