import React from "react";
import Navbar from "./components/Navbar";
import InfoDiet from "./pages/InfoDiet";
import "./index.css"
import Footer from "./components/Footer"
import Now from "./pages/Now"
import People from "./pages/People"
import Home from "./pages/Home"
import Art from "./pages/Art"
import Blog from "./pages/Blog"
import { Browserdiv as div, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route path="/infodiet" element={<InfoDiet />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/now" element={<Now />} />
        <Route path="/people" element={<People />} />
        <Route path="/art" element={<Art />} />
      </Routes>
      <Footer />
    </div>
  )
}