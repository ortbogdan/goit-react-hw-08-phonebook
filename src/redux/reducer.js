import * as actions from "./actions";
import { combineReducers, createReducer } from "@reduxjs/toolkit";
const items = createReducer([], {
  [actions.fetchContactsSuccess]: (_, action) => action.payload,
  [actions.deleteContactSuccess]: (state, action) => state.filter((contact) => contact.id !== action.payload.id),
  [actions.addContactSuccess]: (state, action) => [...state, action.payload]
});

const isLoading = createReducer(false, {
  [actions.fetchContactsRequest]: () => true,
  [actions.fetchContactsSuccess]: () => false,
  [actions.fetchContactsError]: () => false, 
  [actions.deleteContactRequest]: () => true,
  [actions.deleteContactSuccess]: () => false,
  [actions.deleteContactError]: () => false,
  [actions.addContactRequest]: () => true,
  [actions.addContactSuccess]: () => false,
  [actions.addContactError]: () => false
});

const error = createReducer(null, {
  [actions.fetchContactsError]: (_, action) => action.payload,
  [actions.deleteContactError]: (_, action) => action.payload,
  [actions.addContactError]: (_, action) => action.payload
})
const filter = createReducer('', {
  [actions.changeFilter]: (_, action) => action.payload
}) 
export default combineReducers({
  items,
  isLoading,
  error,
  filter
})