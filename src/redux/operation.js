import { fetchContacts } from "../services/contactsApi";
import { fetchContactsRequest, fetchContactsSuccess, fetchContactsError } from "./actions";

export const getContacts = () => async dispatch => {
    dispatch(fetchContactsRequest());
    try {
        const contacts = await fetchContacts();
        dispatch(fetchContactsSuccess(contacts))
    } catch (error) {
        dispatch(fetchContactsError(error))
    }
};