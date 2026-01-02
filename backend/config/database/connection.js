const Sequelize = require("sequelize")

const Connection = new Sequelize("doce_pedido","root","root",{
    dialect:"mysql",
    host:"localhost",
    port:"3306"
})

module.exports = Connection