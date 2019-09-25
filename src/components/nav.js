import React from 'react';
import "../styles/index.css";

function Navbar() {
    return (
        <div>
            <nav class="navbar navbar-expand-sm navbar-dark">
            <a class="navbar-brand" href="/">Camisa Vines</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample03" aria-controls="navbarsExample03" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

                <div class="collapse navbar-collapse pb-8" id="navbarsExample03">
                    <ul class="navbar-nav mr-auto">
                        {/* <li class="nav-item"><a class="nav-link" href="/about/">About</a></li> */}
                        <li class="nav-item"><a class="nav-link" href="/portfolio/">Portfolio</a></li>
                        <li class="nav-item"><a class="nav-link" href="/resume/">Resume</a></li>
                        <li class="nav-item"><a class="nav-link" href="/contact/">Contact</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;