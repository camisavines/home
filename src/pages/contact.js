import React from 'react';
import camisa from "../photos/camisa.jpg";
import "../styles/contact.css";

function Contact() {
    return (
        <div className="bg-white pt-5">
            <div className="container full text-center">
                <div>
                    <div className="contact-img"></div>
                    {/* <img src={camisa} className="contact-img"/> */}
                    <h1>Camisa Vines</h1>
                    <p>Computer Science, BS, Specializing in Software Engineering at Indiana University Bloomington</p>
                    <div className="row contact-info">
                        <div className="col-6 col-sm-3 offset-sm-3"><i className="material-icons">email</i> <address>camisa.vines@icloud.com</address></div>
                        <div className="col-6 col-sm-3"><i className="material-icons">link</i> CamisaVines</div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Contact;