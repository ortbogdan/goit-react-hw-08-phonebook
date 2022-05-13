import { Section, AppBar} from "./components";
import { HomePage, ContactsPage, LoginPage, RegisterPage  } from "./pages";
import { Suspense, useEffect } from "react";
import authOperations from './redux/auth/auth-operations';
import authSelectors from "./redux/auth/auth-selectors";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import operations from "./redux/auth/auth-operations";
export const App = () => {
  const dispatch = useDispatch();
  const userToken = useSelector(authSelectors.getUserToken)
  useEffect(() => {
    
    dispatch(authOperations.fetchCurrentUser()
    )
    operations.token.set(userToken)
  }, [dispatch, userToken]);
  return (
    <Section>
      <Suspense fallback='...Loading!'>
        <AppBar />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="register" element={<RegisterPage/>} exact/>
        <Route path="login" element={<LoginPage/>} exact/>
        <Route path="contacts" element={<ContactsPage/>} exact/>
      </Routes></Suspense>

    </Section>
  );
};
