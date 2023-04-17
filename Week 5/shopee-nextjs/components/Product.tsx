import React from "react";

import { useAppDispatch } from '../store/store';
import { addToCart } from "../store/productSlice";
import Link from "next/link";
import { FaEye } from "react-icons/fa";
import { useRouter } from "next/router";
import Image from "next/image";

export type Product = {
  id: String;
  title: String;
  price: Number;
  desc: String;
  image: String;
  quantity:Number
}

const Product = ({ id, title, price, desc, image }: { id: String , title: String , price: Number, desc: String , image: String }) => {

  let quantity = 0;
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [change, setChange] = React.useState(1);
  const dispatch = useAppDispatch();
  const handleAddToCart = (id: String , title: String , price: Number, desc: String , image: String) => {
    console.log("product", id)
    setChange(prev => prev + 1)
    dispatch(addToCart({
      id: String(id), title: String(title), price, desc: String(desc), image, quantity: change
    }))
  }
  const router = useRouter()
  const handleRedirects = () => {
    const product:Product = {
      id:String(id), title:String(title), price, desc:String(desc), image, quantity: change
    }
    router.push({
      pathname: "/DetailProduct", query: { product: JSON.stringify(product)}
    },undefined, { shallow: true })
    console.log("product",product)
  }
  return (
    <div className="product__item">
      <div className="item__card">
        <Image alt="green iguana" src={String(image)} width={500}  height={300}/>
        <div className="product__content">
          <h5>{title}</h5>
        </div>
        <div className="product__action">
          <button onClick={handleOpen} className="btn__outline">
            Chi Tiết
          </button>
          <button>
            <Link
              href="/Cart"
              onClick={() => handleAddToCart(id, title, price, desc, image)}
            >
              Mua Ngay
            </Link>
          </button>
          <span style={{ marginLeft: 50, fontWeight: "bolder" }}>
            $ {Number(price)}
          </span>
        </div>
      </div>
      {open && (
        <div>
          <div className="product__modal">
            <div className="modal__fade">
              <div className="modal__box">
                <div className="box__title">
                  <h2 >
                    {title}
                  </h2>
                  <button className="modal__close" onClick={handleClose}>
                    X
                  </button>
                </div>
                <Image alt="green iguana1111" src={String(image)} width={500} height={300}/>
                <span>{desc}</span>
                <div className="product__action">
                  <div className="card__action">
                    <button className="btn__outline" onClick={handleRedirects}>
                      <FaEye />
                    </button>
                    <button
                      className="btn__outline"
                      onClick={() => handleAddToCart(id, title, price, desc, image)}
                    >
                      Thêm Vào Giỏ
                    </button>
                    <button>
                      <Link
                        href="/Cart"
                        className="btn__buy"
                        onClick={() => handleAddToCart(id, title, price, desc, image)}
                      >
                        Mua Ngay
                      </Link>
                    </button>
                  </div>
                  <span>$ {+price}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Product;
