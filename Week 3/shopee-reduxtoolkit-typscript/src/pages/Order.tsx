import { useLocation } from 'react-router-dom';
import Footer from '../components/Footer'
import Header from '../components/Header'
import React, { useState } from 'react'
import { useEffect } from 'react';

const Order = () => {
  const location = useLocation();
  const [orders, setOrders] = useState([]);
  const [user, setUser] = useState<any>({})
  useEffect(() => {
    console.log("location",location)
    if (location?.state?.user) {
      setUser(location.state.user)
    }
  },[location?.state?.user])
  useEffect(() => {
    fetch("https://64240b7f4740174043318cf3.mockapi.io/order")
      .then((response) => response.json())
      .then((data) => setOrders(data));
  }, [])

  console.log(location);
  const handleFilterOrder = () => {
    return orders.filter((order: any) => order.idUser === user?.id)
  }
  console.log(handleFilterOrder())
  const [open, setOpen] = React.useState(false);
  const [order, setOrder] = useState<any>()
  const handleOpen = (order: any) => {
    setOpen(true)
    setOrder(order)
  };
  console.log(order)
  const handleClose = () => setOpen(false);

  //change rating
  const [rating, setRating] = useState(5);
  const handleChangeRating = (value: any) => {
    setRating(value)
  }

  //change review text
  const [text, setText] = useState("");
  const handleChangeText = (value: any) => {
    console.log(value)
    setText(value)
  }

  //post review 
  const handlePostReview = async () => {
    const date = new Date();
    const data = {
      username: user.username,
      rating: rating,
      desc: text,
      date: date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear(),
      idProduct: order.idProduct,
      avatar: "https://static.vecteezy.com/system/resources/previews/001/993/889/non_2x/beautiful-latin-woman-avatar-character-icon-free-vector.jpg",
      id: date
    };
    await fetch("https://6183caa491d76c00172d1b4b.mockapi.io/api/review", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => { console.log(data) })
      .catch((error) => {
        console.error("Error:", error);
      });
    setOpen(false)
  }
  return (
    <>
      <Header />
      <div className="order">
        <div className="order__bg">
          <div className="order__content shopee__container">
            <h2>Đơn hàng của bạn</h2>
            {handleFilterOrder().map((order: any) => {
              return (
                <div className="review__order" key={order.id}>
                  <div className="avatar">
                    <span>{order.title} </span>
                  </div>
                  <div className="review__infor">
                    <div className="username">
                      <span>{order.price}</span>
                    </div>
                    <div className="desc">
                      <span>{order.amount}</span>
                    </div>
                    <div className="order__react">
                      <button className='btn__secondary' onClick={() => handleOpen(order)}>Đánh Giá</button>
                      <button className='btn__secondary'>Liên Hệ Người Bán</button>
                      <button className='btn__primary'>Mua Lại</button>
                    </div>
                    <hr style={{ width: "150vh", margin: "20px 0px", color: "#f5f5f5" }} />

                  </div>
                </div>
              )
            })}
            {open && order && (
              (
                <div className="product__modal">
                  <div className="modal__fade" >
                    <div className="modal__box">
                      <div className="box__title">
                        <h2 >
                          {order.title}
                        </h2>
                      </div>
                      <div className="review__rating">
                        <span>Chất lượng sản phẩm</span>
                        <input type="number" min={1} max={5} value={rating} onChange={(e) => handleChangeRating(e.target.value)} />
                      </div>
                      <input className='review__input' type="text" placeholder='Hãy chia sẻ những điều bạn thích về sản phẩm này...'
                        onChange={(e) => handleChangeText(e.target.value)}
                      />
                      <div className="review__order order__react">
                        <button className="modal__close btn__secondary " onClick={handleClose}>
                          TRỞ LẠI
                        </button>
                        <button className="modal__close btn__primary" onClick={handlePostReview}>
                          HOÀN THÀNH
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Order