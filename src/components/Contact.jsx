import React, { Component } from "react";
import logo from "../assets/img/logo.png";
import "../styles/contact.scss";

export default function Contact(props) {
  return (
    <>
      {props.isShowImage && <div className="shipper-img"></div>}
      <div id="contact" className="contact text-center">
        <div className="contact_logo">
          <div className="logo">
            <img src={logo} alt="logo"></img>
          </div>
          <div className="form_contact">
            <p>Đăng ký nhận thông tin khuyến mãi</p>
            <div className="row">
              <input type="text" placeholder="Email*" />
              <button type="submit">Gửi ngay </button>
            </div>
          </div>
        </div>
        <div className="contact_info">
          <div className="about_text">
            <h2>Thông tin</h2>
            <p>Tin tức</p>
            <p>Khuyến mãi</p>
            <p>Tuyển dụng</p>
            <p>Nhượng quyền</p>
          </div>
          <div className="contact_support">
            <h2>Hỗ trợ</h2>
            <p>Điều khoản sử dụng</p>
            <p>Chính sách bảo mật</p>
            <p>Chính sách giao hàng</p>
            <p>Chăm sóc khách hàng</p>
          </div>
          <div className="contact_follow">
            <h2>Theo dõi</h2>
            <p>
              <i className="fa-brands fa-facebook"></i>Facebook
            </p>
            <p>
              <i className="fa-brands fa-instagram"></i>Instagram
            </p>
          </div>
        </div>
      </div>
      <div className="ripple"></div>
    </>
  );
}
