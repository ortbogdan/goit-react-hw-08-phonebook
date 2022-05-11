import {changeFilter} from "./contacts-actions";
import { combineReducers, createReducer } from "@reduxjs/toolkit";
import { getContacts, deleteContact, addContact } from "./contacts-operations";
const items = createReducer([], {
  [getContacts.fulfilled]: (_, action) => action.payload,
  [deleteContact.fulfilled]: (state, action) => state.filter((contact) => contact.id !== action.payload.id),
  [addContact.fulfilled]: (state, action) => [ action.payload, ...state]
});

const isLoading = createReducer(false, {
  [getContacts.pending]: () => true,
  [getContacts.fulfilled]: () => false,
  [getContacts.rejected]: () => false, 
  [deleteContact.pending]: () => true,
  [deleteContact.fulfilled]: () => false,
  [deleteContact.rejected]: () => false,
  [addContact.pending]: () => true,
  [addContact.fulfilled]: () => false,
  [addContact.rejected]: () => false
});

const error = createReducer(null, {
  [getContacts.rejected]: (_, action) => action.payload,
  [deleteContact.rejected]: (_, action) => action.payload,
  [addContact.rejected]: (_, action) => action.payload
})
const filter = createReducer('', {
  [changeFilter]: (_, action) => action.payload
}) 
export default combineReducers({
  items,
  isLoading,
  error,
  filter
})