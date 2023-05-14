import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from '../features/products/ProductSlice';
import OrderSlice from "../features/orders/OrderSlice";
import UserSlice from "../users/UserSlice";


export const store = configureStore({
   reducer: {
      product: ProductSlice,
      order: OrderSlice,
      users:UserSlice,
   }
})