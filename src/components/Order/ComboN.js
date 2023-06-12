import cbn_1 from "../../assets/img/COMBO NHÓM/1.jpg";
import cbn_2 from "../../assets/img/COMBO NHÓM/2-01.jpg";
import cbn_3 from "../../assets/img/COMBO NHÓM/3-01.jpg";
import cbn_4 from "../../assets/img/COMBO NHÓM/4-01.jpg";
import React, { Component } from "react";
import Food from "./Food";
export default class ComboN extends Component {
  state = {
    listID: "combon",
    listName: "Combo Nhóm",
    arrFood: [
      {
        id: 1,
        imgSuggest: cbn_1,
        nameSuggest: "combo nhóm 1",
        price: 110000,
        contentSuggest:
          "1 Mì INDOMIEE Gà Popcorn + 1 Mì INDOMIEE Thập Cẩm + 5 Nem Chua Rán + 2 Coca Lon",
      },
      {
        id: 2,
        imgSuggest: cbn_2,
        nameSuggest: "combo nhóm 2",
        price: 115000,
        contentSuggest:
          "1 Mì INDOMIEE Sủi Cảo + 1 Mì INDOMIEE Chả Tôm + 5 Nem Chua Rán + 2 Trà Chanh",
      },
      {
        id: 3,
        imgSuggest: cbn_3,
        nameSuggest: "combo nhóm 3",
        price: 45000,
        contentSuggest:
          "1 Mì INDOMIEE Đặc Biệt + 1 Mì INDOMIEE Thập Cẩm + 5 Nem Chua Rán + 2 Trà Chanh",
      },
      {
        id: 4,
        imgSuggest: cbn_4,
        nameSuggest: "combo nhóm 4",
        price: 30000,
        contentSuggest: "1 Mì INDOMIEE Rau củ + 1 Coca Lon",
      },
    ],
  };
  render() {
    return <Food data={this.state} />;
  }
}
