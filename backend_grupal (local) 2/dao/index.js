const { Sequelize, DataTypes, DATE, UUID } = require("sequelize");

// postgres://<USUARIO>:<PASSWORD>@<URL_HOST_BD>:<PUERTO_BD>/<NOMBRE_BD>
// postgres://postgres:2k0mYy4d48j1woGURljV@containers-us-west-138.railway.app:8018/railway
//NUESTRO PROYECTO
const CADENA_CONEXION = 
    //"postgresql://postgresql:grupo5@localhost:5432/proyectopw"
    "postgres://postgres:2k0mYy4d48j1woGURljV@containers-us-west-138.railway.app:8018/railway"
    
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

const Usuario = sequelize.define("Usuario",{
    Usuario_id:{
        primaryKey : true,
        type : DataTypes.UUID,
        defaultValue : Sequelize.UUIDV4
    },
    Nombre:{
        type: DataTypes.STRING(),
        allowNull: false
    },
    Apellido:{
        type: DataTypes.STRING(),
        allowNull:false
    },
    Correo:{
        type:DataTypes.STRING(),
        allowNull:false
    },
    Contrasena:{
        type:DataTypes.STRING(),
        allowNull:false
    },
    Direccion:{
        type:DataTypes.STRING(),
        allowNull:false
    },
    Departamento:{
        type:DataTypes.STRING(),
        allowNull:false
    },
    Ciudad:{
        type:DataTypes.STRING(),
        allowNull:false
    },
    Codigo_postal:{
        type:DataTypes.STRING(),
        allowNull:false
    },
    Telefono:{
        type:DataTypes.STRING(),
        allowNull:false
    }
}, {
    timestamps : false,
    freezeTableName : true
})

const Reporte = sequelize.define("Reporte",{
    Reporte_id:{
        primaryKey : true,
        type : DataTypes.UUID,
        defaultValue : Sequelize.UUIDV4
    },
    Usuario_id:{
        type:DataTypes.UUID,
        allowNull:false
    },
    Correo:{
        type: DataTypes.STRING(),
        allowNull: true
    },
    Nombre:{
        type: DataTypes.STRING(),
        allowNull: true
    },
    Telefono:{
        type: DataTypes.STRING(),
        allowNull: true
    },
    Asunto:{
        type: DataTypes.STRING(),
        allowNull: true
    },
    Descripcion:{
        type: DataTypes.STRING(),
        allowNull: true
    }
}, {
    timestamps : false,
    freezeTableName : true
})

const Resena = sequelize.define("Resena",{
    Resena_id:{
        primaryKey:true,
        type:DataTypes.UUID,
        defaultValue : Sequelize.UUIDV4
    },
    Usuario_id:{
        type:DataTypes.UUID,
        allowNull:false
    },
    Puntaje:{
        type:DataTypes.INTEGER,
        allowNull:true
    },
    Comentario:{
        type:DataTypes.STRING(),
        allowNull:true
    },
    Video:{
        type:DataTypes.STRING(),
        allowNull:true
    },
    Link:{
        type:DataTypes.STRING(),
        allowNull:true
    },
    Tpo_resena:{
        type:DataTypes.STRING(),
        allowNull:true
    }
}, {
    timestamps : false,
    freezeTableName : true
})

const Orden = sequelize.define("Orden",{
    Orden_id:{
        primaryKey:true,
        type:DataTypes.UUID,
        defaultValue:Sequelize.UUIDV4
    },
    Usuario_id:{
        type:DataTypes.UUID,
        allowNull:false
    },
    Monto:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    Direccion:{
        type:DataTypes.STRING(),
        allowNull:false
    },
    Fecha:{
        type:DataTypes.DATE,
        allowNull:false
    }
}, {
    timestamps : false,
    freezeTableName : true
})

const Orden_Producto = sequelize.define("Orden_Producto",{
    Orden_Producto_id:{
        primaryKey:true,
        type:DataTypes.UUID,
        allowNull:false
    },
   Orden_id:{
    type:DataTypes.UUID(), // ()?
    allowNull:false
   },
   Producto_id:{
    type:DataTypes.UUID,
    allowNull:false
   }
}, {
    timestamps : false,
    freezeTableName : true
})

Reporte.belongsTo(Usuario, {
    foreignKey: "Usuario_id"
})

Usuario.hasMany(Reporte, {
    foreignKey: "Usuario_id"
})

Resena.belongsTo(Usuario, {
    foreignKey: "Usuario_id"
})
Usuario.hasMany(Resena, {
    foreignKey: "Usuario_id"
})

Orden.belongsTo(Usuario, {
    foreignKey: "Usuario_id"
})
Usuario.hasMany(Orden, {
    foreignKey: "Usuario_id"
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

Orden_Producto.belongsTo(Orden,{
    foreignKey:"Orden_id"
})
Orden.hasMany(Orden_Producto,{
    foreignKey:"Orden_id"
})

Orden_Producto.belongsTo(Producto,{
    foreignKey:"Producto_id"
})
Producto.hasMany(Orden_Producto,{
    foreignKey:"Producto_id"
})

module.exports = {
    Producto, PCArmado,PC_Armado_Producto,Usuario,Orden,Reporte,Resena,Orden_Producto
}