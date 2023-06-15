import React, { Component } from "react";
import Header from "../components/Header";
import Bestseller from "../components/Order/Bestseller";
import Combo1 from "../components/Order/Combo1";
import ComboN from "../components/Order/ComboN";
import Drinks from "../components/Order/Drinks";
import Nav_order from "../components/Order/Nav_order";
import Noodles from "../components/Order/Noodles";
import Contact from "../components/Contact";

export default class Order extends Component {
  render() {
    return (
      <>
        <Header />
        <Nav_order />
        <Bestseller />
        <Combo1 />
        <ComboN />
        <Noodles />
        <Drinks />
        <Contact />
      </>
    );
  }
}
