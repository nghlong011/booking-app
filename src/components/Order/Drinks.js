import douong1 from "../../assets/img/MÓN PHỤ & ĐỒ UỐNG/1.jpeg";
import douong2 from "../../assets/img/MÓN PHỤ & ĐỒ UỐNG/2.jpg";
import douong3 from "../../assets/img/MÓN PHỤ & ĐỒ UỐNG/3.jpeg";
import douong4 from "../../assets/img/MÓN PHỤ & ĐỒ UỐNG/4.jpeg";
import douong5 from "../../assets/img/MÓN PHỤ & ĐỒ UỐNG/5.jpeg";
import douong6 from "../../assets/img/MÓN PHỤ & ĐỒ UỐNG/6.png";
import douong7 from "../../assets/img/MÓN PHỤ & ĐỒ UỐNG/7.png";
import douong8 from "../../assets/img/MÓN PHỤ & ĐỒ UỐNG/8.png";
import React, { Component } from "react";
import Food from "./Food";
export default class Drinks extends Component {
  state = {
    listID: "drinks",
    listName: "Món phụ và đồ uống",
    arrFood: [
      {
        id: 1,
        imgSuggest: douong1,
        nameSuggest: "Nem chua rán(5 chiếc)",
        price: 25000,
        contentSuggest: "",
      },
      {
        id: 2,
        imgSuggest: douong2,
        nameSuggest: "Khoai tây lắc phô mai",
        price: 25000,
        contentSuggest: "",
      },
      {
        id: 3,
        imgSuggest: douong3,
        nameSuggest: "viên chiên hải sản",
        price: 25000,
        contentSuggest: "",
      },
      {
        id: 4,
        imgSuggest: douong4,
        nameSuggest: "phô mai que(4 chiếc)",
        price: 25000,
        contentSuggest: "",
      },
      {
        id: 5,
        imgSuggest: douong5,
        nameSuggest: "Trà chanh",
        price: 12000,
        contentSuggest: "",
      },
      {
        id: 6,
        imgSuggest: douong6,
        nameSuggest: "cocacola lon",
        price: 12000,
        contentSuggest: "",
      },
      {
        id: 7,
        imgSuggest: douong7,
        nameSuggest: "sprite lon",
        price: 12000,
        contentSuggest: "",
      },
      {
        id: 8,
        imgSuggest: douong8,
        nameSuggest: "nước khoáng",
        price: 12000,
        contentSuggest: "",
      },
    ],
  };
  render() {
    return <Food data={this.state} />;
  }
}
