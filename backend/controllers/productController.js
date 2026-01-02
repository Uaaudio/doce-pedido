const Product = require("../config/database/models/Product")
const Category =  require("../config/database/models/Category")


async function ManageProduct(req, res) {
    Category.findAll()
    .then((categories)=>{
        res.render("ProductManagePage",{categories})
    })
}

async function CreateProduct(req, res) {
    try {
        const { productName, productPrice, categoryId } = req.body

        if (!productName || !productPrice || !categoryId) {
            return res.redirect("/product")
        }

        await Product.create({
            productName,
            productPrice,
            categoryId
        })

        res.redirect("/product")

    } catch (error) {
        console.error("Erro ao criar produto")
        console.error(error)
        res.redirect("/product")
    }
}

module.exports = { ManageProduct, CreateProduct }
