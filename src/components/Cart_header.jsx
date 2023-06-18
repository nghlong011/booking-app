import React, { Component } from "react";
import "../styles/cart_header.scss";
import { Link } from "react-router-dom";
import vietnam from "../assets/img/vietnam.png";

export default function Cart_header() {
  const options = [
    { value: "vietnamese", label: "Tiếng Việt" },
    { value: "english", label: "Tiếng Anh" },
  ];
  return (
    <>
      <div className="header_cart">
        <Link to="/">
          <div className="btn_back_home">Quay lại menu</div>
        </Link>
        <div className="icon-header">
          <Link>
            <div className="icon">
              <i className="fa-regular fa-user"></i>
            </div>
          </Link>
        </div>
      </div>
      <div className="user_location">
        <div className="label_location">
          <div className="icon">
            <i className="fa-solid fa-location-dot"></i>
          </div>
          Được giao từ: Suối Hoa
        </div>
        <div className="time">
          <div className="icon">
            <i class="fa-solid fa-clock"></i>{" "}
          </div>
          Giao ngay
        </div>
        <div className="btn_change">
          <Link to="#">
            <div className="btn_change_location">Thay đổi</div>
          </Link>
        </div>
      </div>
    </>
  );
}
