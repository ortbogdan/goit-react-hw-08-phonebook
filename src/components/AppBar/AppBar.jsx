import { NavLink } from "react-router-dom";
import { Stack } from "react-bootstrap";
import { NavItem } from "./AppBar.styled";
import { UserMenu } from "../UserMenu/UserMenu";
import authSelectors from "../../redux/auth/auth-selectors";
import { useSelector } from "react-redux";
export const AppBar = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return <Stack direction="horizontal" gap={3}>
  <NavItem className="bg-light border"><NavLink to="/">Home</NavLink></NavItem>
  <NavItem className="bg-light border"><NavLink to="/contacts" >Contacts</NavLink></NavItem>
    {isLoggedIn ? <UserMenu/> : <><NavItem className="bg-light border ms-auto"><NavLink to="/register" >Register</NavLink></NavItem>
  <NavItem className="bg-light border"><NavLink to="/login" >Login</NavLink></NavItem></>}
  
  </Stack>


}