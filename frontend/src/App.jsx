// npm run dev

import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './Components/navbar';
import Home from './Pages/Home';
import Blog from './Pages/Projects';
import About from './Pages/About';
import Contact from './Pages/Contact';
import './App.css'

function App() {

  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  )
}

export default App
