import React from 'react';


import logo00 from "../photos/00-Logo.png";
import '../css/home.css';

// Toggle theme colors: https://css-tricks.com/a-dark-mode-toggle-with-react-and-themeprovider/

class About extends React.Component {
    constructor(props) {super(props);}

    render() {
        return (
        <>
            <div className="container">
            <h2>&#127925; &#127911; Music I Like</h2>
            </div>
        </>
        )
    }

}

export default About;