import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import "../Styles/ContactSetup.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:5000/send_email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    const result = await response.json();
    alert(result.message);
  };

  return (
    <div className="contact-container">
      <div className="contact-box">
        <h1>Contact Me</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formName" className='contact-thing'>
            <Form.Label className='contact-message'>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Ex: Sanat Misra"
            />
          </Form.Group>
          <Form.Group controlId="formEmail" className="contact-thing">
            <Form.Label className='contact-message'>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="email@gmail.com"
            />
          </Form.Group>
          <Form.Group controlId="formMessage" className="contact-thing">
            <Form.Label className='contact-message'>Message</Form.Label>
            <Form.Control
              as="textarea"
              rows={6}
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message"
            />
          </Form.Group>
          <Button variant="primary" type="submit" className="mt-3">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Contact;