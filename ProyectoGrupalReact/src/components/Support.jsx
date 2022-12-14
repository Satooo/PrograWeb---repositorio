import { BrowserRouter,Route,Routes } from "react-router-dom";
import React, { useState } from "react";
import { useEffect } from "react";
import { RUTA_BACKEND } from "../conf";

const Support = ()=>{
    const [selection,setSelection]=useState("hub");
    const [subselection,setSubselection]=useState(0);
    const options = () =>{
        return<div id="content-support">

            <h1>Support hub</h1>
            <div className="row" id="content-support-hub">
                <div className="col"><button id="content-support-hub-button" onClick={()=>{setSelection("guides")}}>
                    <img src="./icons/guide.png"/>
                    Guides
                    </button></div>
                <div className="col"><button id="content-support-hub-button" onClick={()=>{setSelection("faq")}}>
                <img src="./icons/faq.png"/>
                    FAQ
                    </button></div>
                <div className="col"><button id="content-support-hub-button" onClick={()=>{setSelection("submit")}}>
                <img src="./icons/submit.png"/>
                    Submit ticket
                    </button></div>
            </div>
        </div>
    }
    const guides = () =>{
        return<div id="content-support">

            <h1>Support guides</h1>
            <div className="col mt-5" id="content-support-guide-col">
                <div className="row" id="content-support-guide-row"><button onClick={()=>{subselection==1?setSubselection(0):setSubselection(1)}}> &#128187; Buid Redux Quick Start Guide</button></div>
                <div className="row"  id="content-support-guide-row-1" style={{display:subselection==1?"flex":"none"}}>
                Ofrecemos reembolso y/o cambio dentro de los primeros 30 días de tu compra.
                Si han transcurrido 30 días desde tu compra, no se te ofrecerá un reembolso
                y/o cambio de ningún tipo.
                </div>
                <div className="row" id="content-support-guide-row"><button onClick={()=>{subselection==2?setSubselection(0):setSubselection(2)}}>&#9881; System overview</button></div>
                <div className="row"  id="content-support-guide-row-1" style={{display:subselection==2?"flex":"none"}}>
                Nuestro negocio funciona sobre la base de citas. Cuando cancelan una cita, 
                exigimos que todos los clientes lo informen con MÁS de 24 horas de anticipación al horario programado. 
                De lo contrario, les cobraremos la sesión completa.
                </div>
                <div className="row" id="content-support-guide-row"> <button onClick={()=>{subselection==3?setSubselection(0):setSubselection(3)}}> &#128187; Troubleshooting - Display</button></div>
                <div className="row"  id="content-support-guide-row-1" style={{display:subselection==3?"flex":"none"}}>
                La empresa garantiza a sus clientes el servicio de reparación sin costo por 
                repuesto ni mano de obra, por un periodo de doce (12) meses los cuales inician 
                a partir de la fecha de entrega a satisfacción del cliente.
                </div>
                <div className="row" id="content-support-guide-row"><button onClick={()=>{subselection==4?setSubselection(0):setSubselection(4)}}>&#128257; Resetting guide - Memory</button></div>
                <div className="row"  id="content-support-guide-row-1" style={{display:subselection==4?"flex":"none"}}>
                Le informamos que aceptamos las siguientes dos formas de pago: pagar con tarjeta de crédito / tarjeta de débito (VISA, Mastercard, Maestro y American Express) y pago con Paypal.
                </div>
                <div className="row" id="content-support-guide-row"><button onClick={()=>{subselection==5?setSubselection(0):setSubselection(5)}}>&#128257; Resetting guide - Graphics card</button></div>
                <div className="row"  id="content-support-guide-row-1" style={{display:subselection==5?"flex":"none"}}>
                Normalmente tomará 1-3 días hábiles para preparar los artículos. Después de que se envíe el pedido, el envío demora otros días.
                </div>
                <div className="row" id="content-support-guide-row"><button onClick={()=>{subselection==6?setSubselection(0):setSubselection(6)}}>&#128208; Realignment Guide - Rear I/O</button></div>
                <div className="row"  id="content-support-guide-row-1" style={{display:subselection==6?"flex":"none"}}>
                Lo sentimos, pero no realizamos envíos a destinos internacionales para pedidos realizados en línea.
                Los clientes fuera de Perú que deseen comprar productos o piezas de Sentry deberán comunicarse con nosotros directamente o buscar un representante.
                </div>
            </div>
        </div>
    }
    const faq =() =>{
        return<div id="content-support">

            <h1>Common questions</h1>
            <div className="col mt-5" id="content-support-guide-col">
                <div className="row" id="content-support-guide-row"><button onClick={()=>{subselection==1?setSubselection(0):setSubselection(1)}}>&#128203; Refund Policy</button></div>
                <div className="row"  id="content-support-guide-row-1" style={{display:subselection==1?"flex":"none"}}>
                Ofrecemos reembolso y/o cambio dentro de los primeros 30 días de tu compra.
                Si han transcurrido 30 días desde tu compra, no se te ofrecerá un reembolso
                y/o cambio de ningún tipo.
                </div>
                <div className="row" id="content-support-guide-row"><button onClick={()=>{subselection==2?setSubselection(0):setSubselection(2)}}>&#128683; Cancellation Policy</button></div>
                <div className="row"  id="content-support-guide-row-1" style={{display:subselection==2?"flex":"none"}}>
                Nuestro negocio funciona sobre la base de citas. Cuando cancelan una cita, 
                exigimos que todos los clientes lo informen con MÁS de 24 horas de anticipación al horario programado. 
                De lo contrario, les cobraremos la sesión completa.
                </div>
                <div className="row" id="content-support-guide-row"> <button onClick={()=>{subselection==3?setSubselection(0):setSubselection(3)}}>&#128737; Warranty Services</button></div>
                <div className="row"  id="content-support-guide-row-1" style={{display:subselection==3?"flex":"none"}}>
                La empresa garantiza a sus clientes el servicio de reparación sin costo por 
                repuesto ni mano de obra, por un periodo de doce (12) meses los cuales inician 
                a partir de la fecha de entrega a satisfacción del cliente.
                </div>
                <div className="row" id="content-support-guide-row"><button onClick={()=>{subselection==4?setSubselection(0):setSubselection(4)}}>&#128181; Financing</button></div>
                <div className="row"  id="content-support-guide-row-1" style={{display:subselection==4?"flex":"none"}}>
                Le informamos que aceptamos las siguientes dos formas de pago: pagar con tarjeta de crédito / tarjeta de débito (VISA, Mastercard, Maestro y American Express) y pago con Paypal.
                </div>
                <div className="row" id="content-support-guide-row"><button onClick={()=>{subselection==5?setSubselection(0):setSubselection(5)}}>&#128230; How long will it take for my PC to arrive</button></div>
                <div className="row"  id="content-support-guide-row-1" style={{display:subselection==5?"flex":"none"}}>
                Normalmente tomará 1-3 días hábiles para preparar los artículos. Después de que se envíe el pedido, el envío demora otros días.
                </div>
                <div className="row" id="content-support-guide-row"><button onClick={()=>{subselection==6?setSubselection(0):setSubselection(6)}}>&#127758; Do you ship internationally?</button></div>
                <div className="row"  id="content-support-guide-row-1" style={{display:subselection==6?"flex":"none"}}>
                Lo sentimos, pero no realizamos envíos a destinos internacionales para pedidos realizados en línea.
                Los clientes fuera de Perú que deseen comprar productos o piezas de Sentry deberán comunicarse con nosotros directamente o buscar un representante.
                </div>
                <div className="row" id="content-support-guide-row"><button onClick={()=>{subselection==7?setSubselection(0):setSubselection(7)}}>&#128421; Do you setup and install Windows, drivers,etc?</button></div>
                <div className="row"  id="content-support-guide-row-1" style={{display:subselection==7?"flex":"none"}}>
                pequeño archivo presente en cada componente, accesorio y hardware tu ordenador. Su función es la de hacer de 'enlace' entre el sistema operativo que tienes instalado y el hardware o los periféricos instalados, tanto los internos como los externos
                </div>
            </div>
        </div>
    }

const [Correo,setCorreo]=useState("")
const [Nombre,setNombre]=useState("")
const [Asunto,setAsunto]=useState("")
const [Descripcion,setDescripcion]=useState("")
const [Telefono,setTelefono]=useState("")
const [Enviar,setEnviar]=useState(false)
const [ListaReporte,setListaReporte]=useState([])
const [listadoReportes,setListadoReportes]=useState([])
const usuarioCorreo = localStorage.getItem("Usuario_correo")
const [Usuario,setUsuario]=useState([])
let tempReporte=[]

    const httpEnviarReporte = async (list,userid) => {
      const doc ={
        list:{list},
        userid:userid
      }
      //await fetch(`http://localhost:9999/reporte`,{
        await fetch(`${RUTA_BACKEND}reporte`,{ 
        method: 'POST',
        body: JSON.stringify(doc),
        headers: {'Content-Type': 'application/json; charset=UTF-8'}
      })
    }

    const httpObtenerUsuario = async ()=>{
        //const resp = await fetch(`http://localhost:9999/usuario?correo=${usuarioCorreo}`)
        const resp = await fetch(`${RUTA_BACKEND}usuario?correo=${usuarioCorreo}`)
        const data = await resp.json()
        setUsuario(data[0])
    }
    const httpObtenerReportes = async ()=>{
        //const resp = await fetch(`http://localhost:9999/usuario?correo=${usuarioCorreo}`)
        const resp = await fetch(`${RUTA_BACKEND}reporte`)
        const data = await resp.json()
        setListadoReportes(data)
    }

    useEffect(()=>{
      
        httpObtenerUsuario()
        httpObtenerReportes()
        httpEnviarReporte(ListaReporte,Usuario.Usuario_id)
        

        
      
      
    },[ListaReporte])

    const submit =() =>{
        return<div id="content-support">
            <div><h1>Submit request</h1>
            <button onClick={()=>{setSelection("quejas")}} style={{color:"purple",backgroundColor:"white",padding:"10px",borderRadius:"15px",marginTop:"20px"}} id="supportforum"><b>Support forum </b></button>
            </div>
            
            <div id="content-support-submit" className="mt-5">
                <p>Email</p>
                <input placeholder={Usuario.Correo} value={ Correo }
                            onChange={ (evt) => {
                                setCorreo(evt.target.value)}} disabled="disabled"/>
                <p>Name</p>
                <input placeholder={Usuario.Nombre} value={ Nombre }
                            onChange={ (evt) => {
                                setNombre(evt.target.value)}} disabled="disabled"/>
                <p>Phone</p>
                <input  placeholder={Usuario.Telefono} value={ Telefono }
                            onChange={ (evt) => {
                                setTelefono(evt.target.value)}} disabled="disabled"/>
                <p>Subject</p>
                <input value={ Asunto }
                            onChange={ (evt) => {
                                setAsunto(evt.target.value)}}/>
                <p>Description</p>
                
                <textarea value= { Descripcion}
                            onChange={ (evt) => {
                                setDescripcion(evt.target.value)}} class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                <p></p>
                <button onClick={()=>{
                    
                    
                    httpObtenerUsuario()
                    setListaReporte([Usuario.Correo, Usuario.Nombre, Usuario.Telefono, Descripcion, Asunto])
                    alert("Se envio el request!")
                }}>Submit </button>
    
            </div>
        </div>
    
    }
    const quejas = ()=>{
        if(listadoReportes.length>0){
            return <div id="content-support">
                <div>
                    <button onClick={()=>{setSelection("submit")}} style={{color:"white"}}>Back</button>
                    <h1>Support forum</h1>
                </div>
            <div style={{width:"80%",marginRight:"auto",marginLeft:"auto",marginTop:"50px"}}>
            {Array(listadoReportes.length).fill(0).map((_,index)=>{
                return <div style={{backgroundColor:"white",marginBottom:"20px",borderRadius:"15px",color:"black",padding:"20px"}}>
                    <p style={{color:"gray"}}><i>{listadoReportes[index].Correo}</i></p>
                    <p><b>Usuario  </b>
                    {listadoReportes[index].Nombre}</p>
                    <p><b>Asunto</b></p>
                    <p>{listadoReportes[index].Asunto}</p>
                    <p><b>Descripcion</b></p>
                    <p>{listadoReportes[index].Descripcion}</p>
                </div>
            })}
            <p id="space-forum">.</p>
            </div>
            </div>
        }else{
            return <div id="content-support">
                <div>
                <button onClick={()=>{setSelection("submit")}} style={{color:"white"}}>Back</button>
                <h1>Support forum</h1>
                </div>
            <div style={{width:"80%",marginRight:"auto",marginLeft:"auto",marginTop:"50px"}}>
                <h2>No hay reportes aún.. </h2>
            </div>
            </div>
        }
        
    }

    const content = (selection) =>{
        switch(selection){
            case "hub":
                return options();
            case "guides":
                return guides();
            case "faq":
                return faq();
            case "submit":
                return submit();
            case "quejas":
                return quejas();
        }
    }

    return content(selection);
}
export default Support