import { Link } from "react-router-dom";

export const AppBar = () => {
   return (
    <div>
      <h1>Home</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/register">Register</Link>
        <Link to="/contacts">Contacts</Link>
        <Link to="/login">Login</Link>
      </nav>
    </div>
  );
}