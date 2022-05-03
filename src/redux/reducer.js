import { fetchContactsRequest, fetchContactsSuccess, fetchContactsError } from "./actions";
import { combineReducers, createReducer } from "@reduxjs/toolkit";
const items = createReducer([], {
  [fetchContactsSuccess]: (_, action) => action.payload,
  // [deleteContact]: (state, action) => state.filter((contact) => contact.id !== action.payload)
});

const isLoading = createReducer(false, {
  [fetchContactsRequest]: () => true,
  [fetchContactsSuccess]: () => false,
  [fetchContactsError]: () => false
});

const error = createReducer(null, {
  [fetchContactsError]: (_, action) => action.payload
})

export default combineReducers({
  items,
  isLoading,
  error
})