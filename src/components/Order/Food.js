import React, { Component } from "react";
import "../../styles/food.scss";
import { Link, NavLink } from "react-router-dom";
export default class Content_order extends Component {
  render() {
    return (
      <div id={this.props.data.listID}>
        <div className="order_food">
          <div className="food">
            <div className="title_food">
              <p>{this.props.data.listName}</p>
              <hr />
            </div>
            <div className="name_food">
              {this.props.data.arrFood.map((item, index) => {
                return (
                  <div key={item.id}>
                    <div className="img_food">
                      <img src={item.imgSuggest} alt=""></img>
                    </div>
                    <div className="content_food">
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
      </div>
    );
  }
}
