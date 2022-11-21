const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
var crypto = require('crypto')
const data = require("./test_data") // importamos data de test
const { Producto, PCArmado, PC_Armado_Producto,Usuario,Reporte,Resena,Orden, Orden_Producto } = require("./dao")

const PUERTO = 9999

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended : true
}))
app.use(cors()) // politica CORS (cualquier origen) <---- TODO: cuidado!!!
app.use(express.static("assets")) // <-- configuracion de contenido estatico


//NUESTRO PROYECTO
//Producto
app.get("/producto",async(req,resp)=>{
    const categoria = req.query.categoria
    if(categoria==undefined || categoria== "-1"){
        const listadoProducto = await Producto.findAll()
        resp.send(listadoProducto)
    }else{
        const listadoProducto = await Producto.findAll({
            where:{
                Categoria: categoria
            }
        })
        resp.send(listadoProducto)
    }
    
})

app.get("/armados",async(req,resp)=>{
    const tipoArmado = req.query.tipo
    if(tipoArmado=="coding" || tipoArmado==undefined){
        const listadoArmado = await PC_Armado_Producto.findAll({
            where:{
                PC_Armado_id: "d075a6a4-d609-4215-b6ba-c1d1725fc0e5",
            },
            include: Producto
       })
       resp.send(listadoArmado)
    }
    if(tipoArmado=="gaming"){
        const listadoArmado = await PC_Armado_Producto.findAll({
            where:{
                PC_Armado_id: "d66ba21d-648a-4ad5-97c8-540b0710ecf4",
            },
            include: Producto
       })
       resp.send(listadoArmado)
    }
    if(tipoArmado=="office"){
        const listadoArmado = await PC_Armado_Producto.findAll({
            where:{
                PC_Armado_id: "dad561a4-e921-4976-b0eb-b06e23c6b2fd",
            },
            include: Producto
       })
       resp.send(listadoArmado)
    }
    if(tipoArmado=="other"){
        const listadoArmado = await PC_Armado_Producto.findAll({
            where:{
                PC_Armado_id: "09df901a-6712-4d3e-b3df-5c419bc8acfe",
            },
            include: Producto
       })
       resp.send(listadoArmado)
    }
    if(tipoArmado=="design"){
        const listadoArmado = await PC_Armado_Producto.findAll({
            where:{
                PC_Armado_id: "0efc9437-81d4-45a8-a30e-efaaf8daeaeb",
            },
            include: Producto
       })
       resp.send(listadoArmado)
    }
    if(tipoArmado=="rendering"){
        const listadoArmado = await PC_Armado_Producto.findAll({
            where:{
                PC_Armado_id: "61ebe896-0aa4-43f1-b967-44fd57dcdf24",
            },
            include: Producto
       })
       resp.send(listadoArmado)
    }
   

})

app.get("/usuario",async(req,resp)=>{
    const Nombre = req.query.nombre
    const Apellido = req.query.apellido
    if(Nombre==undefined || Apellido==undefined){
        const listadoUsuario =await Usuario.findAll()
        resp.send(listadoUsuario)
    }else{
        const listadoUsuario =await Usuario.findAll({
            where:{
                Nombre:Nombre,
                Apellido:Apellido
            }
        })
        resp.send(listadoUsuario)
    }
})

app.post("/orden",async(req,resp)=>{

    await Producto.sync()
    await Orden.sync()
    await Orden_Producto.sync()


    console.log("i got a request to post")

    const OrdenId= crypto.randomUUID()

    await Orden.create({
        Orden_id: `${OrdenId}`,
        Usuario_id: "d32b2dc0-1407-4e1b-91e7-ec12e1b12526",
        Monto:"1",
        Direccion:"12",
        Fecha:new Date().toJSON()
    })

    await Orden_Producto.create({
        Orden_Producto_id:`${crypto.randomUUID()}`,
        Producto_id:"b8a32b12-f57d-4913-a908-a34626a01fb9",
        Orden_id: `${OrdenId}`
    })
    

      resp.end()

})


app.get("/orden",async(req,resp)=>{
    const listadoOrden=await Orden_Producto.findAll({
        include:Producto
    })

    resp.send(listadoOrden)
})

app.get("/usuario",async(req,resp)=>{
    const Nombre = req.query.nombre
    const Apellido = req.query.apellido

    if(Nombre!=undefined && Apellido!=undefined){
        const listadoUsuario = await Usuario.findAll({
            where:{
                Nombre: Nombre,
                Apellido: Apellido
            }
        })
        resp.send(listadoUsuario)
    }
})

app.get("/reporte",async(req,resp)=>{
    const Correo = req.query.correo
    if(Correo!=undefined){
        const listadoReporte = await Reporte.findAll({
            where:{
                Correo:Correo
            }
        })
        resp.send(listadoReporte)
    }else{
        const listadoReporte = await Reporte.findAll({

        })
        resp.send(listadoReporte)
    }
})

app.get("/resena",async(req,resp)=>{
    const Usuarioid=req.query.Usuario
    if(Usuarioid!=undefined){
        const listadoResena= await Resena.findAll({
            where:{
                Usuario_id:Usuarioid
            }
        })
        resp.send(listadoResena)
    }else{
        const listadoResena= await Resena.findAll({

        })
        resp.send(listadoResena)
    }
})

app.listen(PUERTO, () => {
    console.log(`Servidor web iniciado en puerto ${PUERTO} `)
})

