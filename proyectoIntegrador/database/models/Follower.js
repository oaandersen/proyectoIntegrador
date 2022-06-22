module.exports = function (sequelize, dataTypes) {
    
    let alias = "Follower";

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
        tableName: 'followers', 
        timestamps: false, 
        underscored: true, 
    };

    const Follower = sequelize.define(alias, cols, config); // definiendo el modelo
    Follower.associate = function(models){
        Follower.belongsToMany(models.Follower, {
        as: "Followers",
        through: "Follower",
        foreignKey: "user_id_followed",
        otherKey: "user_id_follower",
        timestamps: false
        });
    }
    return Follower;
}