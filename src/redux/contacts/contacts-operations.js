import { fetchContacts, deleteContactById, addContactToList } from "../../services/contactsApi";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getContacts = createAsyncThunk('contacts/fetchContactsR', async () => {
    const contacts = await fetchContacts();
    return contacts;
});
export const deleteContact = createAsyncThunk('contacts/deleteContact', async (id) => {
    const { data } = await deleteContactById(id);
    return data;
});
export const addContact = createAsyncThunk('contacts/addContact', async (contact) => {
    const { data } = await addContactToList(contact);
    return data
})