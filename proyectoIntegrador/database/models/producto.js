module.exports = function (sequelize, dataTypes) {
    
    let alias = "producto";

    let cols = {
        id:{
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
    }

    let config = {
        tableName: 'producto', 
        timestamps: false, 
        underscored: true, 
    };

    const producto = sequelize.define(alias, cols, config);

    return producto;
}