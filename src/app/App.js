import './App.css';
import React from'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from '../components/header/Header'
import Home from '../pages/home/Home'
import About from '../pages/about/About'
import Contact from '../pages/contact/Contact'
import Projects from '../pages/projects/Projects'

export default function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
  );
}
