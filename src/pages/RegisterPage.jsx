import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useState } from "react";
import operations from "../redux/auth/auth-operations";
export const RegisterPage = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
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
    dispatch(operations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
    };
    return <Form onSubmit={handleSubmit}>
    <Form.Group className="mb-3">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" placeholder="Enter your name" value={name} onChange={handleChange} name="name"/>
  </Form.Group>
  <Form.Group className="mb-3">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" value={email} onChange={handleChange} name="email"/>
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" value={password} onChange={handleChange} name="password"/>
  </Form.Group>
  
  <Button variant="primary" type="submit" >
    Sign Up
  </Button>
</Form>
}