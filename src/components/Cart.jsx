import React, { useEffect, useMemo, useState } from "react";
import "../styles/Cart.scss";
import { isExistArrayAndNotEmpty } from "../utils/condition";
import Cart_header from "./Cart_header";
import Contact from "./Contact";
import { useDispatch, useSelector } from "react-redux";
import {
  addCartItem,
  reduceCartItem,
  removeCartItem,
} from "../store/actions/cartActions";
import { SHIPPING_CHARGES_VND } from "../utils/constant";
import useQuantity from "../hooks/useQuantity";

export default function Cart() {
  const dispatch = useDispatch();
  const listCartItem = useSelector((state) => state.cart.listCartItem);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const totalPrice = listCartItem.reduce((acc, curr) => {
      return acc + curr.price * curr.quantity;
    }, 0);
    setTotalPrice(totalPrice);
  }, [listCartItem]);

  useEffect(() => {
    document.getElementById("cart-title").scrollIntoView({ block: "end" });
  }, []);

  const totalQuantity = useQuantity();

  return (
    <>
      <Cart_header />
      <div className="cart-container container">
        <div className="cart-title" id="cart-title">
          Giỏ hàng của tôi
        </div>
        {isExistArrayAndNotEmpty(listCartItem) ? (
          <>
            <div className="cart-content">
              <div className="cart-content-left">
                <div className="list-cart-item">
                  {listCartItem.map((item) => {
                    return (
                      <div key={item.id} className="cart-item">
                        <div
                          className="cart-item-left"
                          style={
                            item.imgSuggest
                              ? {
                                  backgroundImage: `url(${item.imgSuggest})`,
                                }
                              : {}
                          }
                        ></div>
                        <div className="cart-item-center">
                          <div className="cart-item-center-name">
                            {item.nameSuggest}
                          </div>
                          <div className="cart-item-center-text">
                            {item.contentSuggest}
                          </div>
                          <div className="cart-item-center-bonus mt-2">
                            <span>Chỉnh sửa</span>
                            <span
                              className="ml-2"
                              onClick={() => dispatch(removeCartItem(item.id))}
                            >
                              Xóa
                            </span>
                          </div>
                        </div>
                        <div className="cart-item-right">
                          <div className="cart-item-right-quantity">
                            <div
                              className="quantity-change"
                              onClick={() => dispatch(reduceCartItem(item))}
                            >
                              -
                            </div>
                            <span className="quantity-value mx-2">
                              {item.quantity}
                            </span>
                            <div
                              className="quantity-change"
                              onClick={() => dispatch(addCartItem(item))}
                            >
                              +
                            </div>
                          </div>
                          <div className="cart-item-right-price">
                            {Number(
                              item.price * item.quantity
                            ).toLocaleString()}
                            <sup>đ</sup>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="cart-content-right">
                <div className="cart-content-right-text text-header">
                  {totalQuantity} món
                </div>
                <div className="cart-content-right-text body-up">
                  <p>Bạn có mã giảm giá?</p>
                  <div className="promotion-code">
                    <input type="text" placeholder="Mã giảm giá" />
                    <button className="btn btn-apply">Áp dụng</button>
                  </div>
                </div>
                <div className="cart-content-right-text body-down">
                  <div className="detail-price">
                    <div>Tổng đơn hàng</div>
                    <div>
                      {Number(totalPrice).toLocaleString()}
                      <sup>đ</sup>
                    </div>
                  </div>
                  <div className="detail-price">
                    <div>Phí giao hàng</div>
                    <div>
                      {Number(SHIPPING_CHARGES_VND).toLocaleString()}
                      <sup>đ</sup>
                    </div>
                  </div>
                  <div className="detail-price">
                    <div>Tổng thanh toán</div>
                    <div>
                      {Number(
                        totalPrice + SHIPPING_CHARGES_VND
                      ).toLocaleString()}
                      <sup>đ</sup>
                    </div>
                  </div>
                </div>
                <div className="cart-content-right-text text-footer">
                  <div className="pay-button">
                    <div>Thanh toán</div>
                    <div>
                      {Number(
                        totalPrice + SHIPPING_CHARGES_VND
                      ).toLocaleString()}
                      <sup>đ</sup>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="cart-empty"></div>
          </>
        )}
      </div>
      <Contact />
    </>
  );
}
