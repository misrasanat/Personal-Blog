
import "../Styles/Projects.css"
const Projects = () => {
  return (
    <div className="projects-container">
      <h1 className="projects-title">Projects</h1>
      
      {/* Intro Section */}
      <p className="projects-intro">
        Here are some of my favorite projects. Check out more on my 
        <a href="https://github.com/misrasanat" target="_blank" rel="noopener noreferrer"> GitHub </a>
        or
        <a href="https://www.linkedin.com/in/sanat-misra-6b02b2259/" target="_blank" rel="noopener noreferrer"> LinkedIn</a>.
      </p>

      {/* Links to GitHub and LinkedIn */}
      <div className="projects-links">
        <a href="https://github.com/misrasanat" target="_blank" rel="noopener noreferrer" className="link-card">
          <i className="fab fa-github"></i> GitHub
        </a>
        <a href="https://www.linkedin.com/in/sanat-misra-6b02b2259/" target="_blank" rel="noopener noreferrer" className="link-card">
          <i className="fab fa-linkedin"></i> LinkedIn
        </a>
      </div>

      {/* Projects Section */}
      <div className="projects-list">
        <div className="project-card">
          <h3>Project 1</h3>
          <p>A short description of this project.</p>
          <a href="https://github.com/yourgithub/project1" target="_blank" rel="noopener noreferrer">View on GitHub</a>
        </div>
        <div className="project-card">
          <h3>Project 2</h3>
          <p>A short description of this project.</p>
          <a href="https://github.com/yourgithub/project2" target="_blank" rel="noopener noreferrer">View on GitHub</a>
        </div>
        {/* Add more project cards as needed */}
        <div className="project-card">
          <h3>Project 3</h3>
          <p>A short description of this project.</p>
          <a href="https://github.com/yourgithub/project2" target="_blank" rel="noopener noreferrer">View on GitHub</a>
        </div>
        <div className="project-card">
          <h3>Project 4</h3>
          <p>A short description of this project.</p>
          <a href="https://github.com/yourgithub/project2" target="_blank" rel="noopener noreferrer">View on GitHub</a>
        </div>
        <div className="project-card">
          <h3>Project 5</h3>
          <p>A short description of this project.</p>
          <a href="https://github.com/yourgithub/project2" target="_blank" rel="noopener noreferrer">View on GitHub</a>
        </div>
        <div className="project-card">
          <h3>Project 6</h3>
          <p>A short description of this project.</p>
          <a href="https://github.com/yourgithub/project2" target="_blank" rel="noopener noreferrer">View on GitHub</a>
        </div>
        <div className="project-card">
          <h3>Project 7</h3>
          <p>A short description of this project.</p>
          <a href="https://github.com/yourgithub/project2" target="_blank" rel="noopener noreferrer">View on GitHub</a>
        </div>
        <div className="project-card">
          <h3>Project 8</h3>
          <p>A short description of this project.</p>
          <a href="https://github.com/yourgithub/project2" target="_blank" rel="noopener noreferrer">View on GitHub</a>
        </div>
        <div className="project-card">
          <h3>Project 9</h3>
          <p>A short description of this project.</p>
          <a href="https://github.com/yourgithub/project2" target="_blank" rel="noopener noreferrer">View on GitHub</a>
        </div>
      </div>
    </div>
  );
};

export default Projects;