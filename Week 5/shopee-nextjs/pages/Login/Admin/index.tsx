import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import { useRouter } from "next/router";
import Link from "next/link";

const Admin = () => {

  const router = useRouter();
  const { users }: any = router?.query;
  const userParse = JSON.parse(users);
  const [user, setUser] = useState(userParse);

  //fetch product data
  // const dispatch=useAppDispatch()
  const products = useAppSelector(state => state.order?.orders)
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    fetch("https://6183caa491d76c00172d1b4b.mockapi.io/api/product")
      .then((response) => response.json())
      .then((data) => {
        setProductList(data);
      });
  }, []);

  //fetch order data
  const [orderList, setOrderList] = useState([]);
  useEffect(() => {
    fetch("https://64240b7f4740174043318cf3.mockapi.io/order")
      .then((response) => response.json())
      .then((data) => {
        setOrderList(data);
      });
  }, []);
  console.log(productList);
  //set toggle
  const [toggle, setToggle] = useState(true);
  const renderByType = (type: String) => {
    type === "p" ? setToggle(true) : setToggle(false);
  };

  // toggle popup
  const [open, setOpen] = useState(false);
  const handelOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  // add procduct
  const [addProduct, setAddProduct] = useState({});
  const [name, setName] = useState();
  const [desc, setDesc] = useState();
  const [img, setImg] = useState();
  const [price, setPrice] = useState();
  const onName = (value: any) => {
    setName(value);
  };
  const onDesc = (value: any) => {
    setDesc(value);
  };
  const onPrice = (value: any) => {
    setPrice(value);
  };
  const onImg = (value: any) => {
    setImg(value);
  };
  const handleAddProduct = async () => {
    const data = {
      id: productList.length + 1,
      name,
      desc,
      img,
      price,
    };
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
  };

  // remove product
  const handleRemoveProduct = async (id: String, e: any) => {
    console.log(id);
    e.preventDefault();
    await fetch(
      `https://6183caa491d76c00172d1b4b.mockapi.io/api/product/${id}`,
      {
        method: "DELETE", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        // body: JSON.stringify(data),
      }
    )
      .then((response) => response.json())
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <div className="sidebar">
      <div className="top">
        <Link href="/" style={{ textDecoration: "none" }}>
          <span className="logo">{user.username}</span>
        </Link>
      </div>
      <hr />
      <div className="sidebar__wrapper">
        <div className="sidebar__menu">
          <ul>
            <p className="title">LISTS</p>
            <li>
              <span onClick={() => renderByType("p")}>Products</span>
            </li>
            {/* </Link> */}
            <li>
              <span onClick={() => renderByType("o")}>Orders</span>
            </li>
            <li>
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
          {toggle &&
            productList.map((user: any) => {
              return (
                <div className="sidebar__item" key={user.id}>
                  <p>{user.id}</p>
                  <p>{user.title}</p>
                  <p>{user.price}</p>
                  <div className="sidebar__action--btn">
                    <Link
                      href=""
                      className="sidebar__item--del"
                      onClick={(e) => handleRemoveProduct(user.id, e)}
                    >
                      Delete
                    </Link>
                    <Link href="" className="sidebar__item--edit">
                      Edit
                    </Link>
                  </div>
                </div>
              );
            })}
          {/* {
            toggle === false && <OrderList />
            // orderList.map((user: any) => {
            //   return (
            //     <div className="sidebar__item" key={user.id}>
            //       <p>{user.id}</p>
            //       <p>{user.title}</p>
            //       <p>{user.price}</p>
            //       <div className="sidebar__action--btn">
            //         <Link to="" className="sidebar__item--del" onClick={(e) => handleRemoveProduct(user.id, e)}>Delete</Link>
            //         <Link to="" className="sidebar__item--edit">Edit</Link>
            //       </div>
            //     </div>
            //   )
            // })
          } */}
        </div>
        {toggle && (
          <div className="sidebar__action">
            <div className="sidebar__action-add">
              <a onClick={handelOpen} className="link">
                Add New
              </a>
            </div>
          </div>
        )}
      </div>
      {open && (
        <div className="product__modal">
          <div className="modal__fade">
            <div className="modal__box">
              <div className="box__title">
                <h2>ADD NEW</h2>
              </div>
              <div className="">
                <span>TÊN SẢN PHẨM</span>
                <input
                  type="text"
                  className="review__input"
                  onChange={(e) => onName(e.target.value)}
                />
                <span>MÔ TẢ</span>
                <input
                  className="review__input"
                  type="text"
                  onChange={(e) => onDesc(e.target.value)}
                />
                <span>HÌNH ẢNH</span>
                <input
                  className="review__input"
                  type="text"
                  onChange={(e) => onImg(e.target.value)}
                />
                <span> GIÁ </span>
                <input
                  className="review__input"
                  type="number"
                  onChange={(e) => onPrice(e.target.value)}
                />
              </div>
              <div className="review__order order__react">
                <button
                  className="modal__close btn__secondary "
                  onClick={handleClose}
                >
                  TRỞ LẠI
                </button>
                <button
                  className="modal__close btn__primary"
                  onClick={handleAddProduct}
                >
                  THÊM SẢN PHẨM
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Admin;
