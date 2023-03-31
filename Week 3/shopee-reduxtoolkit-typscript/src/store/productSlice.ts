import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Product {
  id: String | undefined,
  title: String | undefined,
  price: Number,
  desc: String | undefined,
  image: String,
  quantity: Number
}
interface ProductState {
  products: Product[],
}


const initialState: ProductState = {
  products: [],
};

export const ProductSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<{ id: String, title: String, price: Number, desc: String, image: String, quantity: Number }>) => {
      if (state.products.find(product => product.id === action.payload.id)) {
        state.products.find(product => product.id === action.payload.id ? (product.quantity = Number(product.quantity) + 1) : product.quantity)

      } else {
        state.products = [...state.products, {
          id: action.payload.id,
          title: action.payload.title,
          price: Number(action.payload.price),
          desc: action.payload.desc,
          image: action.payload.image,
          quantity: action.payload.quantity
        }]
      }
    },
    changeQuantity: (state, action: PayloadAction<{ id: String, quantity: Number }>) => void {
      ...state,
      products: state.products.filter((product) =>
        product.id === action.payload.id
          ? (product.quantity = Number(action.payload.quantity) + Number(product.quantity) - 1)
          : product.quantity
      )
    },
    removeFromCart: (state, action: PayloadAction<{ id: String | undefined }>) => {
      state.products = state.products.filter((product) => product.id !== action.payload.id)
    }
  },
});

export default ProductSlice.reducer;
export const { addToCart, changeQuantity, removeFromCart } = ProductSlice.actions;


