import { Contacts, ContactItem } from "./ContactList.styled";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getContacts, deleteContact } from "../../redux/operation";
import * as selectors from '../../redux/selectors';
// import { Loader } from "../Loader/Loader";

export const ContactList = () => {
  const contacts = useSelector(selectors.getItems);
  const query = useSelector(selectors.getFilter);
  const isLoading = useSelector(selectors.getLoader);
  const dispatch = useDispatch();
  
  useEffect(() => { dispatch(getContacts()) }, [dispatch]);
  const filteredContacts = () => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(query)
    );
  };
  return ( <>
    {isLoading && "...LOADING"}
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
  </>
  ); 
};
