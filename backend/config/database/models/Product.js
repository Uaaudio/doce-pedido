const Sequelize =  require("sequelize")
const Connection = require("../connection")

// importando minha model de Category
const Category = require("./Category")

const Product = Connection.define("products",{
    productName:{
        type: Sequelize.STRING(255),
        allowNull:false
    },

    productPrice:{
        type: Sequelize.FLOAT(5),
        allowNull:false

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


Category.hasMany(Product)
Product.belongsTo(Category)

//Product.sync({force:true}).then("tabela conectada com sucesso!")


module.exports = Product