import { User } from "@/types";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";


export const fetchUsers = createAsyncThunk("users/fetchUsers", async (_, thunkAPI) => {
  try {
    const response: AxiosResponse<User[]> = await axios.get<User[]>("https://64240b7f4740174043318cf3.mockapi.io/user");
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue("Failed to fetch Users");
  }
});
export const addUser = createAsyncThunk("users/addUser", async (body: Omit<User, 'id'>, thunkAPI) => {
  try {
    const response: AxiosResponse<User> = await axios.post<User>("https://64240b7f4740174043318cf3.mockapi.io/user", body);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue("Failed to fetch Users");
  }
});
export const removeUser = createAsyncThunk("users/removerUser", async (id: String, thunkAPI) => {
  try {
    const response: AxiosResponse<User> = await axios.delete<User>(`https://64240b7f4740174043318cf3.mockapi.io/user/${id}`,);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue("Failed to fetch Users");
  }
});
export const editUser = createAsyncThunk("users/editUser", async (body: User, thunkAPI) => {
  try {
    const response: AxiosResponse<User> = await axios.put<User>(`https://64240b7f4740174043318cf3.mockapi.io/user/${body.id}`, body);
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
      .addCase(removeUser.fulfilled, (state, action) => {
        const userId = action.meta.arg;
        const index = state.users.findIndex((user) => user.id === userId);
        if (index !== -1) {
          state.users.filter(user => user.id !== String(index))
          console.log(state.users)
        }
      })
      .addCase(editUser.fulfilled, (state, action) => {
        state.users.find((user, index) => {
          if (user.id === action.payload.id) {
            state.users[index] = action.payload;
            console.log("dispatch", state.users[index], action.payload.id)
            return true;
          }
          return false;
        })
      })
    // Xử lý khi lấy dữ liệu thất bại
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.payload as string;
    });
  },
});

export default UsersSlice.reducer;
export const { } = UsersSlice.actions;
