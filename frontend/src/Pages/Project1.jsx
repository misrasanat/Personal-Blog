import React from 'react';
import '../Styles/ProjectPlaceHolder.css';

const Project1 = () => (
    <div className="project-page">
        <h1 className="project-title">Configurable File Search and Action</h1>
        <p className="project-description">
            
            This program is a flexible and efficient tool for traversing directories to locate files based on user-defined criteria, such as file names, extensions, sizes, or content patterns. It identifies "interesting" files and performs specified actions on them, such as displaying details, copying, or modifying.

            Designed with modularity and reusability in mind, the program ensures adaptability for various use cases. It uses efficient algorithms for directory traversal and includes robust error handling for seamless operation. With a clear and user-friendly configuration interface, it caters to both technical and non-technical users, making it an ideal solution for file management and automation tasks.
        </p>
        <a href="https://drive.google.com/drive/folders/1XTrH_Fc7wTaoOVK5vqOewKqR2smzD7Ii?usp=sharing" target="_blank" rel="noopener noreferrer">View Project</a>
    </div>
);

export default Project1;