import { ContactForm, ContactList, Filter, Section } from "./components";

export const App = () => {
  return (
    <Section title={"Phonebook"}>
      <ContactForm />
      <Filter />
      <ContactList />
    </Section>
  );
};
