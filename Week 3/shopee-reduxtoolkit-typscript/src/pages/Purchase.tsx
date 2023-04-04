import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Logo from "../components/Logo";
const Purchase = () => {
  const location = useLocation();
  const [products, setCart] = useState(location.state.products || []);
  // total
  const [total, setTotal] = useState();
  useEffect(() => {
    setTotal(
      products?.reduce((acc: any, curr: any) => acc + Number(curr.price) * curr.quantity, 0)
    );
  }, [products]);

  //link to success form
  const navigate = useNavigate();
  const paymentOrder = async () => {
    //post order
    const date = new Date();
    const data = {
      title: products.map((product: any) => {
        return product.title;
      }),
      price: products.map((product: any) => {
        return product.price;
      }),
      amount: products.map((product: any) => {
        return product.quantity;
      }),
      total: total,
      address: "20 nguyễn khoái, quận 4",
      phone: "0977965165",
      dateOrder:
        date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear(),
      id: date,
    };
    await fetch("https://64240b7f4740174043318cf3.mockapi.io/order", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        navigate("/successpage", { state: { data } });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    console.log(products, data);
  };

  const handleSubString = (title: String) => {
    return title.length > 10 ? title.slice(0, 10) + "..." : title
  }
  return (
    <>
      <div className="cart register__title">
        <div className="shopee__container">
          <div className="cart__title">
            <Logo />
            <h4 className="">
              <small>|</small> Thanh Toán
            </h4>
          </div>
        </div>
        <div className="cart__bg">
          <hr />
          <div className="cart__content">
            <div className="content__title purchase__title">
              <h5>
                <span>
                  <FontAwesomeIcon icon={faLocationDot} />
                </span>
                Địa chỉ nhận hàng
              </h5>
              <div className="address__information">
                <span>
                  <b>Phạm Hữu Tình</b>
                </span>
                <span>
                  <b>0977965165</b>
                </span>
                <span>20 Nguyễn Khoái, phường 2, Quận 4, TP.HCM</span>
                <button className="btn_delete">
                  <span className="btn__change">Thay đổi</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="cart__bg">
          <div className="cart__content">
            <div className="content__title">
              <span>Tên sản phẩm</span>
              <span>Giá</span>
              <span>Số lượng</span>
              <span>Thành tiền</span>
            </div>
            {products?.map((product: any) => (
              <div className="content__text" key={String(product.id)}>
                <span>{handleSubString(product.title)}</span>
                <span>{product.price}</span>
                <span>{product.quantity}</span>
                <span>{product.price * product.quantity}</span>
              </div>
            ))}
            <hr />
            <div className="purchase__payment">
              <button className="content__btn" onClick={paymentOrder}>
                Thanh Toán
              </button>
              <span>
                <b>{total} VNĐ</b>
              </span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Purchase;
