import React from "react";
import "./style.css";
import Footer from "./Footer";
import Content from "./Content";
import Homepage from "./Homepage";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import { useLocation } from 'react-router-dom'
import BeginnerOptions from "./BeginnerOptions";
import CreateUser from "./createUser";
import AdvancedOptions from "./AdvancedOptions";
import BeginnerRecommendation from "./BeginnerRecommendation";
import PreCheckout from "./PreCheckout";
import Checkout from "./Checkout";

const Base = (props) =>{
    const pathname = window.location.pathname;
    return <div>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet"/>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossOrigin="anonymous"/>
        <div>
        <div id="navbar">
            <div id="icon">
                <img id="icon-img" src="images/game-icon-white.png" style={{display: pathname=="/homepage" ? "none" :"flex"}}/>
                
            </div>
            <div id="navbar-sections">
                <button>Home</button>
                <button>About</button>
                <button>Support</button>
                <button>Reviews</button>
                <button>Ranking</button>
            </div>
            <div id="navbar-profile">
                <button><img src={ './icons/search.png'}/></button>
                <a href="index.html"><button><img src={'./icons/user.png'}/></button></a>
                <button><img src={'./icons/cart.png'}/></button>
            </div>
            </div>
            <div id="content">
            <div>
                <BrowserRouter>
                <Routes>
                    <Route path="" element={<CreateUser/>}/>
                    <Route path="/create-user" element={<CreateUser/>}/>;
                    <Route path="/homepage" element={<Homepage/>}/>
                    <Route path="/beginner-options" element={<BeginnerOptions/>}/>
                    <Route path="/advanced-options" element={<AdvancedOptions/>}/>
                    <Route path="/beginner-recommendation" element={<BeginnerRecommendation/>}/>
                    <Route path="/pre-checkout" element={<PreCheckout/>}/>
                    <Route path="/checkout" element={<Checkout/>}/>
                </Routes>
                </BrowserRouter>
            </div>
            <Footer/>
        </div>
        </div>
        </div>
}
export default Base;