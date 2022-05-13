import { Contacts, ContactItem } from "./ContactList.styled";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getContacts, deleteContact } from "../../redux/contacts/contacts-operations";
import * as selectors from '../../redux/contacts/contacts-selectors';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

export const ContactList = () => {
  const contacts = useSelector(selectors.getItems);
  const query = useSelector(selectors.getFilter);
  const isLoading = useSelector(selectors.getLoader);
  const dispatch = useDispatch();
  
  useEffect(() => {
    // const usersContacts = getContacts();
    // if (usersContacts.length === 0) return
    dispatch(getContacts());
  }, [dispatch]);

  const filteredContacts = () => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(query)
    );
  };
  return ( <>
    {isLoading && "...LOADING!"}
    <Contacts>
      {(query === "" ? contacts : filteredContacts()).map(
        ({ name, id, number }) => (
          <ContactItem key={id}>
            {name}:<span>{number}</span>
            <Button variant="success" onClick={() => dispatch(deleteContact(id))}>Delete</Button>
          </ContactItem>
        )
      )}
    </Contacts>
  </>
  ); 
};
