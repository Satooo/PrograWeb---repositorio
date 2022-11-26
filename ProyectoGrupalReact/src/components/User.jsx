import React from "react";
import { allItems, graphicItems,processorItems, powersupplyItems, coolerItems,
  windowsItems,storageItems, memoryItems,gamingComponents, designComponents,
  codingComponentes, officeComponents, renderingComponents, otherComponents,
  possibleCheckoutItems} from "./models/dataScript";
import { useState } from "react";
import { useEffect } from "react";

const User = () =>{
    const [selected, setSelected] = React.useState(0);
    const [actualizar,setActualizar]=React.useState(false);
    const [name,setName]=useState("");
    const [lastName,setLastName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [address,setAddress]=useState("");
    const [apartment,setApartment]=useState("");
    const [city,setCity]=useState("");
    const [country,setCountry]=useState("");
    const [zip,setZip]=useState("");
    const [phone,setPhone]=useState("");
    const [logOut,setLogOut]=useState(false);
    const user=JSON.parse(localStorage.getItem("user"));
    const usuarioCorreo = localStorage.getItem("Usuario_correo")

    const [listadoProductos,setListadoProductos]=useState([])
    const [Usuario,setUsuario]=useState([])

    const [temp,setTemp]=useState([])

    const httpObtenerProductos2 = async () => {
        const resp = await fetch(`http://localhost:9999/orden?userid=${Usuario.Usuario_id}`)
        const data = await resp.json()
        console.log(data)
    } 

    const httpObtenerProductos = async (userid) => {
        const resp = await fetch(`http://localhost:9999/orden`)
        const data = await resp.json()
        setListadoProductos(data)
        console.log("si hay usuario ")
        const resp2= await fetch(`http://localhost:9999/orden?userid=${userid}`)
        const data2= await resp2.json()
        setTemp(data2)
    }

    const httpObtenerUsuario = async ()=>{
        const resp = await fetch(`http://localhost:9999/usuario?correo=${usuarioCorreo}`)
        const data = await resp.json()
        setUsuario(data[0])
        
    }

    const httpActualizarUsuario = async (user,userid)=>{
        const doc ={
            data:{user},
            userid:userid
          }
          await fetch(`http://localhost:9999/usuario?Opcion=edit&userid=${userid}`,{
            method: 'POST',
            body: JSON.stringify(doc),
            headers: {'Content-Type': 'application/json; charset=UTF-8'}
          }) 
    }

    const httpBorrarProductos = async () =>{
        const doc ={
            delete:true
        }

        const resp = await fetch(`http://localhost:9999/orden?delete=true`,{
            method: 'POST',
            body: JSON.stringify(doc),
            headers: {'Content-Type': 'application/json; charset=UTF-8'}
        })
    }

    const getOrdenProductos =(index)=>{
        return temp[index].Orden_Productos[0].Producto
    }


    useEffect(()=>{
        if(Usuario.Usuario_id==undefined){
            httpObtenerUsuario()
        }
        
        if(Usuario.Usuario_id!=undefined){
            setName(Usuario.Nombre)
            setLastName(Usuario.Apellido)
            setEmail(Usuario.Correo)
            setAddress(Usuario.Direccion)
            setApartment("Apartment 123")
            setCity(Usuario.Ciudad)
            setCountry("Peru")
            setPhone(Usuario.Telefono)
            setZip(Usuario.Codigo_postal)
            httpObtenerProductos(Usuario.Usuario_id)
        }
        //httpObtenerProductos2()
        //httpObtenerProductos()
        
    },[Usuario])

    console.log(Usuario.Nombre)
    console.log(usuarioCorreo)

    if(temp[0]!=undefined){
        console.log(getOrdenProductos(0).Nombre)
        console.log(getOrdenProductos(0).Precio)
    }
    


    const getProductos = ()=>{
        return listadoProductos.map((_,index)=>{
            return listadoProductos[index].Producto})
    }

 
    const profileInfo = () => {
        return <div className="row">
            <div className="col-3">
                <h3>Default</h3>
                <p>Perú</p>
                <div id="content-user-icon"></div>
            </div>
            <div className="col-7">
                <div className="row">
                    <div className="col">
                        First Name
                        <input className="mt-3 mb-3"  value={name}
                onChange={(e) => setName(e.target.value)}/>
                    </div>
                    <div className="col">
                        Last name
                        <input className="mt-3 mb-3"  value={lastName}
                onChange={(e) => setLastName(e.target.value)}/>
                    </div>
                </div>
                <p >Email</p>
                <input style={{width:"100%"}} className="mb-3" value={email}
                onChange={(e) => setEmail(e.target.value)}/>
                <p >Address</p>
                <input style={{width:"100%"}} className="mb-3"  value={address}
                onChange={(e) => setAddress(e.target.value)}/>
                <div className="row">
                    <div className="col" >
                        Apartment, suit,etc
                        <input  className="mt-3 mb-3"  value={apartment}
                onChange={(e) => setApartment(e.target.value)}/>
                    </div>
                    <div className="col">
                        City
                        <input className="mt-3 mb-3"  value={city}
                onChange={(e) => setCity(e.target.value)}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        Country, Region
                        <input  className="mt-3 mb-3"  value={country}
                onChange={(e) => setCountry(e.target.value)}/>
                    </div>
                    <div className="col">
                        Postal code, Zip code
                        <input className="mt-3 mb-3"  value={zip}
                onChange={(e) => setZip(e.target.value)}/>
                    </div>
                </div>
                <p>Phone</p>
                <input style={{width:"100%"}} placeholder={Usuario.Telefono} value={phone}
                onChange={(e) => setPhone(e.target.value)}/>
                <div className="row mt-5">
                    <div className="col"><button id="content-user-profile" onClick={()=>{
                        if (name!="" && lastName!="" && email!=""){
                            const tempUser={};
                            tempUser.Nombre=name;
                            tempUser.Apellido=lastName;
                            tempUser.Correo=email;
                            tempUser.Direccion=address;
                            tempUser.Apartamento="apartment 123"
                            tempUser.Ciudad=city
                            tempUser.Pais="Perú";
                            tempUser.Codigo_postal=zip;
                            tempUser.Telefono=phone;
                            localStorage.setItem("user",JSON.stringify(tempUser));
                            localStorage.setItem("Usuario_correo",email)
                            httpActualizarUsuario(tempUser,Usuario.Usuario_id)
                        }else{
                            alert("At least fill the fullname, email and password");
                        }
                    }}
>Update info</button></div>
                    <div id="cancel-button" className="col"><button>Cancel</button></div>
                </div>
            </div>
        </div>
    }
    const imageLink = (selection)=>{
        switch(selection){
          case "Graficas":
              return  "images/graphic.png";
      
          case "Procesador":
              return "images/processor.png";
      
          case "Memoria":
            return "images/memory.png";
      
          case "Almacenamiento":
            return "images/storage.png";
      
          case "Cooler":
            return "images/cooler.png";
      
          case "Windows":
            return "images/windows.png";
            
          case "Power":
            return "images/power.png";
        }
      }
    const orderHistory=(actualizar)=>{
        //if(localStorage.getItem("orderHistory")!=null ){
        //const history = JSON.parse(localStorage.getItem("orderHistory"));
        //const order=Array(history.length).fill(0).map((_,index)=>{
        //    return<div id="historyCard">
        //    <div className="inline">
        //        <img src={history[index].img}/>
        //        <p style={{width:"100%"}}>{history[index].name}</p>
        //        <p><b>${history[index].price}</b></p>
        //    </div>
        //    </div>
        //});
        if(temp.length>0){
        const order = Array(listadoProductos.length).fill(0).map((_,index)=>{
            return<div id="historyCard">
               <div className="inline">
               <img src={imageLink(getOrdenProductos(index).Categoria)}/>
                <p style={{width:"100%"}}>{getOrdenProductos(index).Nombre}</p>
                <p><b>${getOrdenProductos(index).Precio}</b></p>
            </div>
            </div>
        })
        return <div>
            {order}
        </div>;
        }else{
            return <h1 style={{width:"100%",height:"100%",textAlign:"center"}} className="mt-5"><b>No items have been bought!</b></h1>
        }
    }
    const showContent = (selected)=>{
        switch(selected){
            case 0:
                return profileInfo();
            case 1:
                return orderHistory();
        }
    }
    const deleteHistory = ()=>{
        localStorage.removeItem("orderHistory");
        httpBorrarProductos()
        setActualizar(true);
    }
    return <div className="row" id="content-user">
    <div id="content-buttons" className="col-3">
        <div className="row"><button id="content-user-buttons" className={selected==1?"content-user-button-selected":""} onClick={()=>{setSelected(1)}}>Order history</button></div>
        <div className="row"><button id="content-user-buttons" className={selected==0?"content-user-button-selected":""} onClick={()=>{setSelected(0)}}>Profile info</button></div>
        <a href={logOut==true?"/create-user":""}><div className="row"><button id="content-user-buttons" onClick={()=>{setLogOut(true)}}>Log out</button></div></a>
        <button id="history-clear" style={{display:temp.length>0&&selected==1?"flex":"none"}} onClick={()=>{deleteHistory()}}>Clear history</button>
    </div>
    <div className="col-7" id="content-user-info">
        {showContent(selected)}
    </div>
    
    </div>
}
export default User;