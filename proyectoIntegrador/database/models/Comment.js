module.exports = function (sequelize, dataTypes) {
    
    let alias = "comment";

    let cols = {
        id:{
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        name:{
            type:dataTypes.STRING
        },
        user_id:{
            type:dataTypes.INTEGER
        },
        producto_id:{
            type:dataTypes.INTEGER
        },
        comment:{
            type:dataTypes.STRING
        },
        profile_img:{
            type:dataTypes.STRING
        },
    }
    let config = {
        tableName: 'comment', 
        timestamps: false, 
        underscored: true, 
    };

    const comment = sequelize.define(alias, cols, config); // definiendo el modelo
    comment.associate = function(modelos){
        comment.belongsTo(models.producto,{
            as: "commentsProduct",
            foreignKey: "producto_id"
        }); 
    }
    comment.associate = function(modelos){
        comment.belongsTo(models.User,{
            as: "commentsUser",
            foreignKey: "user_id"
        }); 
    }
    return comment;
}