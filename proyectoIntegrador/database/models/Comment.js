module.exports = function (sequelize, dataTypes) {
    
    let alias = "Comment";

    let cols = {
        id:{
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        cm_user_id:{
            type:dataTypes.INTEGER
        },
        producto_id:{
            type:dataTypes.INTEGER
        },
        comment:{
            type:dataTypes.STRING
        },
    }
    let config = {
        tableName: 'comments', 
        timestamps: false, 
        underscored: true, 
    };

    const comment = sequelize.define(alias, cols, config); // definiendo el modelo
    comment.associate = function(modelos){
        comment.belongsTo(modelos.producto,{
            as: "commentsProduct",
            foreignKey: "producto_id"
        }); 
    }
    comment.associate = function(modelos){
        comment.belongsTo(modelos.User,{
            as: "commentsUser",
            foreignKey: "cm_user_id"
        }); 
    }
    return comment;
}