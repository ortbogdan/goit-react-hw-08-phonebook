import axios from "axios";
axios.defaults.baseURL = 'https://6270d0a8e1c7aec428f865ac.mockapi.io/api'
export async function fetchContacts() {
    const { data } = await axios.get('/contacts');
    return data;
}
export async function deleteContact(id) {
    const { data } = await axios.delete(`/contacts/${id}`);
    console.log(data); // delete contact
    return data;
}