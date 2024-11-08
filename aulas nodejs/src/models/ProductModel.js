const connection=require('../config/database/connection')
const {DataTypes}=require('sequelize')

let ProductModel=connection.define('Products',{
    nome:{
        type:DataTypes.STRING(50),
        allowNull:false
    },
    preco:{
        type:DataTypes.DECIMAL(10,2),
        allowNull:false
    },
    marca:{
        type:DataTypes.STRING(50),
        allowNull:false
    },
    estoque:{
        type:DataTypes.INTEGER(10),
        allowNull:false

    }

})
module.exports=ProductModel