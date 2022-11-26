const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
var crypto = require('crypto')
const data = require("./test_data") // importamos data de test
const { Producto, PCArmado, PC_Armado_Producto,Usuario,Reporte,Resena,Orden, Orden_Producto } = require("./dao")
const { truncate } = require("fs")

const PUERTO = 9999

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended : true
}))
app.use(cors()) // politica CORS (cualquier origen) <---- TODO: cuidado!!!
app.use(express.static("assets")) // <-- configuracion de contenido estatico


//Verificar si existen cuentas con el correo ingresado
app.get("/vercorreo", async(req, resp)=>{
    const correo = req.query.correo;
    const listadoCuentas = await Usuario.findAll({
        where : {
            Correo: correo
        }
    })
    resp.send(listadoCuentas)
})


//Registro
app.post("/registro", async (req, res) => {
    const email = req.body.email
    const usuarioExistente = await Usuario.findAll({
        where : {
            Correo: email
        }
    })
    if (usuarioExistente.length == 0){
        await Usuario.create({
            Usuario_id: crypto.randomUUID(),
            Nombre: req.body.name,
            Apellido: req.body.lastName,
            Correo: email,
            Contrasena: req.body.password,
            Direccion: req.body.address,
            Departamento: req.body.apartment,
            Ciudad: req.body.city,
            Codigo_postal: req.body.zip,
            Telefono: req.body.phone
        });
        res.send({
            verify: true
        })
    } else{
        res.send({
            verify: false
        })
    }
    
})

//Login
app.post("/login", async (req, res) => {
    const email = req.body.email
    const password = req.body.password
    const usuarioRegistrado = await Usuario.findAll({
        where : {
            Correo: email,
            Contrasena: password
        }
    })
    if (usuarioRegistrado.length == 0){
        // No existe usuario
        res.send({
            verify: false
        })
    } else{
        res.send({
            verify: true
        })
    }
    
})

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



app.post("/orden",async(req,resp)=>{

    await Producto.sync()
    await Orden.sync()
    await Orden_Producto.sync()

    const Delete= req.query.delete
    
    if(Delete=="true"){
        await Orden.destroy({
            where:{},
            truncate:true
        })
        await Orden_Producto.destroy({
            where:{},
            truncate:true
        })
    }
    if(Delete==undefined){
    const Productos = req.body.possibleCheckoutItems.list
    const userid=req.body.userid

    console.log("i got a request to post")

    const OrdenId= crypto.randomUUID()
     
    await Orden.create({
        Orden_id: `${OrdenId}`,
        Usuario_id: `${userid}`,
        Monto:"1",
        Direccion:"12",
        Fecha:new Date().toJSON()
    })

    

    for(let i=0;i<Productos.length;i++){
        const temp = await Producto.findOne({
            where:{
                Nombre: Productos[i].name
            }
        })
        await Orden_Producto.create({
            Orden_Producto_id:`${crypto.randomUUID()}`,
            Producto_id:temp.Producto_id,
            Orden_id: `${OrdenId}`
        })
    }
    }
    
    

      resp.end()

})


app.get("/orden",async(req,resp)=>{
    const userid=req.query.userid

    if(userid==undefined || userid==null){
        
        const listadoOrden=await Orden_Producto.findAll({
            include:Producto
        })
        resp.send(listadoOrden)
    }else{
        const listadoOrdenOg=await Orden.findAll({
            where:{
                Usuario_id:userid
            },
            include:{
                model:Orden_Producto,
                include:Producto
            }
        })

        //const listadoOrden=await listadoOrdenOg.findAll({
        //    include:Producto
        //})
        resp.send(listadoOrdenOg)
    }
    

    
})

app.get("/usuario",async(req,resp)=>{
    const Nombre = req.query.nombre
    const Apellido = req.query.apellido
    const Correo=req.query.correo

    if(Nombre==undefined && Apellido==undefined && Correo==undefined){
        console.log("entre")
        const listadoUsuario = await Usuario.findAll({
        })
        resp.send(listadoUsuario)
    }else{
        if(Nombre!=undefined || Apellido!=undefined){
            const listadoUsuarioFilter = await Usuario.findAll({
                where:{
                    Nombre: Nombre,
                    Apellido: Apellido
                }
            })
            resp.send(listadoUsuarioFilter)
        }
        if(Correo!=undefined && Correo!=null){
            const listadoUsuarioFilter = await Usuario.findAll({
                where:{
                    Correo: Correo
                }
            })
            resp.send(listadoUsuarioFilter)
        }

    }
})

app.post("/usuario",async(req,resp)=>{
    const Opcion = req.query.Opcion
    const Usuarioid=crypto.randomUUID()
    if(Opcion=="create"){
        await Usuario.create({
            Usuario_id: `${Usuarioid}`,
            Nombre: "",
            Apellido:"",
            Direccion:"",
            Departamento:"",
            Ciudad:"",
            Codigo_postal:"",
            Telefono:""
        })
    }
    if(Opcion=="edit"){

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
    const Usuarioid=req.query.usuario
    if(Usuarioid!=undefined){
        const listadoResena= await Resena.findAll({
            where:{
                Usuario_id:Usuarioid
            }
        })
        resp.send(listadoResena)
    }else{
        const listadoResena= await Resena.findAll({
            include:Usuario
        })
        resp.send(listadoResena)
    }
})
app.post("/reporte",async(req,resp)=>{
    const reportedata=req.body.list.list
    const usuarioid=req.body.userid
    const reporteid=crypto.randomUUID()
        if(reportedata.length>0){
        await Reporte.create({
            Usuario_id: `${usuarioid}`,
            Reporte_id: `${reporteid}`,
            Correo: `${reportedata[0]}`,
            Nombre: `${reportedata[1]}`,
            Telefono: `${reportedata[2]}`,
            Descripcion: `${reportedata[3]}`,
            Asunto:`${reportedata[4]}`
        })
        }
        resp.end()        
})

app.post("/resena",async(req,resp)=>{
    const resenadata = req.body.list.list
    const userid=req.body.userid

    const resenaid=crypto.randomUUID()
    if(resenadata.length>0){
        await Resena.create({
            Resena_id:`${resenaid}`,
            Usuario_id:`${userid}`,
            Puntaje:`${resenadata[0]}`,
            Comentario: `${resenadata[1]}`,
            Video:`${resenadata[2]}`,
            Link:`${resenadata[3]}`,
            Tpo_resena:`${resenadata[4]}`
        })

    }
    resp.end()
})
app.listen(PUERTO, () => {
    console.log(`Servidor web iniciado en puerto ${PUERTO} `)
})

