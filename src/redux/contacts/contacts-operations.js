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
    try {
        const { data } = await deleteContactById(id);
        console.log(data);
    return data;
    } catch (error) {
        console.log(error);
    }  
});
export const addContact = createAsyncThunk('contacts/addContact', async (contact) => {
    try {
        const { data } = await addContactToList(contact);
        console.log(data);
    return data 
    } catch (error) {
        console.log(error);
    }
    
})