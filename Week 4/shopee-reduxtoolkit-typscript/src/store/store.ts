import { configureStore } from "@reduxjs/toolkit";
import { ProductSlice } from "./productSlice";
import { OrdersSlice } from "./ordersSlice";
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    product: ProductSlice.reducer,
    order: OrdersSlice.reducer,
  },
});

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector;
