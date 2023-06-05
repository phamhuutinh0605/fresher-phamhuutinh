import React, { useState } from "react";
import { useRouter } from "next/router";
import Logo from "@/components/Organisms/Logo";
import Footer from "@/components/Organisms/Footer";

type Order = {
  title: string[];
  price: string[];
  amount: string[];
  total: number;
  address: string;
  phone: string;
  dateOrder: string;
  id: String;
}
const SuccessPage = () => {
  const router = useRouter();
  const { data } = router?.query;
  let dataParse: Order = {
    title: [],
    price: [],
    amount: [],
    total: 0,
    address: "",
    phone: "",
    dateOrder: "",
    id: "",
  };
  if (data) {
    dataParse = JSON.parse(data as string);
  }
  const [order, setOrder] = useState(dataParse);
  console.log(data)
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
                  {order?.title?.map((title: String, index: number) => {
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
