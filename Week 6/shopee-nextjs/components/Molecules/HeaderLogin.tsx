import Link from 'next/link'
import React from 'react'

const HeaderLogin = () => {
  return (
    <div className="header__login">
      <Link href="/Register" className="header__signup">Đăng kí</Link>
      <Link href="/Login" className="header__signin">Đăng nhập</Link>
    </div>
  )
}

export default HeaderLogin