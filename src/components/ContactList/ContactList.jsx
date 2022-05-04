import { Contacts, ContactItem } from "./ContactList.styled";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getContacts, deleteContact } from "../../redux/operation";
import * as selectors from '../../redux/selectors';


export const ContactList = () => {
  const contacts = useSelector(selectors.getItems);
  const query = useSelector(selectors.getFilter);
  const dispatch = useDispatch();
  
  useEffect(() => { dispatch(getContacts()) }, [dispatch]);
  const filteredContacts = () => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(query)
    );
  };
  return (
    <Contacts>
      {(query === "" ? contacts : filteredContacts()).map(
        ({ name, id, phone }) => (
          <ContactItem key={id}>
            {name}:<span>{phone}</span>
            <button onClick={() => dispatch(deleteContact(id))}>Delete</button>
          </ContactItem>
        )
      )}
    </Contacts>
  );
};
