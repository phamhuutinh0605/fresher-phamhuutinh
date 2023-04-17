import Logo from "../../components/Logo";
import Footer from "../../components/Footer";
import { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import Link from "next/link";

const Login = () => {

  const [users, setUsers] = useState([]);
  //fetch user data
  useEffect(() => {
    fetch("https://64240b7f4740174043318cf3.mockapi.io/user")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, [])

  // handle username and password
  const handleUserName = (value: any) => {
    setUserName(value)
  }
  const handlePassword = (value: any) => {
    setPassword(value)
  }
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const handleLogin = (e: any) => {
    e.preventDefault();
    users.map((user: any) => {
      if (user.username === username && user.password === password) {
        if (user.AdminType) {
          router.push({
            pathname: "/Login/Admin", query: { users:JSON.stringify(user) }
          })
          console.log("order-user", users)
        } else {
          router.push({
            pathname: "/", query: { users:JSON.stringify(user) }
          })
        }
      }
      else if (user.username === username && user.password !== password) {
        alert("Mật khẩu của bạn không đúng !")
        return
      }
    })
  }
  return (
    <>
      <div className="register">
        <div className="register__wrapper">
          <div className="shopee__container">
            <div className="register__bg">
              <div className="register__title">
                <div className="register__logo">
                  <Logo />
                  <h4 className="">Đăng nhập</h4>
                </div>
              </div>
              <div className="register__support">
                <Link href="https://help.shopee.vn/portal">Bạn cần giúp đỡ?</Link>
              </div>
            </div>
          </div>
          <div className="register__content">
            <div className="shopee__container">
              <div className="content__wrapper">
                <div className="register__left">
                  <Logo />
                  <div className="register__text">
                    <h4>
                      Nền tảng thương mại điện tử <br /> yêu thích ở Đông Nam Á
                      & Đài Loan
                    </h4>
                  </div>
                </div>
                <div className="register__right">
                  <form action="" className="register__form">
                    <h4>Đăng nhập</h4>
                    <div className="register__email">
                      <input type="text" onChange={(e) => handleUserName(e.target.value)} placeholder="Tài khoản" />
                    </div>
                    <div className="register__password">
                      <input type="password" onChange={(e) => handlePassword(e.target.value)} placeholder="Mật khẩu" />
                    </div>
                    <button className="search__button register__btn" onClick={(e) => handleLogin(e)}>
                      ĐĂNG NHẬP
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
