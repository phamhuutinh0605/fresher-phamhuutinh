import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import { addToCart, changeQuantity } from '../store/productSlice';
import { useAppDispatch } from '../store/store';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const DetailProduct = () => {
  const location = useLocation()
  const [id, setId] = useState(location.state.id)
  const [title, setTitle] = useState(location.state.title)
  const [price, setPrice] = useState(location.state.price)
  const [image, setImage] = useState(location.state.image)
  const [desc, setDessc] = useState(location.state.desc);
  const [quantity, setQuantity] = useState(location.state.quantity);
  const dispatch = useAppDispatch();

  // change quantity
  const handleChangeQuantity = (id: String, value: Number) => {
    setQuantity(value)
    dispatch(changeQuantity({
      id: String(id), quantity: value
    }))
    console.log(value)
  }

  //add to cart
  const handleAddToCart = (id: String | undefined, title: String | undefined, price: Number, desc: String | undefined, image: String, quantity: Number) => {
    console.log("product", id)
    dispatch(addToCart({
      id: String(id), title: String(title), price, desc: String(desc), image, quantity: quantity
    }))
  }

  const [posts, setPosts] = useState([])
  useEffect(() => {
    fetch(`https://6183caa491d76c00172d1b4b.mockapi.io/api/review`)
      .then((response) => response.json())
      .then((data) => setPosts(data));

  }, [])
  console.log(posts)

  const handleFilterPost = () => {
    return posts.filter((item: any) => item.idProduct === id)
  }
  return (
    <>
      <Header />
      <div className="product__detail">
        <div className="product__bg">
          <div className="detail__content shopee__container">
            <div className="detail__left">
              <img alt="green iguana" src={String(image)} />
            </div>
            <div className="detail__right">
              <div className="detail__information">
                <h2 >{title}</h2>
                <div className="detail__price">
                  <span>$ {price}</span>
                  <p>Gì cũng rẻ</p>
                  <p>Giá tốt nhất so với các sản phẩm cùng loại trên Shopee!</p>
                </div>
                <div className="detail__deal">
                  <span>Deal Sốc</span>
                  <span>Mua Kèm Deal Sốc</span>
                </div>
                <div className="detail__quantity">
                  <span>Số lượng </span>
                  <input
                    min={1}
                    type="number"
                    value={quantity}
                    onChange={(e) => handleChangeQuantity(String(id), Number(e.target.value))}
                  />
                  <span> 68 sản phẩm có sẵn</span>
                </div>

                <div className="detail__btn">
                  <button
                    className="btn__outline"
                    onClick={() => handleAddToCart(id, title, price, desc, image, quantity)}
                  >
                    Thêm Vào Giỏ
                  </button>
                  <button>
                    <Link
                      to="cart"
                      className="btn__buy"
                      onClick={() =>
                        handleAddToCart(id, title, price, desc, image, quantity)
                      }
                    >
                      Mua Ngay
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="detail__desc shopee__container">
            <h3>MÔ TẢ SẢN PHẨM</h3>
            <span>{desc}</span>
          </div>
          <div className="product__review shopee__container">
            <h3>ĐÁNH GIÁ SẢN PHẨM</h3>
            {handleFilterPost().map((item: any) => {
              return (
                <div className="review__item" key={item.id}>
                  <div className="avatar">
                    <img src={item.avatar} alt="" />
                  </div>
                  <div className="review__infor">
                    <div className="username">
                      <span>{item.username}</span>
                    </div>
                    <div className="rating">
                      <span >{Number(item.rating) > 4 ? 5 : item.rating} <FontAwesomeIcon icon={faStar} style={{ color: "yellow" }} /></span>
                    </div>
                    <div className="desc">
                      <span>{item.desc}</span>
                    </div>
                    <div className="dateReview">
                      <span style={{ color: "#7e8388" }}>--{String(item.date)}--</span>
                    </div>
                    <hr style={{ width: "120vh", margin: "20px 0px", color: "#f5f5f5" }} />
                  </div>
                </div>
              )
            })}

          </div>
        </div>
      </div >
      <Footer />
    </>
  )
};
export default DetailProduct;