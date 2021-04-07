import React from 'react';

import Navbar from "../components/navbar/navbar";
import Hero from "../components/hero/hero";
import About from "../components/about/about";
import Footer from "../components/footer/footer";

import logo00 from "../photos/00-Logo.png";
import '../css/home.css';

// Toggle theme colors: https://css-tricks.com/a-dark-mode-toggle-with-react-and-themeprovider/

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className="home-container">
            <div className="container">
                <div style={{height: "100vh"}}>
                    <Navbar />
                    <Hero />
                </div>



                <About />

                <hr />

                <h2>&#127925; &#127911; Music I Like</h2>

            </div>
            </div>
        )
    }
}

export default Home;