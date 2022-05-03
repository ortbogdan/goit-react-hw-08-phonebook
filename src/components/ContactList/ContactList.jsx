import { Contacts, ContactItem } from "./ContactList.styled";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getContacts, deleteContact} from "../../redux/operation";


export const ContactList = () => {
  const contacts = useSelector((state) => state.contacts.items);
  // const query = useSelector((state) => state.contacts.filter);
  const dispatch = useDispatch();
  
  useEffect(() => { dispatch(getContacts()) }, [dispatch]);
  // const filteredContacts = () => {
  //   return contacts.filter((contact) =>
  //     contact.name.toLowerCase().includes(query)
  //   );
  // };
  return (
    <Contacts>
      {contacts.map(
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
