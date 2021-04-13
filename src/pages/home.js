import React from 'react';

import Hero from "../components/hero/hero";
import AboutComponent from "../components/about/about";
import NewsComponent from "../components/news/news";

import logo00 from "../photos/00-Logo.png";
import '../css/home.css';

// Toggle theme colors: https://css-tricks.com/a-dark-mode-toggle-with-react-and-themeprovider/

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        <>
        <div className="home-container">
            <Hero />


        <div className="separator reverse"></div>

        {/* Layout projects */}

        

        {/* <AboutComponent /> */}
        {/* <NewsComponent /> */}

        </div>
        </>
        )
    }
}

export default Home;