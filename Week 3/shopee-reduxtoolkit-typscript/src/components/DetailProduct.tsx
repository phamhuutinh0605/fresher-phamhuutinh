import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import { addToCart } from '../store/productSlice';
import { useAppDispatch } from '../store/store';

const DetailProduct = () => {
  const location = useLocation()
  const [id, setId] = useState(location.state.id)
  const [title, setTitle] = useState(location.state.id)
  const [price, setPrice] = useState(location.state.price)
  const [image, setImage] = useState(location.state.image)
  const [desc, setDessc] = useState(location.state.desc);
  const [quantity, setQuantity] = useState(location.state.quantity);

  const dispatch = useAppDispatch();
  const handleAddToCart = (id: String | undefined, title: String | undefined, price: Number, desc: String | undefined, image: String) => {
    console.log("product", id)
    dispatch(addToCart({
      id: String(id), title: String(title), price, desc: String(desc), image, quantity
    }))
  }
  return (
    <div className="product__modal">
      <div className="modal__fade">
        <div className="modal__box">
          <div className="box__title">
            <h2 >{title}</h2>
          </div>
          <img alt="green iguana" src={String(image)} />
          <span>{desc}</span>
          <div className="product__action">
            <div className="card__action">
              <button
                className="btn__outline"
                onClick={() => handleAddToCart(id, title, price, desc, image)}
              >
                Thêm Vào Giỏ
              </button>
              <button>
                <Link
                  to="cart"
                  className="btn__buy"
                // onClick={() =>
                //   dispatch({
                //     type: "ADD_TO_CART",
                //     payload: product,
                //   })
                // }
                >
                  Mua Ngay
                </Link>
              </button>
            </div>
            <span>$ {+price}</span>
          </div>
        </div>
      </div>
      <hr />
      <div className="product__review">
        <h3>Đánh Giá</h3>
        <div className="review__item">
          <div className="avatar">
            <img src="" alt="" />
          </div>
          <div className="username">
            <span>huutinh.0605</span>
          </div>
          <div className="rating">
            <input type="range" name="" id="" />
          </div>
          <div className="desc">
            <span>sản phẩm tốt, đáng mua</span>
          </div>
          <div className="dateReview">
            <span>08:37 27-03-2023</span>
          </div>
        </div>
        <button>OK</button>
      </div>
    </div>
  )
};
export default DetailProduct;