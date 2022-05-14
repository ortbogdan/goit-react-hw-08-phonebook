import { useDispatch, useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors';
import authOperations from "../../redux/auth/auth-operations";
import avatar from '../../avatar/avatar.png';
import { Stack, Button } from "react-bootstrap";

export const UserMenu = () => {
  const dispatch = useDispatch();
  const email = useSelector(authSelectors.getUserEmail);
  

  return (<Stack direction="horizontal" gap={3}>
      <div className="bg-light border"><img src={avatar} alt="default avatar" width="32"/></div> 
      <div><span>Welcome, {email}</span></div>
      <Button variant="info" onClick={() => dispatch(authOperations.logOut())}>
       Log Out
      </Button>
    </Stack>  
  );
}