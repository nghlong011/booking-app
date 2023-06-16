import React, { Component } from "react";
import cb1_1 from "../../assets/img/COMBO 1 NGƯỜI/3-01.jpg";
import cb1_2 from "../../assets/img/COMBO 1 NGƯỜI/2-01.jpg";
import Food from "./Food";

export default class Bestseller extends Component {
  state = {
    listID: "bestseller",
    listName: "Bestseller",
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
        price: 110000,
        contentSuggest:
          "1 Mì INDOMIEE Gà Popcorn + 1 Mì INDOMIEE Thập Cẩm + 5 Nem Chua Rán + 2 Coca Lon",
      },
    ],
  };
  render() {
    return <Food data={this.state} />;
  }
}
