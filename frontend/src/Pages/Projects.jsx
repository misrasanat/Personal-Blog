
/*import "../Styles/Projects.css"*/
import { useEffect } from 'react';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const Projects = () => {

  
  
  useEffect(() => {
          // Disable scrolling
          document.body.style.overflowX = 'hidden';
      
          // Re-enable scrolling when leaving the page
          return () => {
            document.body.style.overflowX = 'auto';
          };
        }, []);

  const runGame = async () => {
    try {
      const response = await fetch('http://localhost:5000/run_game', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();
      if (data.status === "success") {
        alert(data.message); // Show a pop-up for success
      } else {
        alert(data.message); // Show a pop-up for error
      }
    } catch (error) {
      alert("Failed to connect to the server.");
    }
  };

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
          <h3>Configurable File Search and Action</h3>
          <p>
          A program that searches directories for files based on configurable criteria, identifies "interesting" files, and performs specified actions on them, designed with reusability and efficiency in mind.</p>
          <a href="https://drive.google.com/drive/folders/1XTrH_Fc7wTaoOVK5vqOewKqR2smzD7Ii?usp=sharing" target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
        <div className="project-card">
          <h3>Python-Based Connect Four Game with Online Play</h3>
          <p>A Python-shell Connect Four game with customizable board sizes (4x4 to 20x20), traditional and "Pop Out" rules, and online play via a shared server.</p>
          <a href="https://drive.google.com/drive/folders/1t7x0zcGYfDDOdEUcjesNy3CN3MaOvKZr?usp=sharing" target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
        {/* Add more project cards as needed */}
        <div className="project-card">
          <h3>Weather Analysis Program with API Integration</h3>
          <p>A Python program that fetches and analyzes weather data using Nominatim and National Weather Service APIs, providing forecasts, "feels like" temperatures, and geolocation details with support for real-time and local data.</p>
          <a href="https://drive.google.com/drive/folders/1IFRGyCUSXQo19DdRsTYR_MaZFkNTrSKz?usp=sharing" target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
        <div className="project-card">
          <h3>Columns Game Mechanics Simulation</h3>
          <p>A Python program simulating Columns' core mechanics, including falling, rotating, and matching jewels on a customizable grid, using object-oriented programming for game logic and unittest for test-driven development.</p>
          <a href="https://drive.google.com/drive/folders/1ggcSFuDz1wR2jc4w4476bf5hD6AQFhDd?usp=sharing" target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
        <div className="project-card">
          <h3>Interactive Columns Game with PyGame</h3>
          <p>This project brings the Columns game to life with a graphical interface using PyGame. It features real-time gameplay, keyboard controls for rotation and movement, and a resizable game board. With randomized faller generation, vibrant jewel colors, and visual cues for landing and matching, the game delivers an engaging interactive experience.</p>
          <a href="https://drive.google.com/drive/folders/1qLiLMTuVw7YIJ8U0P1zhutqKhIPWSfX4?usp=sharing" target="_blank" rel="noopener noreferrer">View Project</a>
          <button onClick={runGame} className="play-game-link">Play Game</button>
          {/*<a href="http://localhost:5000/run_game" target="_blank" rel="noopener noreferrer" className="play-game-link">Play Game</a>*/}
        </div>
        <div className="project-card">
          <h3>Project 6</h3>
          <p>A short description of this project.</p>
          <a href="https://github.com/yourgithub/project2" target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
        <div className="project-card">
          <h3>Project 7</h3>
          <p>A short description of this project.</p>
          <a href="https://github.com/yourgithub/project2" target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
        <div className="project-card">
          <h3>Project 8</h3>
          <p>A short description of this project.</p>
          <a href="https://github.com/yourgithub/project2" target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
        <div className="project-card">
          <h3>Project 9</h3>
          <p>A short description of this project.</p>
          <a href="https://github.com/yourgithub/project2" target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
      </div>
    </div>
  );
};

export default Projects;