import React, { Component } from "react";
import "../styles/nav_food.scss";
import cb1_1 from "../../assets/img/COMBO 1 NGƯỜI/1.jpg";
import { Link, NavLink } from "react-router-dom";
export default class Content_order extends Component {
  state = {
    arrFood: [
      {
        id: 1,
        name: "bestseller",
        imgFood: bestseller,
        nameFood: "bestseller",
      },
      {
        id: 2,
        name: "combo1nguoi",
        imgFood: combo1nguoi,
        nameFood: "combo 1 người",
      },
      { id: 3, name: "combonhom", imgFood: combonhom, nameFood: "combo nhóm" },
      { id: 4, name: "mi", imgFood: mi, nameFood: "mì indomiee" },
      { id: 5, name: "douong", imgFood: douong, nameFood: "món phụ & đồ uống" },
    ],
    arrSuggest: [
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
            {this.state.arrFood.map((item, index) => {
              return (
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
              );
            })}
          </div>
        </div>
        <div className="suggest">
          <div className="title_suggest">
            <p>Có thể bạn sẽ thích </p>
            <hr />
          </div>
          <div className="name_suggest">
            {this.state.arrSuggest.map((item, index) => {
              return (
                <div key={item.id}>
                  <div className="img_suggest">
                    <img src={item.imgSuggest} alt=""></img>
                  </div>
                  <div className="content_suggest">
                    <div>
                      <span>{item.nameSuggest}</span>
                      <span>{item.price}đ</span>
                    </div>
                    <p>{item.contentSuggest}</p>
                  </div>
                  <button>Thêm vào giỏ hàng</button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
