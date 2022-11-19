const { Sequelize, DataTypes } = require("sequelize");

// postgres://<USUARIO>:<PASSWORD>@<URL_HOST_BD>:<PUERTO_BD>/<NOMBRE_BD>

//NUESTRO PROYECTO
const CADENA_CONEXION = 
    "postgresql://grupo5:postgres@localhost:5432/proyectopw"

const sequelize = new Sequelize(CADENA_CONEXION)


//NUESTRO PROYECTO
const Producto = sequelize.define("Producto",{
    Producto_id : {
        primaryKey : true,
        type : DataTypes.UUID,
        defaultValue : Sequelize.UUIDV4
    },
    Nombre : {
        type : DataTypes.STRING(),
        allowNull : false
    },
    Precio: {
        type: DataTypes.INTEGER,
        allowNull:false
    },
    Descripcion: {
        type: DataTypes.STRING(),
        allowNull: false
    },
    Categoria: {
        type: DataTypes.STRING(),
        allowNull: false
    }
}, {
    timestamps : false,
    freezeTableName : true
})

const PCArmado = sequelize.define("PC_Armado",{
    PC_Armado_id:{
        primaryKey : true,
        type : DataTypes.UUID,
        defaultValue : Sequelize.UUIDV4
    },
    Nombre:{
        type: DataTypes.STRING(),
        allowNull:false
    },
    Descripcion:{
        type:DataTypes.STRING(),
        allowNull:false
    }
}, {
    timestamps : false,
    freezeTableName : true
})

const PC_Armado_Producto = sequelize.define("PC_Armado_Producto",{
    PC_Armado_Producto_id:{
        primaryKey : true,
        type : DataTypes.UUID,
        defaultValue : Sequelize.UUIDV4
    },
    PC_Armado_id:{
        type : DataTypes.UUID,
        allowNull:false
    },
    Producto_id:{
        type : DataTypes.UUID,
        allowNull:false
    }
}, {
    timestamps : false,
    freezeTableName : true
})


const Carrera = sequelize.define("carrera", {
    id : {
        primaryKey : true,
        type : DataTypes.UUID,
        defaultValue : Sequelize.UUIDV4
    },
    nombre : {
        type : DataTypes.STRING(200),
        allowNull : false
    } 
}, {
    timestamps : false,
    freezeTableName : true
})

const Curso = sequelize.define("curso", {
    id : {
        primaryKey : true,
        type : DataTypes.UUID,
        defaultValue : Sequelize.UUIDV4
    },
    nombre : {
        type : DataTypes.STRING(150),
        allowNull : false
    },
    carrera_id : {
        type : DataTypes.UUID,
        allowNull : true
    }
}, {
    timestamps : false,
    freezeTableName : true
})

const Evaluacion = sequelize.define("evaluacion", {
    id : {
        primaryKey : true,
        type : DataTypes.UUID,
        defaultValue : Sequelize.UUIDV4
    },
    nombre : {
        type : DataTypes.STRING(200),
        allowNull : false
    },
    fecha_registro : {
        type : DataTypes.DATE,
        allowNull : true
    },
    curso_id : {
        type : DataTypes.UUID,
        allowNull : false
    },
    ciclo_id : {
        type : DataTypes.UUID,
        allowNull : false
    }
}, {
    timestamps : false,
    freezeTableName : true
})

const Ciclo = sequelize.define("ciclo", {
    id : {
        primaryKey : true,
        type : DataTypes.UUID,
        defaultValue : Sequelize.UUIDV4
    },
    nombre : {
        type : DataTypes.STRING(200),
        allowNull : false
    }
}, {
    timestamps : false,
    freezeTableName : true
})

const Estudiante = sequelize.define("estudiante", {
    id : {
        primaryKey : true,
        type : DataTypes.UUID,
        defaultValue : Sequelize.UUIDV4
    },
    username : {
        type : DataTypes.STRING(20),
        allowNull : false
    },
    password : {
        type : DataTypes.STRING(100),
        allowNull : false
    }
}, {
    timestamps : false,
    freezeTableName : true
})

const Resolucion = sequelize.define("resolucion", {
    id : {
        primaryKey : true,
        type : DataTypes.UUID,
        defaultValue : Sequelize.UUIDV4
    },
    estudiante_id : {
        type : DataTypes.UUID,
        allowNull : false        
    },
    evaluacion_id : {
        type : DataTypes.UUID,
        allowNull : false
    },
    fecha_envio : {
        type : DataTypes.DATE,
        allowNull : false
    },
    upvote : {
        type : DataTypes.INTEGER
    },
    url : {
        type : DataTypes.STRING(2048)
    }
}, {
    timestamps : false,
    freezeTableName : true
})


// Relaciones
// Curso * <----> 1 Carrera
Curso.belongsTo(Carrera, {
    foreignKey : "carrera_id"
})
Carrera.hasMany(Curso, {
    foreignKey : "id"
})

// Evaluacion * <----> 1 Curso
Evaluacion.belongsTo(Curso, {
    foreignKey : "curso_id"
})
Curso.hasMany(Evaluacion, {
    foreignKey : "id"
})

// Evaluacion * <----> 1 Ciclo
Evaluacion.belongsTo(Ciclo, {
    foreignKey : "ciclo_id"
})
Ciclo.hasMany(Evaluacion, {
    foreignKey : "id"
})

// Resolucion * <----> 1 Estudiante
Resolucion.belongsTo(Estudiante, {
    foreignKey : "estudiante_id"
})
Estudiante.hasMany(Resolucion, {
    foreignKey : "id"
})

// Resolucion * <----> 1 Evaluacion
Resolucion.belongsTo(Evaluacion, {
    foreignKey : "evaluacion_id"
})
Evaluacion.hasMany(Resolucion, {
    foreignKey : "id"
})

PC_Armado_Producto.belongsTo(Producto,{
    foreignKey:"Producto_id"
})
Producto.hasMany(PC_Armado_Producto,{
    foreignKey:"Producto_id"
})

PC_Armado_Producto.belongsTo(PCArmado,{
    foreignKey:"PC_Armado_id"
})
PCArmado.hasMany(PC_Armado_Producto,{
    foreignKey:"PC_Armado_id"
})

module.exports = {
    Carrera, Curso, Ciclo, Evaluacion, Estudiante, Resolucion, Producto, PCArmado,PC_Armado_Producto
}