import { fetchContactsRequest, fetchContactsSuccess, fetchContactsError, deleteContactRequest, deleteContactSuccess, deleteContactError, addContactRequest, addContactSuccess, addContactError } from "./actions";
import { combineReducers, createReducer } from "@reduxjs/toolkit";
const items = createReducer([], {
  [fetchContactsSuccess]: (_, action) => action.payload,
  [deleteContactSuccess]: (state, action) => state.filter((contact) => contact.id !== action.payload.id),
  [addContactSuccess]: (state, action) => state
});

const isLoading = createReducer(false, {
  [fetchContactsRequest]: () => true,
  [fetchContactsSuccess]: () => false,
  [fetchContactsError]: () => false, 
  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false
});

const error = createReducer(null, {
  [fetchContactsError]: (_, action) => action.payload,
  [deleteContactError]: (_, action) => action.payload
})

export default combineReducers({
  items,
  isLoading,
  error
})