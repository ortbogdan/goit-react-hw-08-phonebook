import { fetchContacts, deleteContactById, addContactToList } from "../../services/contactsApi";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getContacts = createAsyncThunk('contacts/fetchContacts', async () => {
    try {
        const contacts = await fetchContacts();
        console.log(contacts);
    return contacts;  
    } catch (error) {
        console.log(error);
    }
    
});
export const deleteContact = createAsyncThunk('contacts/deleteContact', async (id) => {
    const { data } = await deleteContactById(id);
    return data;
});
export const addContact = createAsyncThunk('contacts/addContact', async (contact) => {
    try {
       const { data } = await addContactToList(contact);
    return data 
    } catch (error) {
        console.log(error);
    }
    
})