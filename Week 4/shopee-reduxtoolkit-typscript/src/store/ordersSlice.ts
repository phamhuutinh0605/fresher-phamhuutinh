import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";

export interface Order {
  id: String;
  title: String;
  price: Number;
  desc: String;
  image: String;
  quantity: Number;
}
export const fetchOrders = createAsyncThunk<
  Order[],
  void,
  { rejectValue: string }
>("Orders/fetchOrders", async (_, thunkAPI) => {
  try {
    const response: AxiosResponse<Order[]> = await axios.get<Order[]>(
      "https://6183caa491d76c00172d1b4b.mockapi.io/api/product"
    ); // gửi request đến API mock
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue("Failed to fetch Orders");
  }
});

interface OrdersState {
  orders: Order[];
  status: "idle" | "loading" | "failed";
  error: string | null;
}

const initialState: OrdersState = {
  orders: [],
  status: "idle",
  error: null,
};

export const OrdersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    // Thêm sản phẩm mới
    addOrder: (state, action: PayloadAction<Order>) => {
      state.orders.push(action.payload);
    },
    // Xóa sản phẩm
    removeOrder: (state, action: PayloadAction<number>) => {
      state.orders = state.orders.filter(
        (order) => Number(order.id) !== action.payload
      );
    },
    // Sửa sản phẩm
    updateOrder: (state, action: PayloadAction<Order>) => {
      const index = state.orders.findIndex(
        (order) => order.id === action.payload.id
      );
      if (index !== -1) {
        state.orders[index] = action.payload;
      }
    },
  },
  extraReducers: (builder) => {
    // Xử lý trạng thái loading
    builder.addCase(fetchOrders.pending, (state) => {
      state.status = "loading";
    });
    // Xử lý khi lấy dữ liệu thành công
    builder.addCase(fetchOrders.fulfilled, (state, action) => {
      state.status = "idle";
      state.orders = action.payload;
    });
    // Xử lý khi lấy dữ liệu thất bại
    builder.addCase(fetchOrders.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.payload as string;
    });
  },
});

export default OrdersSlice.reducer;
export const { addOrder, removeOrder, updateOrder } = OrdersSlice.actions;
