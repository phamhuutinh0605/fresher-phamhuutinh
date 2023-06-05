export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, quantity: 1 }],
      };

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((product) => product.id !== action.payload.id),
      };
    case "CHANGE_QUANTITY":
      return {
        ...state,
        cart: state.cart.filter((product) =>
          product.id === action.payload.id
            ? (product.quantity = action.payload.quantity)
            : product.quantity
        ),
      };
    default:
      return state;
  }
};
export const productReducer = (state, action) => {
  switch (action.type) {
    case "FILTER_BY_NAME":
      return {
        ...state,
        searchQuery: action.payload,
      };

    default:
      return state;
  }
};
