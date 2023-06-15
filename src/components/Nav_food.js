import React, { Component } from "react";
import "../styles/nav_food.scss";
import bestseller from "../assets/img/Trang đầu/1.jpg";
import combo1nguoi from "../assets/img/Trang đầu/2.jpg";
import combonhom from "../assets/img/Trang đầu/3.jpg";
import mi from "../assets/img/Trang đầu/4.jpg";
import douong from "../assets/img/Trang đầu/5.jpg";
import combo1 from "../assets/img/Trang đầu/6.jpg";
import combo2 from "../assets/img/Trang đầu/7.jpg";
import Food from "./Order/Food";
import { Link, NavLink } from "react-router-dom";
export default class Nav_food extends Component {
  state = {
    arr: [
      {
        id: 1,
        name: "bestseller",
        imgFood: bestseller,
        nameFood: "bestseller",
      },
      {
        id: 2,
        name: "combo1",
        imgFood: combo1nguoi,
        nameFood: "combo 1 người",
      },
      { id: 3, name: "combon", imgFood: combonhom, nameFood: "combo nhóm" },
      { id: 4, name: "noodles", imgFood: mi, nameFood: "mì indomiee" },
      { id: 5, name: "drinks", imgFood: douong, nameFood: "món phụ & đồ uống" },
    ],
    listID: "suggest",
    listName: "Có thể bạn sẽ thích",
    arrFood: [
      {
        id: 1,
        imgSuggest: combo1,
        nameSuggest: "combo 1",
        price: 70000,
        contentSuggest:
          "1 Mì INDOMIEE Gà Popcorn + 5 Nem Chua Rán + 1 Coca Lon",
      },
      {
        id: 2,
        imgSuggest: combo2,
        nameSuggest: "combo 2",
        price: 110000,
        contentSuggest:
          "1 Mì INDOMIEE Gà Popcorn + 1 Mì INDOMIEE Thập Cẩm + 5 Nem Chua Rán + 2 Coca Lon",
      },
    ],
  };

  render() {
    return (
      <div className="list_food">
        <div className="category">
          <div className="title_category">
            <p>Danh mục món ăn </p>
            <hr />
          </div>
          <div className="name_category">
            {this.state.arr.map((item, index) => {
              return (
                <Link to={"/order/" + item.name}>
                  <div className={item.name} key={item.id}>
                    <div className="img_content">
                      <img src={item.imgFood} alt=""></img>
                    </div>
                    <div className="name_content">
                      <p>
                        {item.nameFood}{" "}
                        <i className="fa-solid fa-arrow-right"></i>
                      </p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
        <Food data={this.state} />;
      </div>
    );
  }
}
