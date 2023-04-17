import Link from "next/link";
import React, { useRef } from "react";
import Logo from "./Logo";
import { useAppSelector, useAppDispatch } from '../store/store';
import { filterProduct } from "../store/productSlice";
import { FaCartPlus, FaSearch } from 'react-icons/fa';
import { useRouter } from "next/router";

const Navbar = () => {
  const products = useAppSelector((state) => state.product.products)

  // // const inputRef = useRef<any>();
  // const dispatch = useAppDispatch();
  // const handleFilterByName = (e: any) => {
  //   e.preventDefault()
  //   dispatch(filterProduct(e.target.value))
  // }
 
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
        // ref={inputRef}
        // onChange={(e) => handleFilterByName(e)}
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
