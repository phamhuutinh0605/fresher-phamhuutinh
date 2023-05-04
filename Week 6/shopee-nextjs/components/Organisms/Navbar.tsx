import Link from "next/link";
import React, { useRef } from "react";
import Logo from "./Logo";
import { FaCartPlus, FaSearch } from 'react-icons/fa';
import { useAppSelector } from "@/store/store";

const Navbar = () => {
  const products = useAppSelector((state) => state.product.products)

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
        />
        <button className="search__button">
          <FaSearch />
        </button>
      </div>
      <div className="navbar__cart">
        <Link href="/Cart">
          <span className="iconNumber">
            {products.length}
          </span>
          <FaCartPlus />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
