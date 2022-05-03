import { createAction } from "@reduxjs/toolkit";
import { actionsTypes } from "./types";

export const addContact = createAction(actionsTypes.ADD_CONTACT);
export const deleteContact = createAction(actionsTypes.DELETE_CONTACT);
export const changeFilter = createAction(actionsTypes.CHANGE_FILTER);
