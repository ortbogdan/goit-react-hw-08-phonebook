import { fetchContacts, deleteContactById, addContactToList } from "../services/contactsApi";
import { fetchContactsRequest, fetchContactsSuccess, fetchContactsError, deleteContactRequest, deleteContactSuccess, deleteContactError, addContactRequest, addContactSuccess, addContactError   } from "./actions";

export const getContacts = () => async dispatch => {
    dispatch(fetchContactsRequest());
    try {
        const contacts = await fetchContacts();
        dispatch(fetchContactsSuccess(contacts))
    } catch (error) {
        dispatch(fetchContactsError(error))
    }
};
export const deleteContact = id => async dispatch => {
    dispatch(deleteContactRequest());
    try {
        const {data} = await deleteContactById(id);
        dispatch(deleteContactSuccess(data));
    } catch (error) {
        dispatch(deleteContactError(error))
    }
}

export const addContact = contact => async dispatch => {
    dispatch(addContactRequest());
    try {
        const addedContact = await addContactToList(contact)
        dispatch(addContactSuccess(addedContact));
    } catch (error) {
        dispatch(addContactError(error));
    }
}