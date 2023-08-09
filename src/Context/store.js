import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { reTest } from "./search";
import { reItems } from "./cart";
import { reOrder } from "./Order";
import { reForOrder } from "./forOrder";
import { reMenu } from "./reMenu";

export const store = configureStore({
  reducer: combineReducers({
    sideBar: reMenu,
    test: reTest,
    items: reItems,
    order: reOrder,
    forOrder: reForOrder,
  }),
  devTools: process.env.NODE_ENV !== "production",
});
