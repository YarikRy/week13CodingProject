import { Component } from "react";
import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.css"
import Bootstrap from "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import './App.css'

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbarCSS">
                <div className="container-fluid">
                    <a className="navbar-brand" href="index.html">WS</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">Resources</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">Contact</a>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        )
    }
}