const Sequelize = require("sequelize")
const Connection = require("../connection")


const Category = Connection.define("categories",{
    categoryName:{
        type: Sequelize.STRING(255),
        allowNull: false
    },

    description:{
        type: Sequelize.TEXT(),
        allowNull: true
    },
    createdAt:{
    type: Sequelize.DATE,
    allowNull: false,
    defaultValue: Sequelize.NOW
    },

    updatedAt:{
    type: Sequelize.DATE,
    allowNull: false,
    defaultValue: Sequelize.NOW
    }
    

    
})


module.exports = Category;