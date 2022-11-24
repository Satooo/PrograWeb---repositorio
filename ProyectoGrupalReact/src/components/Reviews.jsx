import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BeginnerOptions from "./BeginnerOptions";
import Homepage from "./Homepage";
import "./style.css";
import { useState, useEffect } from "react";

const Reviews = () =>{
    const [selection,setSelection]=useState("reviews");
    const [listadoResena,setListadoResena]=useState([])

    const httpObtenerResenas = async () => {
        const resp = await fetch(`http://localhost:9999/resena`)
        const data = await resp.json()
        setListadoResena(data)
      }
    
      
    useEffect(()=>{
        httpObtenerResenas()
    },[])
    const influencers = ()=>{
        return <div>
        <div className="Titulo2">
        <button style={{display:selection=="influencers"?"flex":"none"}} id="content-reviews-button" onClick={()=>{setSelection("reviews")}}>Back</button>
            <h2>Influencers</h2></div>

        <div className="row" >
            <div className="col">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/UhO7MLntkDE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <div style={{width:"86%",paddingTop:"20px",backgroundColor:"#f3e5f5",borderRadius:"20px",marginTop:"20px",marginBottom:"20px"}}>
                <div style={{display:"flex",flexDirection:"row",backgroundColor:"transparent"}}>
                <p style={{color:"#ab47bc",fontSize:"50px",padding:"20px"}}>"</p>
                <p>You basically just pick which games you play, which performance you want, and it'll suggest a rig for you. They make things much, much simpler  and again for only $75 buck? Okay!</p>
                <p style={{color:"#ab47bc",fontSize:"50px",padding:"20px"}}>"</p>
                </div>
            </div>
            </div>
            <div className="col" style={{display:"flex",flexDirection:"column",justifyContent:"center"}}>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/4vpPJb392Vg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> 
            <div style={{width:"86%",paddingTop:"20px",backgroundColor:"#ffebee",borderRadius:"20px",marginTop:"20px",marginBottom:"20px"}}>
                <div style={{display:"flex",flexDirection:"row",backgroundColor:"transparent"}}>
                <p style={{color:"#ef5350",fontSize:"50px",padding:"20px"}}>"</p>
                <p>This computer is absolutely insane! Once again if you want to check out this brand new Redux gaming PC - it's an absolute super computer. Highly, highly recommend it.</p>
                <p style={{color:"#ef5350",fontSize:"50px",padding:"20px"}}>"</p>
                </div>
            </div>
            </div>
            
         </div>
         
        </div>
    }
    const reviewCard = (name,description,puntaje) =>{
        return <div id="content-reviews-card">
            <div style={{display:"flex",flexDirection:"row"}}>
                <h2>{name}</h2>
                {Array(puntaje).fill(0).map((_,index)=>{
                    return <img src="/icons/star-filled.png" style={{width:"30px",height:"30px",filter:"grayscale(100%)"}}/>
                })}
            </div>
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
            <div>{reviewCard("Juan Lopez","I completely recommend this service",5)}
            {reviewCard("Jhon Doe","Great service",5)}
            {reviewCard("Carl Johnson","Pc well built and nice case quality",5)}
            {Array(listadoResena.length).fill(0).map((_,index)=>{
                return reviewCard(`${listadoResena[index].Usuario.Nombre} ${listadoResena[index].Usuario.Apellido}`,listadoResena[index].Comentario,listadoResena[index].Puntaje)
            })}
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