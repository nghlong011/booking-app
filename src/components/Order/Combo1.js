import cb1_1 from "../../assets/img/COMBO 1 NGƯỜI/1.jpg";
import cb1_2 from "../../assets/img/COMBO 1 NGƯỜI/2-01.jpg";
import cb1_3 from "../../assets/img/COMBO 1 NGƯỜI/3-01.jpg";
import cb1_4 from "../../assets/img/COMBO 1 NGƯỜI/4-01.jpg";
import cb1_5 from "../../assets/img/COMBO 1 NGƯỜI/5-01.jpg";
import cb1_6 from "../../assets/img/COMBO 1 NGƯỜI/6-01.jpg";
import React, { Component } from "react";
import Food from "./Food";
export default class Combo1 extends Component {
  state = {
    listID: "combo1",
    listName: "Combo 1 người",
    arrFood: [
      {
        id: 1,
        imgSuggest: cb1_1,
        nameSuggest: "combo 1",
        price: 70000,
        contentSuggest:
          "1 Mì INDOMIEE Gà Popcorn + 5 Nem Chua Rán + 1 Coca Lon",
      },
      {
        id: 2,
        imgSuggest: cb1_2,
        nameSuggest: "combo 2",
        price: 45000,
        contentSuggest: "1 Mì INDOMIEE Thập Cẩm + 1 Trà Chanh",
      },
      {
        id: 3,
        imgSuggest: cb1_3,
        nameSuggest: "combo 3",
        price: 45000,
        contentSuggest: "1 Mì INDOMIEE Đặc Biệt + 1 Coca Lon",
      },
      {
        id: 4,
        imgSuggest: cb1_4,
        nameSuggest: "combo 4",
        price: 30000,
        contentSuggest: "1 Mì INDOMIEE Rau củ + 1 Coca Lon",
      },
      {
        id: 5,
        imgSuggest: cb1_5,
        nameSuggest: "combo 5",
        price: 45000,
        contentSuggest: "1 Mì INDOMIEE Chả Tôm + 1 Trà Chanh",
      },
      {
        id: 6,
        imgSuggest: cb1_6,
        nameSuggest: "combo 6",
        price: 30000,
        contentSuggest: "1 Mì INDOMIEE Sủi Cảo + 1 Trà Chanh",
      },
    ],
  };
  render() {
    return <Food data={this.state} />;
  }
}
