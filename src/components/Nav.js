import React, { Component } from "react";
import "../styles/nav.scss";
export default class Nav extends Component {
  render() {
    return (
      <div className="NavBar_home">
        <div className="nav_container">
          <ul>
            <li>
              <p>BESTSELLER</p>
            </li>
            <li>
              <p>ĐẶT HÀNG</p>
            </li>
            <li>
              <p>CỬA HÀNG</p>
            </li>
            <li id="last">
              <p>ĐƠN HÀNG LỚN</p>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
