import Footer from "../components/Organisms/Footer";
import Logo from "../components/Organisms/Logo";
import Link from "next/link";

const Register = () => {
  return (
    <>
      <div className="register">
        <div className="register__wrapper">
          <div className="register__wrapper__logo shopee__container">
            <div className="register__bg">
              <div className="register__title">
                <div className="register__logo">
                 <Logo/>
                  <h4 className="">Đăng ký </h4>
                </div>
              </div>
              <div className="register__support">
                <Link href="https://help.shopee.vn/portal">Bạn cần giúp đỡ?</Link>
              </div>
            </div>
          </div>
          <div className="register__wrapper__content">
            <div className="shopee__container">
              <div className="register__wrapper__content__body">
                <div className="register__wrapper__content__body__left">
                  <Logo/>
                  <div className="register__wrapper__content__body__left__text">
                    <h4>
                      Nền tảng thương mại điện tử <br /> yêu thích ở Đông Nam Á
                      & Đài Loan
                    </h4>
                  </div>
                </div>
                <div className="register__wrapper__content__body__right">
                  <form action="" className="register__wrapper__content__body__right__form">
                    <h4>Đăng ký</h4>
                    <div className="register__wrapper__content__body__right__form__name">
                      <input type="text" placeholder="Tên của bạn" />
                    </div>
                    <div className="register__wrapper__content__body__right__form__phone">
                      <input type="text" placeholder="Số điện thoại" />
                    </div>
                    <div className="register__wrapper__content__body__right__form__email">
                      <input type="text" placeholder="Email" />
                    </div>
                    <div className="register__wrapper__content__body__right__form__password">
                      <input type="password" placeholder="Mật khẩu" />
                    </div>
                    <button className="search__button register__wrapper__content__body__right__form__btn">
                      ĐĂNG KÝ
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

export default Register;