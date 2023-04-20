import { Product } from "@/types";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";


export const fetchProducts = createAsyncThunk("products/fetchProducts", async (_, thunkAPI) => {
  try {
    const response: AxiosResponse<Product[]> = await axios.get<Product[]>("https://6183caa491d76c00172d1b4b.mockapi.io/api/product");
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue("Failed to fetch Products");
  }
});
export const addProduct = createAsyncThunk("products/addProduct", async (body: Omit<Product, 'id'>, thunkAPI) => {
  try {
    const response: AxiosResponse<Product> = await axios.post<Product>("https://6183caa491d76c00172d1b4b.mockapi.io/api/product", body);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue("Failed to fetch Products");
  }
});
export const removeProduct = createAsyncThunk("products/removeProduct", async (id: String, thunkAPI) => {
  try {
    const response: AxiosResponse<Product> = await axios.delete<Product>(`https://6183caa491d76c00172d1b4b.mockapi.io/api/product/${id}`,);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue("Failed to fetch Products");
  }
});
export const editProduct = createAsyncThunk("products/editProduct", async (body: Product, thunkAPI) => {
  try {
    const response: AxiosResponse<Product> = await axios.put<Product>(`https://6183caa491d76c00172d1b4b.mockapi.io/api/product/${body.id}`, body);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue("Failed to fetch Products");
  }
});
interface ProductsState {
  productList: Product[];
  status: "idle" | "loading" | "failed";
  error: string | null;
}

const initialState: ProductsState = {
  productList: [],
  status: "idle",
  error: null,
};

export const ProductsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
   
  },
  extraReducers: (builder) => {
    // Xử lý trạng thái loading
    builder.addCase(fetchProducts.pending, (state) => {
      state.status = "loading";
    });

    // Xử lý khi lấy dữ liệu thành công
    builder
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "idle";
        state.productList = action.payload;
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.productList.push(action.payload)
      })
      .addCase(removeProduct.fulfilled, (state, action) => {
        const productId = action.meta.arg;
        const index = state.productList.findIndex((product) => product.id === productId);
        if (index !== -1) {
          state.productList.filter(product => product.id !== String(index))
          console.log(state.productList)
        }
      })
      .addCase(editProduct.fulfilled, (state, action) => {
        state.productList.find((product, index) => {
          if (product.id === action.payload.id) {
            state.productList[index] = action.payload;
            console.log("dispatch",state.productList[index],action.payload.id)
            return true;
          }
          return false;
        })
      })

    // Xử lý khi lấy dữ liệu thất bại
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.payload as string;
    });
  },
});

export default ProductsSlice.reducer;
export const {} = ProductsSlice.actions;
