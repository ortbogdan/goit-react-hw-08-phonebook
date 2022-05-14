import { Section, AppBar, PrivateRoute, PublicRoute } from "./components";
import { Suspense, useEffect, lazy } from "react";
import authOperations from './redux/auth/auth-operations';
import authSelectors from "./redux/auth/auth-selectors";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";
import operations from "./redux/auth/auth-operations";
import { Spinner } from "react-bootstrap";

const createChunk = componentName => {
  return lazy(() =>
    import('./pages/index.js').then(module => ({
      default: module[componentName],
    })),
  );
};
const HomePage = createChunk('HomePage');
const RegisterPage = createChunk('RegisterPage');
const LoginPage = createChunk('LoginPage');
const ContactsPage = createChunk('ContactsPage');

export const App = () => {
  const dispatch = useDispatch();
  const userToken = useSelector(authSelectors.getUserToken)
  useEffect(() => {
    
    dispatch(authOperations.fetchCurrentUser()
    )
    operations.token.set(userToken)
  }, [dispatch, userToken]);
  return (
    
      <Suspense fallback={<Spinner animation="border" variant="success" />}>
      <AppBar />
      <Section>
        <Routes>
       
        <Route path="/" element={<PublicRoute restricted><HomePage/></PublicRoute>} />
        <Route path="register" element={<PublicRoute restricted><RegisterPage/></PublicRoute>} exact/>
        <Route path="login" element={<PublicRoute restricted><LoginPage/></PublicRoute>} exact/>
        <Route path="contacts" element={<PrivateRoute><ContactsPage/></PrivateRoute>} exact/>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes></Section></Suspense>

    
  );
};
