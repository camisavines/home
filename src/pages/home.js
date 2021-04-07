import React from 'react';

import Navbar from "../components/navbar/navbar";
import Hero from "../components/hero/hero";
import About from "../components/about/about";

import logo00 from "../photos/00-Logo.png";
import '../css/home.css';

function Home() {
    return (
        <div className="home-container">
            <div className="container">
                <Navbar />
                <Hero />

                <About />

                <h2>&#127925; &#127911; Music I Like</h2>

            </div>
        </div>
    )
}

export default Home;