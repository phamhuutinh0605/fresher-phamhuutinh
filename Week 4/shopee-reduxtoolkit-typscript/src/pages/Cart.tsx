import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Logo from "../components/Logo";
import { useAppSelector, useAppDispatch } from '../store/store';
import { changeQuantity, removeFromCart } from "../store/productSlice";
import { ChangeEvent } from 'react';
const Cart = () => {

  const navigate = useNavigate();
  const products = useAppSelector((state) => state.product.products)
  const handlePurchase = () => {
    navigate("/purchase", { state: { products } });
  };
  
  const dispatch = useAppDispatch();
  const handleChangeQuantity = (id: String, e:ChangeEvent<HTMLInputElement>) => {
    dispatch(changeQuantity({
      id: String(id), quantity: parseInt(e.target.value)
    }))
  }
  const handleRemoveCart = (id: String) => {
    dispatch(removeFromCart({
      id: id
    }))
  }
  return (
    <>
      <div className="cart register__title">
        <div className="shopee__container">
          <div className="cart__title">
            <Logo />
            <h4 className="">| Giỏ Hàng</h4>
          </div>
        </div>
        {products.length > 0 ? (
          <div className="cart__bg">
            <div className="cart__content">
              <div className="content__title">
                <span>Tên sản phẩm</span>
                <span>Đơn giá</span>
                <span>Số lượng</span>
                <span>Thành tiền</span>
                <span>Thao tác</span>
              </div>
              {products.map((product) => (
                <div className="content__text" key={String(product.id)}>
                  <span className="text__title">{product.title} Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam praesentium dignissimos repellendus est ullam fugiat excepturi animi quibusdam eum dolore.</span>
                  <span>{String(product.price)}</span>
                  <input
                    min={1}
                    type="number"
                    value={Number(product.quantity)}
                    onChange={(e) => handleChangeQuantity(String(product.id), e)}
                  />
                  <span>{Number(product.quantity) * Number(product.price)}</span>
                  <button
                    className="btn_delete"
                    onClick={() => handleRemoveCart(String(product.id))}
                  >
                    Xóa
                  </button>
                </div>
              ))}
              <button className="content__btn"
                onClick={handlePurchase}
              >
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
