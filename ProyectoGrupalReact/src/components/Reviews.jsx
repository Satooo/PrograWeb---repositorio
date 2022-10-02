import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BeginnerOptions from "./BeginnerOptions";
import Homepage from "./Homepage";
import "./style.css";
import { useState } from "react";

const Reviews = () =>{
    const [selection,setSelection]=useState("reviews");
    const influencers = ()=>{
        return <div>
        <div className="Titulo2">
        <button style={{display:selection=="influencers"?"flex":"none"}} id="content-reviews-button" onClick={()=>{setSelection("reviews")}}>Back</button>
            <h2>Influencers</h2></div>

        <div className="row" >
            <div className="col center">
            <img src="images/Youtbers1.png" id="YT" />
            </div>
            <div className="col">
            <img src="images/Youtubers2.png" id="YT"/>
            </div>
         </div>
         
        </div>
    }
    const reviewCard = (name,description) =>{
        return <div id="content-reviews-card">
            <h2>{name}</h2>
            <p>{description}</p>
        </div>
    }
    const showContent = (selection) =>{
        switch(selection){
            case "reviews":
                return <div><h1>User reviews</h1>
            <div class="inline" style={{borderBottom: "1px solid lightgray",paddingBottom:"10px"}}><h2>Global rate</h2>
            <img src="/icons/star-filled.png"/>
            <img src="/icons/star-filled.png"/>
            <img src="/icons/star-filled.png"/>
            <img src="/icons/star-filled.png"/>
            <img src="/icons/star-filled.png"/>
            </div>
            <div>{reviewCard("Juan Lopez","I completely recommend this service")}
            {reviewCard("Jhon Doe","Great service")}
            {reviewCard("Carl Johnson","Pc well built and nice case quality")}
            </div>
            </div>
            case "influencers":
                return influencers();
        }
        
    }
    return <div id="content-reviews-background">
        <div id="content-reviews-content">
            
            {showContent(selection)}
            <button style={{display:selection=="reviews"?"flex":"none"}} id="content-reviews-button" onClick={()=>{setSelection("influencers")}}>Checkout our video reviews!</button>
        </div>
        
    </div>
}
export default Reviews;