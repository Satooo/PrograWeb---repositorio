import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import BeginnerOptions from "./BeginnerOptions";
import Homepage from "./Homepage";
import "./style.css";

const CreateUser = () =>{
    return <div id="content-center">
    <div id="login-menu">
        <h1>Create account</h1>
        <input type="text" placeholder="First Name"/>
        <input type="text" placeholder="Last Name"/>
        <input type="text" placeholder="Email"/>
        <input type="text" placeholder="Password"/>
        <a href="/homepage" id="create-account"><button id="create-button">CREATE</button></a>
    </div>
    </div>
}
export default CreateUser;