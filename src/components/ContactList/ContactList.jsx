import { Contacts, ContactItem } from "./ContactList.styled";
import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "../../redux/actions";

export const ContactList = () => {
  const contacts = useSelector((state) => state.contacts.items);
  const query = useSelector((state) => state.contacts.filter);
  const dispatch = useDispatch();

  const filteredContacts = () => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(query)
    );
  };
  return (
    <Contacts>
      {(query === "" ? contacts : filteredContacts()).map(
        ({ name, id, number }) => (
          <ContactItem key={id}>
            {name}:<span>{number}</span>
            <button onClick={() => dispatch(deleteContact(id))}>Delete</button>
          </ContactItem>
        )
      )}
    </Contacts>
  );
};
