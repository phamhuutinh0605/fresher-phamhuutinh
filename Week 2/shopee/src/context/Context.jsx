import React, { createContext, useEffect, useReducer, useState } from "react";
import { useContext } from "react";
import { cartReducer, productReducer } from "./Reducers";

const Cart = createContext();

const Context = ({ children }) => {

  const [state, dispatch] = useReducer(cartReducer, {
    products: [],
    cart: [],
  });
  const [productState, productDispatch] = useReducer(productReducer, {
    searchQuery: "",
  });
  return (
    <Cart.Provider value={{ state, dispatch, productState, productDispatch }}>
      {children}
    </Cart.Provider>
  );
};
export const CartState = () => {
  return useContext(Cart);
};

export default Context;
