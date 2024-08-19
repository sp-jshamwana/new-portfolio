import React from "react";
import About from "../components/About";
import Projects from "../components/Projects"
import Navbar from "../components/Navbar";
import InternshipExperience from "../components/InternshipExp";
import { References } from "../components/References";
import Blog from "../components/Blog";

const Home = () => {
    return (
        <div>
            <Navbar isHomePage={true}/>
            <About />
            <References />
            <Projects />
            <InternshipExperience />
            <Blog />
        </div>
    )
}

export default Home;