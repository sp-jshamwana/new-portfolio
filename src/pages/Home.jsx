import React from "react";
import About from "../components/About";
import Projects from "../components/Projects"
import Header from "../components/Header";
import InternshipExperience from "../components/InternshipExp";
import Blog from "../components/Blog";

const Home = () => {
    return (
        <div>
            <Header isHomePage={true}/>
            <About />
            <Projects />
            <InternshipExperience />
            <Blog />
        </div>
    )
}

export default Home;