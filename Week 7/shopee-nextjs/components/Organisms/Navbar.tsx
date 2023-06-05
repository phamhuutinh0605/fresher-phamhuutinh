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
        <div className="navbar__logo__icon">
          <Logo />
        </div>
      </div>
      <div className="navbar__search">
        <input
          type="text"
          className="navbar__search__input"
        />
        <button className="navbar__search__button">
          <FaSearch />
        </button>
      </div>
      <div className="navbar__cart">
        <Link href="/Cart" className="navbar__cart__link">
          <span className="navbar__cart__link__iconNumber">
            {products.length}
          </span>
          <FaCartPlus />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
