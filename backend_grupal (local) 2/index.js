const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")

const data = require("./test_data") // importamos data de test
const { Producto, PCArmado, PC_Armado_Producto,Usuario,Reporte,Resena,Orden } = require("./dao")

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

app.listen(PUERTO, () => {
    console.log(`Servidor web iniciado en puerto ${PUERTO}`)
})

