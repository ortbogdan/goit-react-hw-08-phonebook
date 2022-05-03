import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import { itemsReducer, filterReducer } from "./reducer";

export const store = configureStore({
  reducer: {
    contacts: combineReducers({ items: itemsReducer, filter: filterReducer }),
  },
});
