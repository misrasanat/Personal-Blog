import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "../Styles/NavBar.css"

const NavigationBar = () => (
  <Navbar bg="light" expand="lg" className="custom-navbar">
    <Container>
        <Navbar.Brand as={Link} to="/" className="navbar-brand">
            Personal Website
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggle-button"/>
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="w-100 justify-content-center">
            <Nav.Link as={Link} to="/" className="nav-item">Home</Nav.Link>
            <Nav.Link as={Link} to="/projects" className="nav-item">Projects</Nav.Link>
            <Nav.Link as={Link} to="/about" className="nav-item">About</Nav.Link>
            <Nav.Link as={Link} to="/contact" className="nav-item">Contact</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default NavigationBar;