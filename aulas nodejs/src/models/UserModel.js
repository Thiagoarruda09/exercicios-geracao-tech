const connection=require('../config/database/connection')
const {DataTypes}=require('sequelize')

let UserModel=connection.define('Users',{
    FirstName:{
        type:DataTypes.STRING(50),
        allowNull:false
    },
    Surname:{
        type:DataTypes.STRING(50),
        allowNull:false
    },
    Email:{
        type:DataTypes.STRING(50),
        allowNull:false
    },
    Password:{
        type:DataTypes.STRING(50),
        allowNull:false
    }
})

module.exports=UserModel