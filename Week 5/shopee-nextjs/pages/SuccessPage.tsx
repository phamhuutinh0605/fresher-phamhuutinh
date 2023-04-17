import React, { useState } from "react";
import Footer from "../components/Footer";
import Logo from "../components/Logo";
import { useRouter } from "next/router";

const SuccessPage = () => {
  const router = useRouter();
  const { data }: any = router?.query;
  const dataParse = JSON.parse(data)
  const [order, setOrder] = useState(dataParse);

  return (
    <>
      <div className="successpage">
        <div className="cart register__title">
          <div className="shopee__container">
            <div className="cart__title">
              <Logo />
              <h4 className="">
                <small>|</small> Đơn Hàng
              </h4>
            </div>
          </div>
          <div className="cart__bg">
            <hr />
            <div className="cart__content">
              <h2 >Đặt Thành Công !</h2>
            </div>
          </div>
          <div className="cart__bg">
            <div className="cart__content">
              <div className="order__information">
                <h3>- Sản phẩm: 
                  {order?.title.map((title: String, index: number) => {
                  return <p key={index}>{title}</p>
                })}
                 </h3>
                <h3>Thành tiền:{order.total}</h3>
                <h3>Địa chỉ:{order.address}</h3>
                <h3>Số điện thoại:{order.phone}</h3>
                <h3>Ngày đặt hàng:{order.dateOrder}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SuccessPage;
