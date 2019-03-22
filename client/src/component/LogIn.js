import React, { Component } from 'react';
import { Form, Button, Container } from 'react-bootstrap';

class LogIn extends Component {
  render() {
    return (
      <div>
      <Container>
        <Form>
        <Form.Group controlId="mail">
          <Form.Label>Email Address</Form.Label>
          <Form.Control type="email" placeholder="example@gmail.com"></Form.Control>
        </Form.Group>
        
        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password"></Form.Control>
        </Form.Group>

        <Button variant='primary' block >Submitted</Button>
      </Form>
      </Container>
      </div>
    );
  }
}

export default LogIn;