import { NavLink } from "react-router-dom";
import { Stack } from "react-bootstrap";
export const AppBar = () => {
   return (
       
<Stack direction="horizontal" gap={3}>
  <div className="bg-light border"><NavLink to="/">Home</NavLink></div>
  <div className="bg-light border"><NavLink to="/contacts" >Contacts</NavLink></div>
  <div className="bg-light border ms-auto"><NavLink to="/register" >Register</NavLink></div>
  <div className="bg-light border"><NavLink to="/login" >Login</NavLink></div>
</Stack>
  );
}