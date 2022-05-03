import { fetchContacts, deleteContactById } from "../services/contactsApi";
import { fetchContactsRequest, fetchContactsSuccess, fetchContactsError, deleteContactRequest, deleteContactSuccess, deleteContactError } from "./actions";

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