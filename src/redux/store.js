import { configureStore } from "@reduxjs/toolkit";

import reducer from './contacts/contacts-reducer'

export const store = configureStore({
  reducer: {
    contacts: reducer,
  },
});
