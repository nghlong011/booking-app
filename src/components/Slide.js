import React, { Component } from "react";
import Slide1 from "../assets/img/shipper.jpg";
import Slide2 from "../assets/img/COMBO 1 NGƯỜI/1.jpg";
import "../styles/slide.scss";
import Nav from "./Nav";
export default class Slide extends Component {
  state = {
    backgroundImage: "",
  };

  componentDidMount() {
    const imageURLs = [Slide1, Slide2];

    this.setState({ backgroundImage: imageURLs[0] });
    this.interval = setInterval(() => {
      const currentIndex = imageURLs.indexOf(this.state.backgroundImage);

      this.setState({
        backgroundImage: imageURLs[currentIndex + 1] || imageURLs[0],
      });
    }, 15000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    return (
      <div
        className="slide"
        id="slide"
        style={{ backgroundImage: `url(${this.state.backgroundImage})` }}
      >
        <Nav />
      </div>
    );
  }
}
