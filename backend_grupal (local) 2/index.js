const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")

const data = require("./test_data") // importamos data de test
const { Carrera, Curso, Ciclo, Evaluacion,Producto } = require("./dao")

const PUERTO = 9999

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended : true
}))
app.use(cors()) // politica CORS (cualquier origen) <---- TODO: cuidado!!!
app.use(express.static("assets")) // <-- configuracion de contenido estatico


//1. Servicio que nos devuelva una lista de carreras
// path: "/carreras" metodo: GET
app.get("/carreras", async (req, resp) => {
    const listaCarreras = await Carrera.findAll()

    resp.send(listaCarreras)
})


//2. Servicio (endpoint) que nos devuelva una lista de cursos
// path: "/cursos" metodo: GET
// query parameter "/cursos?carrera=1"
app.get("/cursos", async (req, resp) => {
    const carreraId = req.query.carrera

    if (carreraId == undefined || carreraId === "-1") {

        const listaCursos = await Curso.findAll()

        resp.send(listaCursos)
    }else {
        const cursosFiltrados = await Curso.findAll({
            where : {
                carrera_id : carreraId
            }
        })
        resp.send(cursosFiltrados)
    }

})

// 3. Endpoint para listar ciclos
app.get("/ciclos", async (req, resp) => {
    const listadoCiclos = await Ciclo.findAll()
    resp.send(listadoCiclos)
})

// 4. Endpoint para listar evaluaciones
// path: "/evaluaciones" metodo: GET
// query parameter "/evaluaciones?curso=12312&ciclo=23523532"
app.get("/evaluacion", async (req, resp) => {
    const cursoId = req.query.curso
    const cicloId = req.query.ciclo

    if (cicloId == undefined || cicloId === "-1"){
        // Caso que no se seleccione ciclo
        const listadoEvaluaciones = await Evaluacion.findAll({
            where : {
                curso_id : cursoId
            }
        })
        resp.send(listadoEvaluaciones)
    }else {
        // Caso que SI se seleccione ciclo
        const listadoEvaluaciones = await Evaluacion.findAll({
            where : {
                curso_id : cursoId,
                ciclo_id : cicloId
            }
        })
        resp.send(listadoEvaluaciones)
    }
})

// 5: Registro de resolucion de evaluacion
// Recibir la data en el Cuerpo peticion HTTP (POST)
// Request:
// {
//      estudiante_id : "22344523532",
//      evaluacion_id : "22344523532",
//      url : "http://blablac.com/archivo.zip",
// }
app.post("/resolucion", (req, resp) => {
    
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

app.listen(PUERTO, () => {
    console.log(`Servidor web iniciado en puerto ${PUERTO}`)
})

