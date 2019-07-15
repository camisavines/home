import React from 'react';
import WebProject from "../components/webProject";
import GraphicDesign from "../components/designProject";
import logo from "../photos/logo_white.png";
import c from "../photos/camisa.jpg";
import "../styles/portfolio.css";

function Portfolio() {
    return (
        <div className="justify-center container-fluid pt-5">

            <div className="row">
                <WebProject name={"FUTURE WONDER"} website={"https://www.futurewonder.com/"} image={c}/>
                <WebProject name={"TIC-TAC-TOE"} website={"https://camisavines.github.io/tictactoe/index.html"} />
                <WebProject name={"WHO ARE WE?"} website={"https://camisavines.github.io/digital-art-project2/pages/index.html"} image={c}/>
                <WebProject name={"FALCAM"} website={"https://falcam.southbendin.gov/"} image={c}/>
                <GraphicDesign name={"SELF PORTRAIT"} image={c} /> 
            </div>


        </div>
    )
}

export default Portfolio;