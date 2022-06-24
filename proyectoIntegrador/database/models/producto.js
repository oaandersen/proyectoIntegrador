module.exports = function (sequelize, dataTypes) {

    let alias = "Producto";

    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        image: {
            type: dataTypes.STRING
        },
        brand: {
            type: dataTypes.STRING
        },
        model: {
            type: dataTypes.STRING
        },
        variant: {
            type: dataTypes.STRING
        },
        year: {
            type: dataTypes.INTEGER
        },
        description: {
            type: dataTypes.STRING
        },
        upload_date: {
            type: dataTypes.DATE
        }
    }

    let config = {
        tableName: 'producto',
        timestamps: false,
        underscored: true,
    };

    const Producto = sequelize.define(alias, cols, config); // definiendo el modelo
    Producto.associate = function (models) {
        Producto.belongsTo(models.User, {
            as: 'User',
            foreignKey: 'user_id'
        })
    
        Producto.hasMany(models.Comment, {
            as: "Comment",
            foreignKey: "producto_id"
        });
    }
    return Producto;
}