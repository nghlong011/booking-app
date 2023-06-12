import mi1 from "../../assets/img/MÌ INDOMIEE/1-01.jpg";
import mi2 from "../../assets/img/MÌ INDOMIEE/2-01.jpg";
import mi3 from "../../assets/img/MÌ INDOMIEE/3-01.jpg";
import mi4 from "../../assets/img/MÌ INDOMIEE/4-01.jpg";
import mi5 from "../../assets/img/MÌ INDOMIEE/5-01.jpg";
import mi6 from "../../assets/img/MÌ INDOMIEE/6-01.jpg";
import mi7 from "../../assets/img/MÌ INDOMIEE/7-01.jpg";
import mi8 from "../../assets/img/MÌ INDOMIEE/8-01.jpg";
import mi9 from "../../assets/img/MÌ INDOMIEE/9-01.jpg";
import mi10 from "../../assets/img/MÌ INDOMIEE/10-01.jpg";
import React, { Component } from "react";
import Food from "./Food";
export default class Noodles extends Component {
  state = {
    listID: "noodles",
    listName: "Mì INDOMIEE",
    arrFood: [
      {
        id: 1,
        imgSuggest: mi1,
        nameSuggest: "INDOMIEE Sủi Cảo",
        price: 33000,
        contentSuggest: "",
      },
      {
        id: 2,
        imgSuggest: mi2,
        nameSuggest: "INDOMIEE Thập Cẩm",
        price: 33000,
        contentSuggest: "",
      },
      {
        id: 3,
        imgSuggest: mi3,
        nameSuggest: "INDOMIEE Đặc Biệt",
        price: 33000,
        contentSuggest: "",
      },
      {
        id: 4,
        imgSuggest: mi4,
        nameSuggest: "INDOMIEE Rau củ",
        price: 19000,
        contentSuggest: "",
      },
      {
        id: 5,
        imgSuggest: mi5,
        nameSuggest: "INDOMIEE Chả Tôm",
        price: 33000,
        contentSuggest: "",
      },
      {
        id: 6,
        imgSuggest: mi6,
        nameSuggest: "INDOMIEE Mực Viên",
        price: 33000,
        contentSuggest: "",
      },
      {
        id: 7,
        imgSuggest: mi7,
        nameSuggest: "INDOMIEE Xúc Xích",
        price: 32000,
        contentSuggest: "",
      },
      {
        id: 8,
        imgSuggest: mi8,
        nameSuggest: "INDOMIEE Bò Viên",
        price: 28000,
        contentSuggest: "",
      },
      {
        id: 9,
        imgSuggest: mi9,
        nameSuggest: "INDOMIEE Cá Viên",
        price: 28000,
        contentSuggest: "",
      },
      {
        id: 10,
        imgSuggest: mi10,
        nameSuggest: "INDOMIEE Hồ Lô",
        price: 32000,
        contentSuggest: "",
      },
    ],
  };
  render() {
    return <Food data={this.state} />;
  }
}
