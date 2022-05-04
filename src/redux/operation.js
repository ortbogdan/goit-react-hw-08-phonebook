import { fetchContacts, deleteContactById, addContactToList } from "../services/contactsApi";
import * as actions from "./actions";

export const getContacts = () => async dispatch => {
    dispatch(actions.fetchContactsRequest());
    try {
        const contacts = await fetchContacts();
        dispatch(actions.fetchContactsSuccess(contacts))
    } catch (error) {
        dispatch(actions.fetchContactsError(error))
    }
};
export const deleteContact = id => async dispatch => {
    dispatch(actions.deleteContactRequest());
    try {
        const {data} = await deleteContactById(id);
        dispatch(actions.deleteContactSuccess(data));
    } catch (error) {
        dispatch(actions.deleteContactError(error))
    }
}

export const addContact = contact => async dispatch => {
    dispatch(actions.addContactRequest());
    try {
        const {data} = await addContactToList(contact);
        dispatch(actions.addContactSuccess(data));
    } catch (error) {
        dispatch(actions.addContactError(error));
    }
}