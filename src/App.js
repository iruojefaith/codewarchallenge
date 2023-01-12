import * as React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes }  from "react-router-dom";
import Home from './Home/Home';
import Navbar from './Navbar/navbar';
import About from './Components/About';
import Services from './Components/Services';
import Project from './Components/Project';
import Blog from './Components/Blog';
import Contact from './Components/Contact';



export default function App() {
  return (

      <BrowserRouter>
        <Navbar/>


          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/page" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/project" element={<Project/>}/>
            <Route path="/blog" element={<Blog/>}/>
            <Route path="/contact" element={<Contact/>}/>
          </Routes>

      </BrowserRouter>
  );
}
