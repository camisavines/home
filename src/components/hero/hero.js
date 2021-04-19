import React from 'react';
import "./hero.css";

class Hero extends React.Component {
    constructor(props) {
        super(props);
        this.separate = this.props.showSeparator;
    }

    getEmoji(code) {
        // let e = &#{code};
        return <span role="img" aria-labelledby="hero emojis">{`&#${code};`}</span>
    }

    render() { return (
        <> 
        <div className="hero-container row">
            <div className="col-xs-12">
                <h1>Camisa Vines</h1>
                <p>Developer {this.getEmoji(128187)}
                    + Student 
                    + Leader 
                    + Female <span role="img" aria-labelledby="hero emojis">&#127752; &#128187;</span></p>
            </div>
        </div>
        {this.separate ? 
            <div className="separator reverse"></div>
        : <></>}
        </>
    )}
}

export default Hero;