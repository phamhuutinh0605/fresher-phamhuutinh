import { useState, useEffect, MouseEvent } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { User } from "@/types";
import Logo from "@/components/Organisms/Logo";
import Footer from "@/components/Organisms/Footer";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState([]);
  //fetch user data
  useEffect(() => {
    fetch("https://64240b7f4740174043318cf3.mockapi.io/user")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);
  console.log(users);
  // handle username and password
  const handleUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };
  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const handleLogin = (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) => {
    e.preventDefault();
    users.map((user: User) => {
      if (user.username === username && user.password === password) {
        if (user.AdminType) {
          router.push({
            pathname: "/Login/Admin",
            query: { users: JSON.stringify(user) },
          });
        }
      }
    });
  };
  return (
    <>
      <div className="register">
        <div className="register__wrapper">
          <div className="shopee__container register__wrapper__logo">
            <div className="register__bg">
              <div className="register__title">
                <div className="register__logo">
                  <Logo />
                  <h4 className="">Đăng nhập</h4>
                </div>
              </div>
              <div className="register__support">
                <Link href="https://help.shopee.vn/portal">
                  Bạn cần giúp đỡ?
                </Link>
              </div>
            </div>
          </div>
          <div className="register__wrapper__content">
            <div className="shopee__container">
              <div className="register__wrapper__content__body">
                <div className="register__wrapper__content__body__left">
                  <Logo />
                  <div className="register__wrapper__content__body__left__text">
                    <h4>
                      Nền tảng thương mại điện tử <br /> yêu thích ở Đông Nam Á
                      & Đài Loan
                    </h4>
                  </div>
                </div>
                <div className="register__wrapper__content__body__right">
                  <form action="" className="register__wrapper__content__body__right__form">
                    <h4>Đăng nhập</h4>
                    <div className="register__wrapper__content__body__right__form__email">
                      <input
                        type="text"
                        onChange={handleUserName}
                        placeholder="Tài khoản"
                      />
                    </div>
                    <div className="register__wrapper__content__body__right__form__password">
                      <input
                        type="password"
                        onChange={handlePassword}
                        placeholder="Mật khẩu"
                      />
                    </div>
                    <button
                      className="search__button register__wrapper__content__body__right__form__btn"
                      onClick={handleLogin}
                    >
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
