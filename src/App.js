import { Section, AppBar } from "./components";
import { HomePage, ContactsPage, LoginPage, RegisterPage  } from "./pages";
import { fetchContacts } from "./services/contactsApi";
import { Routes, Route } from "react-router-dom";
export const App = () => {
  fetchContacts();
  return (
    <Section>
      <AppBar/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/register" element={<RegisterPage/>} exact/>
        <Route path="/login" element={<LoginPage/>} exact/>
        <Route path="/contacts" element={<ContactsPage/>} exact/>
      </Routes>
    </Section>
  );
};
