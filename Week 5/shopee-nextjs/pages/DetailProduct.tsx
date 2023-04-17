import React, { useState } from 'react'
import { addToCart, changeQuantity } from '../store/productSlice';
import { useAppDispatch } from '../store/store';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useEffect } from 'react';
import Link from 'next/link';
import { FaStar } from 'react-icons/fa';
import { useRouter } from 'next/router';
import Image from 'next/image';

export type Product = {
  id: String;
  title: String;
  price: Number;
  desc: String;
  image: String;
  quantity: Number;
}
const DetailProduct = () => {
  const router = useRouter();
  const {product}: any = router.query;
  const productParse = JSON.parse(product);

  const [id, setId] = useState(productParse.id)
  const [title, setTitle] = useState(productParse.title)
  const [price, setPrice] = useState(productParse.price)
  const [image, setImage] = useState(productParse.image)
  const [desc, setDessc] = useState(productParse.desc);
  const [quantity, setQuantity] = useState(productParse.quantity);
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
    // return posts.map((item: any) => {
    //    if(item.idProduct.includes(id)){
    //     return item;
    //    }
    // })

    return posts.filter((item: any) => item.idProduct[0] === id || item.idProduct[1] === id || item.idProduct[2] === id)
  }
  return (
    <>
      <Header />
      <div className="product__detail">
        <div className="product__bg">
          <div className="detail__content shopee__container">
            <div className="detail__left">
              <Image alt="green iguana" src={String(image)} />
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
                    style={{ width: 40, border: "1px solid black" }}
                  />

                  <span style={{ marginLeft: 20 }}> 68 sản phẩm có sẵn</span>
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
                      href="cart"
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
                    <Image src={item.avatar} alt="" />
                  </div>
                  <div className="review__infor">
                    <div className="username">
                      <span>{item.username}</span>
                    </div>
                    <div className="rating">
                      <span >{Number(item.rating) > 4 ? 5 : item.rating} <FaStar style={{ color: "yellow" }} /></span>
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