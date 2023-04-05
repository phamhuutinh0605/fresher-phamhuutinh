import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Order {
  id: String,
  title: String,
  price: Number,
  amount: Number,
  total: Number,
  address: String,
  phone: String,
  dateOrder: String,
  idUser: String,
  idProduct: []
}
interface OrderState {
  orders: Order[]
}
const initialState: OrderState = {
  orders: []
}

export const OrderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    fetchOrder: (state, action) => {
      state.orders = [...state.orders, action.payload]
      console.log("action", action.payload)
    },
    createOrder: (state, action: PayloadAction<{ id: String, title: String, price: Number, amount: number, total: Number, address: String, phone: String, dateOrder: String, idUser: String, idProduct: [] }>) => {
      state.orders = [...state.orders, {
        id: action.payload.id,
        title: action.payload.title,
        price: Number(action.payload.price),
        amount: action.payload.amount,
        total: action.payload.total,
        address: action.payload.address,
        phone: action.payload.phone,
        dateOrder: action.payload.dateOrder,
        idUser: action.payload.idUser,
        idProduct: action.payload.idProduct
      }]
    }
  }
})

export default OrderSlice.reducer;
export const { fetchOrder, createOrder } = OrderSlice.actions;