import { Section, AppBar} from "./components";
import { HomePage, ContactsPage, LoginPage, RegisterPage  } from "./pages";
import { useEffect } from "react";
import authOperations from '../src/redux/auth/auth-operations';
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);
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
