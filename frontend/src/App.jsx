// npm run dev

import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './Components/navbar';
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Project1 from './Pages/Project1';
import Project2 from './Pages/Project2';
import RandomImage from './Pages/RandomImage';
import './Styles/Application.scss';
import './App.css'


function App() {

  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project1" element={<Project1 />} />
        <Route path="/project2" element={<Project2 />} />
        <Route path="/randomimage" element={<RandomImage />} />
      </Routes>
    </Router>
  )
}

export default App
