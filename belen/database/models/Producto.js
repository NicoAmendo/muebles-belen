module.exports = function(sequelize, dataTypes){
    let alias = "Product";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true

        }, 
        nombre:{
            type: dataTypes.STRING

        }, 
        materiales:{
            type: dataTypes.STRING
        },
        color:{
            type: dataTypes.STRING
        },
        stock:{
            type: dataTypes.INTEGER

        },   
        medidas: {
            type: dataTypes.INTEGER
        },

        precio:{
            type: dataTypes.DECIMAL
        
        }, 
        descripcion:{
            type: dataTypes.STRING

        }, 
        imagen:{
            type: dataTypes.STRING

        }, 
        id_categoria:{
            type: dataTypes.INTEGER

        }, 
    } 

    let config = {
        tableName: "productos",
        timestamps: false

    }
    let Products = sequelize.define(alias,cols,config);
    
    Products.associate = function(models) {
        
        Products.belongsTo(models.Categoria,{ //de mucho a uno
            as: "categoria",
            foreignKey: "id_categoria"
        });

    }

    return Products;
} 