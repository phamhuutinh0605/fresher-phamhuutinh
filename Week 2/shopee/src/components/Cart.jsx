import React from "react";
import { CartState } from "../context/Context";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import Logo from "./Logo";
const Cart = () => {
  const {
    state: { cart },
    dispatch,
  } = CartState();
  const navigate = useNavigate();
  const handlePurchase = () => {
    navigate("/purchase", { state: { cart } });
  };
  const handleChangeQuantity = (e, product) => {
    dispatch({
      type: "CHANGE_QUANTITY",
      payload: {
        id: product.id,
        quantity: e.target.value,
      },
    });
  };
  const handleDeleteCart = (product) => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: product,
    });
  };
  return (
    <>
      <div className="cart register__title">
        <div className="shopee__container">
          <div className="cart__title">
            <Logo/>
            <h4 className="">| Giỏ Hàng</h4>
          </div>
        </div>
        {cart.length > 0 ? (
          <div className="cart__bg">
            <div className="cart__content">
              <div className="content__title">
                <span>Tên sản phẩm</span>
                <span>Đơn giá</span>
                <span>Số lượng</span>
                <span>Thành tiền</span>
                <span>Thao tác</span>
              </div>
              {cart.map((product) => (
                <div className="content__text" key={product.id}>
                  <span>{product.title}</span>
                  <span>{product.price}</span>
                  <input
                    min={1}
                    type="number"
                    value={product.quantity|1}
                    onChange={(e) => handleChangeQuantity(e, product)}
                  />
                  <span>{"" + product.quantity * product.price}</span>
                  <button
                    className="btn_delete"
                    onClick={() => handleDeleteCart(product)}
                  >
                    Xóa
                  </button>
                </div>
              ))}
              <button className="content__btn" onClick={handlePurchase}>
                Mua Hàng
              </button>
            </div>
          </div>
        ) : (
          <h2 style={{ textAlign: "center" }}>Bạn chưa chọn sản phẩm nào</h2>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Cart;
