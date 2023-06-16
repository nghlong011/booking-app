import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function useQuantity() {
  const [totalQuantity, setTotalQuantity] = useState(0);
  const listCartItem = useSelector((state) => state.cart.listCartItem);

  useEffect(() => {
    const totalQuantity = listCartItem.reduce((acc, curr) => {
      return acc + curr.quantity;
    }, 0);
    setTotalQuantity(totalQuantity);
  }, [listCartItem]);

  return totalQuantity;
}
