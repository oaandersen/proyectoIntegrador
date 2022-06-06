module.exports = function (sequelize, dataTypes){
    
    let alias = 'User';

    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        created_at : {
            type: dataTypes.DATE,
            allowNull:true,
        },
        updated_at: {
            type: dataTypes.DATE,
            allowNull: true,
        },
        name: {
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
        remember_token: {
            type: dataTypes.STRING
        },
        img: {
            type: dataTypes.STRING
        }

    }

    let config = {
        tableName : "users",
        timestamps:true, 
        underscored: true, 
    };

    const user = sequelize.define(alias, cols, config);

    return user;

}