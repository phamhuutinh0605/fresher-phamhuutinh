import Link from 'next/link';
import React from 'react'
import Navbar from './Navbar';
import { useRouter } from 'next/router';

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
            <Link href="/register" className="header__signup">Đăng kí</Link>
            <Link href="/Login" className="header__signin">Đăng nhập</Link>
          </div>
        </div>
        <Navbar />
      </div>
    </div>
  );
}

export default Header