import { useEffect, useState } from "react";
import { fetchOrders, removeOrder } from "../store/ordersSlice";
import { useAppDispatch, useAppSelector } from "../store/store";
import OrderForm from "./OrderForm";

export interface Order {
  id: String;
  title: String;
  price: Number;
  desc: String;
  image: String;
  quantity: Number;
}
const OrderList = () => {
  const dispatch = useAppDispatch();
  const orders = useAppSelector((state) => state.order.orders);

  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);

  const handleDeleteOrder = (orderId: number) => {
    if (window.confirm("Bạn có chắc chắn muốn xóa đơn hàng này?")) {
      dispatch(removeOrder(orderId));
    }
  };

  // interface OrderFormProps {
  //   toggle: () => void;
  // }
  // const handleToggle = () => {
  //   setToggle(!toggle);
  // };
  const [toggle, setToggle] = useState(false);
  return (
    <div className="orderlist">
      <h2>Danh sách đơn hàng</h2>
      {/* <button onClick={handleToggle}>Add Order</button> */}
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Tên sản phẩm</th>
            <th>Giá</th>
            <th>Số lượng</th>
            <th>Tổng tiền</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
        {orders.map((order: Order) => (
            <tr key={order.id.toString()}>
              <td>{order.id.toString()}</td>
              <td>{order.title.toString()}</td>
              <td>{order.price.toString()}</td>
              <td>{Number(order.quantity)}</td>
              <td>{Number(order.price) * Number(order.quantity)}</td>
              <td>
                <button>Edit</button>
                <button onClick={() => handleDeleteOrder(Number(order.id))}>Delete</button>
              </td>
            </tr>
          ))}
          {/* {toggle && <OrderForm toggle={handleToggle} />} */}
        </tbody>
      </table>
    </div>
  );
};

export default OrderList;
