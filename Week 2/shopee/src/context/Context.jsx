import React, { createContext, useEffect, useReducer, useState } from "react";
import { useContext } from "react";
import { cartReducer, productReducer } from "./Reducers";

const Cart = createContext();

const Context = ({ children }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://6183caa491d76c00172d1b4b.mockapi.io/api/product")
      .then((res) => res.json())
      .then(
        (data) => {
          setProducts(data);
        },
        [products]
      );
  });
  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
  });
  const [productState, productDispatch] = useReducer(productReducer, {
    searchQuery: "",
  });
  return <Cart.Provider value={{ state, dispatch,productState, productDispatch }}>{children}</Cart.Provider>;
};
export const CartState = () => {
  return useContext(Cart);
};

export default Context;
