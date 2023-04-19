import { configureStore } from "@reduxjs/toolkit";
// import { ProductSlice } from "./productSlice";
import { UsersSlice } from "./userSlice";
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
import { createWrapper, HYDRATE } from "next-redux-wrapper";

export const store = configureStore({
  reducer: {
    // product: ProductSlice.reducer,
    user: UsersSlice.reducer,
  },
});
const makeStore = () => store;
export const wrapper= createWrapper(makeStore);

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector;

