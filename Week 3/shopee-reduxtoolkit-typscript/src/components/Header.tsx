import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="header">
      <div className="shopee__container">
        <div className="header__wrapper">
          <div className="header__connection">
            <span>Kênh người bán | Trở thành người bán |</span>
            <span className="connecttion__text">Kết nối</span>
          </div>
          <div className="header__login">
            <Link to="/register" className="header__signup">Đăng kí</Link>
            <Link to="/login" className="header__signin">Đăng nhập</Link>
          </div>
        </div>
        <Navbar />
      </div>
    </div>
  );
};

export default Header;
