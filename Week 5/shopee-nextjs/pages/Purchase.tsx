import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Logo from "../components/Logo";
import { useRouter } from "next/router";
import { FaLocationArrow } from "react-icons/fa";
import { Order, ProductProp } from "@/types";
import { v4 as uuidv4 } from 'uuid';

type Product = {
  desc: string[];
  id: string;
  image: string;
  price: Number[];
  title: string[];
  quantity: Number[];
}
const Purchase = () => {

  const router = useRouter();
  const { productList } = router?.query;
  let productParse: Product[]=[
    {
      desc: [],
      id: "",
      image: "",
      price: [],
      title: [],
      quantity: [],
    }
  ]

  if (productList) {
    productParse = JSON.parse(productList as string)
  }
  const [products, setCart] = useState<Product[]>(productParse || []);
  // total
  const [total, setTotal] = useState(0);
  useEffect(() => {
    setTotal(
      products?.reduce((acc: Number, curr: Product) => Number(acc) + Number(curr.price) * Number(curr.quantity), 0)
      );
  }, [products]);

  //link to success form
  const paymentOrder = async () => {
    //post order
    const date = new Date();
    const data = {
      title: products?.map((product) => {
        return product.title;
      }),
      price: products?.map((product) => {
        return product.price;
      }),
      amount: products?.map((product) => {
        return product.quantity;
      }),
      total: Number(total),
      address: "20 nguyễn khoái, quận 4",
      phone: "0977965165",
      dateOrder:
        date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear(),
      id: uuidv4(),
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
        router.push({
          pathname: "/SuccessPage", query: { data: JSON.stringify(data) }
        });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    console.log(products, data);
  };

  const handleSubString = (title:string[]) => {
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
                  <FaLocationArrow />
                  Địa chỉ nhận hàng
                </span>
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
            {products.length > 0 && products?.map((product) => (
              <div className="content__text" key={String(product.id)}>
                <span>{handleSubString(product.title)}</span>
                <span>{Number(product.price)}</span>
                <span>{Number(product.quantity)}</span>
                <span>{Number(product.price) * Number(product.quantity)}</span>
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
