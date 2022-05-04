import { ContactForm, ContactList, Filter, Section } from "./components";
import { fetchContacts } from "./services/contactsApi";
export const App = () => {
  fetchContacts();
  return (
    <Section title={"Phonebook"}>
       <ContactForm />
      <Filter />
      <ContactList />
    </Section>
  );
};
