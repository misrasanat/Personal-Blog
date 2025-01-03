import { Link } from "react-router-dom";
import "../Styles/NavBar.css";

const NavigationBar = () => {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/" className="navbar-brand">Personal Website</Link>
        </div>
        <div className="navbar-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/projects" className="nav-link">Projects</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
          <Link to="/project1" className="nav-link">Project1</Link>
          <Link to="/project2" className="nav-link">Project2</Link>
          <Link to="/randomimage" className="nav-link">RandomImage</Link>

        </div>
      </div>
    </div>
  );
};

export default NavigationBar;