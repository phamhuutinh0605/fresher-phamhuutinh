import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import Logo from "../components/Logo";

const SuccessPage = () => {
  const location = useLocation();
  const [order, setOrder] = useState(location.state.data);

  return (
    <>
      <div className="successpage">
        <div className="cart register__title">
          <div className="shopee__container">
            <div className="cart__title">
             <Logo/>
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
                <h3>Tên sản phẩm:{order.title} </h3>
                <h3>Đơn giá: {order.price}</h3>
                <h3>Số lượng:{order.amount}</h3>
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
