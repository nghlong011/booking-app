import * as cartActions from "../actions/cartActions";

const initialState = {
  listCartItem: [],
};

const userReducer = (state = initialState, action) => {
  let newListCartItem = [...state.listCartItem];
  const existItem = newListCartItem.find(
    (cartItem) => cartItem.id === action.cartItem?.id
  );

  switch (action.type) {
    //
    case cartActions.ADD_CART_ITEM:
      if (!existItem) {
        const newItem = { ...action.cartItem, quantity: 1 };
        newListCartItem.push(newItem);
      } else {
        newListCartItem = state.listCartItem.map((cartItem) => {
          if (cartItem.id === action.cartItem?.id) {
            cartItem.quantity += 1;
          }
          return cartItem;
        });
      }

      return {
        ...state,
        listCartItem: newListCartItem,
      };

    //
    case cartActions.REDUCE_CART_ITEM:
      if (existItem.quantity === 1) {
        newListCartItem = state.listCartItem.filter(
          (item) => item.id !== action.cartItem?.id
        );
      } else {
        newListCartItem = state.listCartItem.map((cartItem) => {
          if (cartItem.id === action.cartItem?.id) {
            cartItem.quantity -= 1;
          }
          return cartItem;
        });
      }

      return {
        ...state,
        listCartItem: newListCartItem,
      };

    //
    case cartActions.REMOVE_CART_ITEM:
      return {
        ...state,
        listCartItem: state.listCartItem.filter(
          (item) => item.id !== action.cartItemId
        ),
      };

    default:
      return state;
  }
};

export default userReducer;
