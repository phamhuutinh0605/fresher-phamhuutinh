import { Link, useNavigate } from 'react-router-dom';
import Logo from "../components/Logo";
import Footer from "../components/Footer";
import { useState, useEffect, ChangeEvent, ChangeEventHandler, MouseEventHandler, MouseEvent } from 'react';

type UserProp = {
  username: String;
  email: String;
  password: String;
  avatar: String;
  AdminType: true;
  id: String;
}
const Login = () => {

  const [users, setUsers] = useState([]);
  //fetch user data
  useEffect(() => {
    fetch("https://64240b7f4740174043318cf3.mockapi.io/user")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, [])

  // handle username and password
  const handleUserName = (e: ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value)
  }
  const handlePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleLogin = (e: MouseEvent) => {
    e.preventDefault();
    users.map((user: UserProp) => {
      if (user.username === username && user.password === password) {
        if (user.AdminType) {
          navigate("/login/admin", { state: { user, users } })
          console.log("order-user", users)
        } else {
          navigate("/login/user/order", { state: { user } })
        }
      }
      else if (user.username === username && user.password !== password) {
        alert("Mật khẩu của bạn không đúng !")
        return;
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
                <Link to="https://help.shopee.vn/portal">Bạn cần giúp đỡ?</Link>
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
                      <input type="text" onChange={handleUserName} placeholder="Tài khoản" />
                    </div>
                    <div className="register__password">
                      <input type="password" onChange={handlePassword} placeholder="Mật khẩu" />
                    </div>
                    <button className="search__button register__btn" onClick={handleLogin}>
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
