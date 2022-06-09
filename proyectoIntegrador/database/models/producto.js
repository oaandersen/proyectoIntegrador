module.exports = function (sequelize, dataTypes) {
    
    let alias = "producto";

    let cols = {
        id:{
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },       image:{
            type: dataTypes.STRING
        },
        brand:{
            type: dataTypes.STRING
        },
        model:{
            type: dataTypes.STRING
        },
        variant:{
            type: dataTypes.STRING
        },
        year:{
            type: dataTypes.INTEGER
        },
        description:{
            type: dataTypes.STRING
        },
        upload_date:{
            type: dataTypes.DATE
        }
    }

    let config = {
        tableName: 'producto', 
        timestamps: false, 
        underscored: true, 
    };

    const producto = sequelize.define(alias, cols, config); // definiendo el modelo
    /* producto.associate = function(modelos){
        producto.belongsTo(); // la parte que representa a 1.
        producto.hasMany(); // La parte que representa a muchos.
    }*/
    return producto;
}