import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Logo from "../components/Logo";
import { useAppSelector, useAppDispatch } from "../store/store";
import { changeQuantity, removeFromCart } from "../store/productSlice";
import { ChangeEvent, useRef, useState, useEffect, useMemo } from 'react';

type IProductProps = {
  id: String,
  title: String,
  price: Number,
  desc: String,
  image: String,
  quantity:number
}

const Cart = () => {
  const navigate = useNavigate();
  const products = useAppSelector((state) => state.product?.products);
  const handlePurchase = (event: any) => {
    event.preventDefault();
    navigate("/purchase", { state: { products } });
  };
  const totalPrice = useMemo(() => {
    return products.reduce((acc: any, curr: any) => {
      return Number(acc) + Number(curr.price) * Number(curr.quantity);
    }, 0);
  }, [products]);
  const quantityRef = useRef<HTMLInputElement>(null);
  const idRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();

  //change quantity --BUG---------------------
  const [quantity, setQuantity] = useState<number>(1);
  const handleChangeQuantity = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const quantity = Number(quantityRef.current?.value);
    const id = Number(idRef.current?.value);
    dispatch(
      changeQuantity({
        id: String(id),
        quantity: quantity,
      })
    );
  };
  //--------------------------------------------
  const handleRemoveCart = (id: String) => {
    dispatch(
      removeFromCart({
        id: id,
      })
    );
  };
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
                <div className="content__text" key={String(product.id)} ref={idRef}>
                  <span className="text__title">
                    {product.title} Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit. Quam praesentium dignissimos repellendus
                    est ullam fugiat excepturi animi quibusdam eum dolore.
                  </span>
                  <span>{String(product.price)}</span>
                  <input
                    min={1}
                    type="number"
                    ref={quantityRef}
                    value={quantity}
                    onChange={handleChangeQuantity}
                  />
                  <span>
                    {Number(product.quantity) * Number(product.price)}
                  </span>
                  <button
                    className="btn_delete"
                    onClick={() => handleRemoveCart(String(product.id))}
                  >
                    Xóa
                  </button>
                </div>
              ))}
              <button className="content__btn" onClick={handlePurchase}>
                Mua Hàng
              </button>
            <h3>{totalPrice}</h3>
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
