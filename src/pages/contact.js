import React from 'react';
import WebProject from "../components/webProject";
import "../styles/contact.css";

function Contact() {
    return (
        <div className="container text-white">

            <div className="row">
                <div className="col-xs-12 col-md-6 py-5 ">
                    <h1>Camisa Vines</h1>
                    <p>Computer Science Student at Indiana University Bloomington</p>
                    <p>Email: cdvines@iu.edu</p>
                    <a href="https://github.com/camisavines"><button type="button">Github</button></a>
                    <a href="/resume/"><button type="button">LinkedIn</button></a>
                </div>
                <div className="col-xs-12 col-md-6 py-5">
                <form>
                    <div className="row mb-3">
                        <label for="exampleFormControlInput1">Name</label>
                        <input type="text" class="form-control" />
                    </div>
                    <div className="row mb-3">
                        <label for="exampleFormControlInput1">Email address</label>
                        <input type="text" class="form-control" />
                    </div>
                    <div className="row mb-3">
                        <label for="exampleFormControlTextarea1">Example textarea</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="10"></textarea>
                    </div>
                    <a><button type="submit">Submit</button></a>
                </form>    
    

                </div>
            </div>

        </div>
    )
}

export default Contact;