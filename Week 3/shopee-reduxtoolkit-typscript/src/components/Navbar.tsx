import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import { useAppSelector, useAppDispatch } from "../store/store";
import { filterProduct } from "store/productSlice";

const Navbar = () => {
  const products = useAppSelector((state) => state.product.products);

  const dispatch = useAppDispatch();
  const inputRef = useRef<HTMLInputElement>(null);
  const handleFilterByName = () => {
    const value = inputRef.current?.value;
    dispatch(filterProduct(String(value)));
  };

  return (
    <div className="navbar">
      <div className="navbar__logo">
        <div className="logo_icon">
          <Logo />
        </div>
      </div>
      <div className="navbar__search">
        <input
          type="text"
          className="search__input"
          ref={inputRef}
          onChange={handleFilterByName}
        />
        <button className="search__button">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>
      <div className="navbar__cart">
        <Link to="cart">
          <span className="iconNumber">{products.length}</span>
          <FontAwesomeIcon icon={faCartShopping} />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
