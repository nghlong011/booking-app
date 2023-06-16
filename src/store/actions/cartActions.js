export const ADD_CART_ITEM = "ADD_CART_ITEM";
export const addCartItem = (cartItem) => {
  return {
    type: ADD_CART_ITEM,
    cartItem,
  };
};

export const REDUCE_CART_ITEM = "REDUCE_CART_ITEM";
export const reduceCartItem = (cartItem) => {
  return {
    type: REDUCE_CART_ITEM,
    cartItem,
  };
};

export const REMOVE_CART_ITEM = "REMOVE_CART_ITEM";
export const removeCartItem = (cartItemId) => {
  return {
    type: REMOVE_CART_ITEM,
    cartItemId,
  };
};
