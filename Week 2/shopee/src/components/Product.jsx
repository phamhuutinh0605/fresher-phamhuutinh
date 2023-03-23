import React from "react";

import { CartState } from "../context/Context.jsx";
import { Link, NavLink } from "react-router-dom";

const Product = ({ product }) => {
  // useContext to set dipatch
  const {
    state: { cart },
    dispatch,
  } = CartState();

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="product__item">
      <div className="item__card">
        <img alt="green iguana" src={product.image} style={{ width: "100%" }} />
        <div className="product__content">
          <h5>{product.title}</h5>
        </div>
        <div className="product__action">
          <button onClick={handleOpen} className="btn__outline">
            Chi Tiết
          </button>
          <button>
            <Link
              to="cart"
              onClick={() =>
                dispatch({
                  type: "ADD_TO_CART",
                  payload: product,
                })
              }
            >
              Mua Ngay
            </Link>
          </button>
          <span style={{ marginLeft: 50, fontWeight: "bolder" }}>
            $ {product.price}
          </span>
        </div>
      </div>
      {open && (
        <div>
          <div className="product__modal">
            <div className="modal__fade">
              <div className="modal__box">
                <div className="box__title">
                  <h2 id="transition-modal-title" variant="h6" component="h2">
                    {product.title}
                  </h2>
                  <button className="modal__close" onClick={handleClose}>
                    X
                  </button>
                </div>
                <img alt="green iguana" src={product.image} />
                <span>{product.desc}</span>
                <div className="product__action">
                  <div className="card__action">
                    <button
                      className="btn__outline"
                      onClick={() =>
                        dispatch({
                          type: "ADD_TO_CART",
                          payload: product,
                        })
                      }
                    >
                      Thêm Vào Giỏ
                    </button>
                    <button>
                      <Link
                        to="cart"
                        className="btn__buy"
                        onClick={() =>
                          dispatch({
                            type: "ADD_TO_CART",
                            payload: product,
                          })
                        }
                      >
                        Mua Ngay
                      </Link>
                    </button>
                  </div>
                  <span>$ {product.price}</span>
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
