import { User } from "@/types";
import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import { hydrate } from "react-dom";


export const fetchUsers = createAsyncThunk("users/fetchUsers", async (_, thunkAPI) => {
  try {
    const response: AxiosResponse<User[]> = await axios.get<User[]>("https://fakestoreapi.com/users"); 
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue("Failed to fetch Users");
  }
});
export const addUser = createAsyncThunk("users/addUser", async (body: Omit<User, 'id'>, thunkAPI) => {
  try {
    const response: AxiosResponse<User> = await axios.post<User>("https://fakestoreapi.com/users", body); 
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue("Failed to fetch Users");
  }
});
interface UsersState {
  users: User[];
  status: "idle" | "loading" | "failed";
  error: string | null;
}

const initialState: UsersState = {
  users: [],
  status: "idle",
  error: null,
};

export const UsersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    // Thêm sản phẩm mới
    // addOrder: (state, action: PayloadAction<Order>) => {
    //   state.orders.push(action.payload);
    // },
    // Xóa sản phẩm
    removeUser: (state, action: PayloadAction<number>) => {
      state.users = state.users.filter(
        (users) => Number(users.id) !== action.payload
      );
    },
    // Sửa sản phẩm
    updateUser: (state, action: PayloadAction<User>) => {
      const index = state.users.findIndex(
        (users) => users.id === action.payload.id
      );
      if (index !== -1) {
        state.users[index] = action.payload;
      }
    },
  },
  extraReducers: (builder) => {
    // Xử lý trạng thái loading
    builder.addCase(fetchUsers.pending, (state) => {
      state.status = "loading";
    });
    // Xử lý khi lấy dữ liệu thành công
    builder
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = "idle";
        state.users = action.payload;
      })
      .addCase(addUser.fulfilled, (state, action) => {
        state.users.push(action.payload)
      })
    // Xử lý khi lấy dữ liệu thất bại
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.payload as string;
    });
  },
});

export default UsersSlice.reducer;
export const { removeUser, updateUser } = UsersSlice.actions;
