module.exports = function (sequelize, dataTypes){
    
    let alias = 'User';

    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        user: {
            type: dataTypes.STRING
        },
        email: {
            type: dataTypes.STRING
        },
        password: {
            type: dataTypes.STRING
        },
        date: {
            type: dataTypes.DATE
        },
        dni: {
            type: dataTypes.INTEGER
        },
        profile_img: {
            type: dataTypes.STRING
        }

    }

    let config = {
        tableName : "user",
        timestamps: false, 
        underscored: true, 
    };

    const user = sequelize.define(alias, cols, config);
    user.associate = function(modelos){
        user.hasMany(models.Comments,{
            as: "commentsUser",
            foreignKey: "user_id"
        }); 
    }
    return user;

}