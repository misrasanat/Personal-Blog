import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import "../Styles/ContactSetup.css";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const particlesInit = async (main) => {
    // This loads the tsparticles instance with all features
    await loadFull(main);
  };

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

  const particlesOptions = {
    particles: {
      number: {
        value: 50, // Fewer particles
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: "#a9a9a9", // Subtle gray color
      },
      shape: {
        type: "circle", // Use simple circles
        stroke: {
          width: 0,
          color: "#000000",
        },
      },
      opacity: {
        value: 0.3, // More transparent
        random: false,
      },
      size: {
        value: 2,
        random: true,
        anim: {
          enable: false,
        },
      },
      line_linked: {
        enable: false, // Disable lines between particles
      },
      move: {
        enable: true,
        speed: 1, // Slower speed
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out",
        bounce: false,
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "repulse", // Light repulse effect
        },
        onclick: {
          enable: false, // Disable on-click effects
        },
        resize: true,
      },
      modes: {
        repulse: {
          distance: 100, // Small repulse area
        },
      },
    },
    retina_detect: true,
  };

  return (
    <div className="particles-wrapper">
    <Particles id="tsparticles" init={particlesInit} options={particlesOptions} />
      <div id="contact-box" className="contact-container">
        <div  className="contact-box">
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
    </div>
  );
};

export default Contact;