import { addContact, deleteContact, changeFilter } from "./actions";
import { setItemToStorage, getItemsForStorage } from "../services/localStorage";
import { createReducer } from "@reduxjs/toolkit";

const savedContacts = getItemsForStorage();

export const itemsReducer = createReducer(savedContacts, {
  [addContact]: (state, { payload }) => {
    const checkContact = state.find(
      (contact) => contact.name.toLowerCase() === payload.name.toLowerCase()
    );
    if (checkContact) {
      alert(`${payload.name} is already in contacts.`);
      return;
    }
    // window.localStorage.setItem(KEY, JSON.stringify([payload, ...state]));
    setItemToStorage(payload, state);
    return [payload, ...state];
  },
  [deleteContact]: (state, { payload }) =>
    state.filter((contact) => contact.id !== payload),
});
export const filterReducer = createReducer("", {
  [changeFilter]: (state, { payload }) => payload,
});
