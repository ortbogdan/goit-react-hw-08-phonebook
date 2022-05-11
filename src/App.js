import { Section, AppBar } from "./components";
import { HomePage, ContactsPage } from "./pages";
import { fetchContacts } from "./services/contactsApi";
import { Routes, Route } from "react-router-dom";
export const App = () => {
  fetchContacts();
  return (
    <Section>
      <AppBar/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        {/* <Route path="/register" element={} />
        <Route path="/login" element={ } /> */}
        <Route path="/contacts" element={<ContactsPage/>} />
      </Routes>
    </Section>
  );
};
