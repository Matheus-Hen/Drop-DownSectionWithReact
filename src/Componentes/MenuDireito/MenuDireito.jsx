import { Component } from "react";
import './MenuDireitoStyle.css';

export default class MenuDireito extends Component {
    render() {
        return (
            <div className="LoginRegister">
                <div className="AreaLogin"><p className="Login">Login</p></div>
                <div className="AreaRegister"><p className="Register">Register</p></div>
            </div>
        )
    }
}