import { Component } from "react";
import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.css"
import Bootstrap from "../node_modules/bootstrap/dist/js/bootstrap.bundle"

export default class Login extends Component {
    render() {
        return (
            <div className="center">
                <h3 className="text-center p-2 border-bottom border-black">Log In</h3>
                <form>
                    <div className="mb-3">
                        <label for="emailInput" className="form-label ms-2">Email address</label>
                        <input type="email" className="form-control" id="emailInput" aria-describedby="emailHelp"/>
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label for="passwordInput" className="form-label ms-2">Password</label>
                        <input type="password" className="form-control" id="passwordInput"/>
                    </div>
                    <div className="mb-3 form-check ms-2">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                        <label className="form-check-label" for="exampleCheck1">Remember Me</label>
                    </div>
                    <button type="submit" className="btn btn-primary ms-2">Submit</button>
                </form>
            </div>
        )
    }
}