import React from 'react';
/*import '../Styles/ProjectPlaceHolder.css';*/


const Project2 = () => {

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
        <div className="project-page">
            <h1 className="project-title">Project 2</h1>
                <p className="project-description">
                    This project upgrades the Columns game from a basic text-based interface to a fully interactive graphical version using the PyGame library. The game board is a 13x6 grid where colorful jewels fall and interact based on predefined mechanics. Players control fallers with keyboard inputs, moving them left, right, or rotating them while the game progresses automatically.
                </p>

                <p className="project-description">
                    Fallers appear randomly in columns with randomized jewel colors. Visual cues highlight actions like landing, freezing, and matching jewels before they disappear, making the game more engaging and easier to follow
                </p>

                <p className="project-description">
                    The project emphasizes modularity, separating game mechanics from the graphical interface. PyGame handles rendering, resizing, and user interactions. Optional features like scoring, sound effects, and advanced visual cues can further enhance the experience. By reusing and adapting previous mechanics, the project demonstrates effective software design and development practices.
                </p>

                <a href="https://drive.google.com/drive/folders/1qLiLMTuVw7YIJ8U0P1zhutqKhIPWSfX4?usp=sharing" target="_blank" rel="noopener noreferrer">View Project</a>
                <button onClick={runGame} className="play-game-link">Play Game</button>
        </div>
    );
};

export default Project2;