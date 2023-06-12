import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../../styles/nav_order.scss";
export default class Nav_order extends Component {
  state = {
    listNav: [
      { idNav: "1", titleNav: "bestseller", nameNav: "bestseller" },
      { idNav: "2", titleNav: "combo1", nameNav: "combo 1 người" },
      { idNav: "3", titleNav: "combon", nameNav: "combo nhóm" },
      { idNav: "4", titleNav: "noodles", nameNav: "mì indomiee" },
      { idNav: "5", titleNav: "drinks", nameNav: "món phụ và đồ uống" },
    ],
    width: 0,
    height: 0,
    activeNav: "bestseller",
  };
  handleScroll = () => {
    const titleNavArray = this.state.listNav.map((item) => item.titleNav);
    // console.log(titleNavArray)
    titleNavArray.forEach((item) => {
      const section = document.getElementById(item);
      if (section) {
        if (
          window.scrollY >= section.offsetTop - 20 &&
          window.scrollY < section.offsetTop + section.offsetHeight - 20
        ) {
          this.setState({ activeNav: item });
          //  console.log(this.state.activeNav)
        }
      }
    });
    // console.log("day la scorll" + this.state.activeNav)
  };
  handleClick = (titleNav) => {
    document.getElementById(titleNav).scrollIntoView({ behavior: "smooth" });
    this.setState({
      activeNav: titleNav,
    });
    // console.log("day la click " + this.state.activeNav)
  };
  updateDimensions = () => {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  };
  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
    window.addEventListener("scroll", this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
    window.removeEventListener("scroll", this.handleScroll);
  }
  render() {
    let { width, activeNav } = this.state;
    return (
      <div className="NavBar">
        <div className="nav_container">
          <ul>
            {this.state.listNav.map((item, index) => {
              return (
                <li
                  key={item.idNav}
                  onClick={() => this.handleClick(item.titleNav)}
                >
                  <NavLink
                    to={"/order/" + item.titleNav}
                    className={activeNav === item.titleNav ? "active" : ""}
                  >
                    {item.nameNav}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}
