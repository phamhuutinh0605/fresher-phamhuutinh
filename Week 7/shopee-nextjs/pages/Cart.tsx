import { useAppSelector, useAppDispatch } from '../store/store';
import { changeQuantity, removeFromCart } from "../store/productSlice";
import { useRouter } from "next/router";
import Logo from '@/components/Organisms/Logo';
import Footer from '@/components/Organisms/Footer';
const Cart = () => {

  const router = useRouter()
  const products = useAppSelector((state) => state.product.products)
  const handlePurchase = () => {
    router.push({
      pathname: "/Purchase",
      query: { productList: JSON.stringify(products) }
    });
  };

  const dispatch = useAppDispatch();
  const handleChangeQuantity = (id: String, value: Number) => {
    dispatch(changeQuantity({
      id: String(id), quantity: value
    }))
    console.log(value)
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
                  <span className="text__title">{product.title} </span>
                  <span>{String(product.price)}</span>
                  <input
                    min={1}
                    type="number"
                    value={Number(product.quantity)}
                    onChange={(e) => handleChangeQuantity(String(product.id), Number(e.target.value))}
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
