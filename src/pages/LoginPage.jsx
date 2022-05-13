import { Form, Button } from "react-bootstrap";
import operations from "../redux/auth/auth-operations";
import { useDispatch } from "react-redux";
import { useState } from "react";

export const LoginPage = () => {
const dispatch = useDispatch();
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(operations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };
    return <Form>
  <Form.Group className="mb-3" >
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" onChange={handleChange} value={email} name='email'/>
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password"  onChange={handleChange} value={password} name="password"
    />
  </Form.Group>
  
  <Button variant="primary" type="submit" onSubmit={handleSubmit}>
    Login
  </Button>
</Form>
}