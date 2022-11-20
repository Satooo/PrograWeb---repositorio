const { Sequelize, DataTypes, DATE } = require("sequelize");

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
    Producto, PCArmado,PC_Armado_Producto,Usuario,Orden,Reporte,Resena
}