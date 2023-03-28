import React from "react";

import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../store/store';
import { addToCart } from "../store/productSlice";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Product = ({ id, title, price, desc, image }: { id: String | undefined, title: String | undefined, price: Number, desc: String | undefined, image: String }) => {

  // const history = useHistory();
  // const redirect = (id: string) => {
  //   history.push(`/update-book/${id}`);
  // };

  let quantity = 0;
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const dispatch = useAppDispatch();
  const handleAddToCart = (id: String | undefined, title: String | undefined, price: Number, desc: String | undefined, image: String) => {
    console.log("product", id)
    dispatch(addToCart({
      id: String(id), title: String(title), price, desc: String(desc), image, quantity
    }))
  }
  const navigate=useNavigate();
  const handleRedirects=()=>{
    navigate(`/detail/${id}`,{state:{id, title, price, desc, image,quantity }})
  }
  return (
    <div className="product__item">
      <div className="item__card">
        <img alt="green iguana" src={String(image)} style={{ width: "100%" }} />
        <div className="product__content">
          <h5>{title}</h5>
        </div>
        <div className="product__action">
          <button onClick={handleOpen} className="btn__outline">
            Chi Tiết
          </button>
          <button>
            <Link
              to="cart"
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
                <img alt="green iguana" src={String(image)} />
                <span>{desc}</span>
                <div className="product__action">
                  <div className="card__action">
                    <button  className="btn__outline" onClick={handleRedirects}>
                    <FontAwesomeIcon icon={faEye} />
                    </button>
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
          </div>
        </div>
      )}
    </div>
  );
};

export default Product;
