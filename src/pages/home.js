import React from 'react';
import "../styles/home.css";

function Home() {
    return (

        <div>

            <div className="justify-center text-center full" id="home">
                <div className="container">
                    <h1>CAMISA VINES</h1>
                    <h3>DEVELOPER + DESIGNER</h3>
                </div>
            </div>
            
            <div className="justify-center container-fluid">
                <dv className="row text-center">

                </dv>
            </div>

            <div className="justify-center container-fluid">
                <div className="row text-center">
                    <div className="col-4 home-link">PROJECTS</div>
                    <div className="col-4 home-link">RESUME</div>
                    <div className="col-4 home-link">NEWS</div>
                </div>
            </div>

            <div className="justify-center container-fluid">
                <div className="row text-center">
                    {/* Add a few projects here */}
                </div>
                <div className="row text-center mx-auto">
                    <h5 className="col-6 offset-3">SEE ALL PROJECTS HERE</h5>
                </div>
            </div>

            <div className="justify-center container-fluid">
                <div className="row text-center">
                    <div className="col-4 home-link">GITHUB</div>
                    <div className="col-4 home-link">CONTACT</div>
                    <div className="col-4 home-link">LINKEDIN</div>
                </div>
            </div>

        </div>

    )
}

export default Home;