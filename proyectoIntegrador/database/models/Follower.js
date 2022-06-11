module.exports = function (sequelize, dataTypes) {
    
    let alias = "follower";

    let cols = {
        id:{
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        user_id_follower:{
            type:dataTypes.INTEGER
        },
        user_id_followed:{
            type:dataTypes.INTEGER
        },
    }
    let config = {
        tableName: 'follower', 
        timestamps: false, 
        underscored: true, 
    };

    const follower = sequelize.define(alias, cols, config); // definiendo el modelo
    /* producto.associate = function(modelos){
        producto.belongsTo(); // la parte que representa a 1.
        producto.hasMany(); // La parte que representa a muchos.
    }*/
    return follower;
}