import { Form, Button } from 'react-bootstrap';

const Contact = () => (
  <div>
    <h1>Contact Me</h1>
    <Form>
      <Form.Group controlId="formName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Ex: Sanat Misra" />
      </Form.Group>
      <Form.Group controlId="formEmail" className="mt-3">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="email@gmail.com" />
      </Form.Group>
      <Form.Group controlId="formMessage" className="mt-3">
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" rows={3} placeholder="Write your message" />
      </Form.Group>
      <Button variant="primary" type="submit" className="mt-3">
        Submit
      </Button>
    </Form>
  </div>
);

export default Contact;