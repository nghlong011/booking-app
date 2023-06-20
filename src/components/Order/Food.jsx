import React from "react";
import "../../styles/food.scss";
import { Link, NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addCartItem } from "../../store/actions/cartActions";

export default function Food(props) {
  const dispatch = useDispatch();

  const handleAddItemToCart = (item) => {
    dispatch(addCartItem(item));
  };

  return (
    <div id={props.data.listID}>
      <div className="order_food">
        <div className="food">
          <div className="title_food">
            <p>{props.data.listName}</p>
            <hr />
          </div>
          <div className="name_food">
            {props.data.arrFood.map((item) => {
              return (
                <div key={item.id} id={props.data.listID + "_" + item.id}>
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
                  <button
                    onClick={() => {
                      handleAddItemToCart(item);
                    }}
                  >
                    Thêm vào giỏ hàng
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
