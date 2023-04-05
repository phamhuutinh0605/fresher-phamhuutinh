import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';

import { useState, useEffect } from 'react';

const Sidebar = () => {

  const location = useLocation();
  const [user, setUser] = useState(location.state.user);


  // //fetch order data
  const [orderList, setOrderList] = useState([]);
  useEffect(() => {
    fetch("https://64240b7f4740174043318cf3.mockapi.io/order")
      .then((response) => response.json())
      .then((data) => {
        setOrderList(data)
      })
  }, [])
  // remove product
  const handleRemoveOrder = async (id: String, e: any) => {
    console.log(id)
    e.preventDefault();
    await fetch(`https://64240b7f4740174043318cf3.mockapi.io/order/${id}`, {
      method: "DELETE", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      // body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .catch((error) => {
        console.error("Error:", error);
      });
  }


  //fetch product data
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    fetch("https://6183caa491d76c00172d1b4b.mockapi.io/api/product")
      .then((response) => response.json())
      .then((data) => {
        setProductList(data)
      })
  }, [])
  // add product
  const [product, setProduct] = useState({})
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [img, setImg] = useState("");
  const [price, setPrice] = useState("");
  const onName = (value: any) => {
    setName(value)
  }
  const onDesc = (value: any) => {
    setDesc(value)
  }
  const onPrice = (value: any) => {
    setPrice(value)
  }
  const onImg = (value: any) => {
    setImg(value)
  }

  //set toggle
  const [toggle, setToggle] = useState(true);
  const renderByType = (type: String) => {
    type === "p" ? setToggle(true) : setToggle(false);
  }
  // toggle popup
  const [open, setOpen] = useState(false);
  const handelOpen = () => {
    setOpen(true)
    setName("")
    setDesc("")
    setImg("")
    setPrice("")
  }
  const handleClose = () => {
    setOpen(false)
  }

  useEffect(() => {

  })
  const handleAddProduct = async () => {
    const data = {
      id: productList.length + 1,
      name,
      desc,
      img,
      price
    }
    setProduct(data)
    await fetch("https://6183caa491d76c00172d1b4b.mockapi.io/api/product", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .catch((error) => {
        console.error("Error:", error);
      });
  }
  // remove product
  const handleRemoveProduct = async (id: String, e: any) => {
    console.log(id)
    e.preventDefault();
    await fetch(`https://6183caa491d76c00172d1b4b.mockapi.io/api/product/${id}`, {
      method: "DELETE", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      // body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">{user.username}</span>
        </Link>
      </div>
      <hr />
      <div className="sidebar__wrapper">
        <div className="sidebar__menu">
          <ul>
            <p className="title">LISTS</p>
            {/* <Link to="/login/admin/users" style={{ textDecoration: "none" }}> */}
            <li>
              {/* <PersonOutlineIcon className="icon" /> */}
              <span onClick={() => renderByType("p")}>Products</span>
            </li>
            {/* </Link> */}
            <li  >
              {/* <StoreIcon className="icon" /> */}
              <span onClick={() => renderByType("o")}>Orders</span>
            </li>
            <li>
              {/* <LocalShippingIcon className="icon" /> */}
              <span>Delivery</span>
            </li>
          </ul>
        </div>
        <div className="sidebar__content">
          <div className="sidebar__content-title">
            <span>ID</span>
            <span>NAME</span>
            <span>{toggle ? "PRICE" : "TOTAL PRICE"}</span>
            <span>ACTION</span>
          </div>
          {toggle && productList.map((item: any) => {
            return (
              <div className="sidebar__item" key={item.id}>
                <p>{item.id}</p>
                <p>{item.title}</p>
                <p>{item.price}</p>
                <div className="sidebar__action--btn">
                  <Link to="" className="sidebar__item--del" onClick={(e) => handleRemoveProduct(item.id, e)}>Delete</Link>
                  <Link to="" className="sidebar__item--edit">Edit</Link>
                </div>
              </div>
            )
          })}
          {toggle === false &&
            orderList.map((item: any) => {
              return (
                <div className="sidebar__item" key={item.id}>
                  <p>{item.id}</p>
                  <p>{item.title}</p>
                  <p>{item.price}</p>
                  <div className="sidebar__action--btn">
                    <Link to="" className="sidebar__item--del" onClick={(e) => handleRemoveOrder(item.id, e)}>Delete</Link>
                    <Link to="" className="sidebar__item--edit">Edit</Link>
                  </div>
                </div>
              )
            })}
        </div>
        {
          toggle && (
            <div className="sidebar__action">
              <div className="sidebar__action-add">
                <a onClick={handelOpen} className="link">
                  THÊM SẢN PHẨM
                </a>
              </div>
            </div>
          )
        }
      </div>
      {open && (
        (
          <div className="product__modal ">
            <div className="modal__fade" >
              <div className="modal__box sidebar__open">
                <div className="box__title">
                  <h2>
                    THÊM SẢN PHẨM
                  </h2>
                </div>
                <div className="">
                  <span>TÊN SẢN PHẨM</span>
                  <input type="text" className='review__input' value={name}
                    onChange={(e) => onName(e.target.value)}
                  />
                  <span> MÔ TẢ</span>
                  <input className='review__input' type="text" value={desc}
                    onChange={(e) => onDesc(e.target.value)}
                  />
                  <span>HÌNH ẢNH</span>
                  <input className='review__input' type="text" value={img}
                    onChange={(e) => onImg(e.target.value)}
                  />
                  <span> GIÁ </span>
                  <input className='review__input' type="number" value={price}
                    onChange={(e) => onPrice(e.target.value)}
                  />
                </div>
                <div className="review__order order__react">
                  <button className="modal__close btn__secondary "
                    onClick={handleClose}
                  >
                    TRỞ LẠI
                  </button>

                  <button className="modal__close btn__primary"
                    onClick={handleAddProduct}
                  >
                    THÊM SẢN PHẨM
                  </button>
                </div>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default Sidebar;
