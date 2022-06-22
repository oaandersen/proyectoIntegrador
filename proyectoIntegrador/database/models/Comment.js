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

    const Comment = sequelize.define(alias, cols, config); // definiendo el modelo
    Comment.associate = function(modelos){
        Comment.belongsTo(modelos.producto,{
            as: "commentsProduct",
            foreignKey: "producto_id"
        }); 
    }
    Comment.associate = function(modelos){
        Comment.belongsTo(modelos.User,{
            as: "commentsUser",
            foreignKey: "cm_user_id"
        }); 
    }
    return Comment;
}