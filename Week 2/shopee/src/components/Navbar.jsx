import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { CartState } from "../context/Context";
import { Link } from "react-router-dom";
import Logo from "./Logo";

const Navbar = () => {
  const {
    state: { cart },
    productDispatch,
  } = CartState();
  const handleFilterByName = (e) => {
    productDispatch({
      type: "FILTER_BY_NAME",
      payload: e.target.value,
    });
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
          onChange={(e) => handleFilterByName(e)}
        />
        <button className="search__button">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>
      <div className="navbar__cart">
        <Link to="cart">
          <span className="iconNumber">{cart.length}</span>
          <FontAwesomeIcon icon={faCartShopping} />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
