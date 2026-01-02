const Connection = require("../connection")
const Sequelize = require("sequelize")


const User = Connection.define("users",{
    
    name:{
        type: Sequelize.STRING(255),
        allowNull:false
    },
    
    login:{
        type: Sequelize.STRING(255),
        allowNull: false
    },
    password:{
        type: Sequelize.STRING(255),
        allowNull:false
    },
    position:{
        type:Sequelize.STRING(25),
        allowNull:false

    }
})



module.exports = User;