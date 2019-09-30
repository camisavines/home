import React from 'react';
// import camisa from "../photos/camisa.jpg";
import "../styles/contact.css";

function Contact() {
    return (
        <div className="bg-white py-5">

            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-md-4">
                        <h1>Camisa Vines</h1>
                        <p>Computer Science, BS, Specializing in Software Engineering at Indiana University Bloomington</p>

                        <div className="row">
                            <div className="col-1"><i className="material-icons">email</i></div>
                            <div className="col-10"><p>camisa.vines@icloud.com</p></div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-7 offset-md-1 p-5">
                        <form>
                            <div className="row mb-3">
                                <label for="name">Name</label>
                                <input type="text" class="form-control" />
                            </div>
                            <div className="row mb-3">
                                <label for="email">Email</label>
                                <input type="text" class="form-control" />
                            </div>
                            <div className="row mb-3">
                                <label for="message">Example textarea</label>
                                <textarea class="form-control" rows="8"></textarea>
                            </div>
                            <div className="row mb-3 text-center">
                                <button>Send</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Contact;