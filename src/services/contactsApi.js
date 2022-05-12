import axios from "axios";
axios.defaults.baseURL = 'https://connections-api.herokuapp.com'
export async function fetchContacts() {
    const { data } = await axios.get('/contacts');
    return data;
}
export async function deleteContactById(id) {
    return await axios.delete(`/contacts/${id}`);
}
export async function addContactToList(contact) {
    return await axios.post('/contacts', contact);
}