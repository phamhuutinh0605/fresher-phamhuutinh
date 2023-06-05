import Link from 'next/link'
import React from 'react'

const HeaderLogin = () => {
  return (
    <div className="header__wrapper__login">
      <Link href="/Register" className="header__wrapper__login__signup">Đăng kí</Link>
      <Link href="/Login" className="header__wrapper__login__signin">Đăng nhập</Link>
    </div>
  )
}

export default HeaderLogin