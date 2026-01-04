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

        return res.redirect("/product")

    } catch (error) {
        console.error("Erro ao criar produto")
        console.error(error)
        res.redirect("/product")
    }
}


async function EditingProduct(req,res){

    const id = req.params.id

    const product =  await Product.findByPk(id)

    return res.render("EditProduct",{product})

    .catch((error)=>{
        console.log("Erro ao acessar a pagina de edição dos produtos")
        console.log(error)
    })



}

async function EditProduct(req,res){

    let name = req.body.productName
    let price = req.body.productPrice
    const id = req.body.productId

    productIdentify = await Product.findByPk(id)

    if ( name == undefined || name == ""){
        name = productIdentify.productName
    }
    if (price == undefined || price == ""){
        price = productIdentify.productPrice
    }
    
     await Product.update(
            { productName: name, productPrice: price }, // valores a atualizar
            { where: { id: id } }                       // condição
        )
    
    .then((product)=>{
        console.log("Produto editado com sucesso")
        return res.redirect("/category")
    
    }).catch((error)=>{
       
        console.log("Erro ao Editar produto")
        console.log(error)
    })
    

}


module.exports = { ManageProduct, CreateProduct , EditingProduct,EditProduct}
