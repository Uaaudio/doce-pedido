
const Category = require("../config/database/models/Category");
const Product = require("../config/database/models/Product")

async function CreateCategory(req, res) {
    const { categoryName, description } = req.body;

    try {
        await Category.create({
            categoryName,
            description,
            
        });

        res.redirect("/category")
        
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Erro ao criar categoria" });
    }
}
async function DeleteCategory(req,res) {
    const id = req.body.id

    Category.destroy({where:{
        id:id
    }}).then(()=>{
        res.redirect("/category")
    }).catch((error)=>{
        console.log("Erro ao deletar tabela.")
    })

}
async function SeeItems(req, res) {
    try {
        const id = req.body.id;

        const allproducts = await Product.findAll({
            where: {
                categoryId: id
            }
        });

        return res.render("SeeProductsPage", { allproducts });

    } catch (error) {
        console.error("Erro ao consultar os produtos:");
        console.error(error);
        return res.status(500).send("Erro ao carregar produtos");
    }
}
async function EditingCategory(req,res){

    const id = req.params.id 
    
    const category = await Category.findByPk(id)
    
    return res.render("EditCategory",{category})

    .catch(()=>{
        console.log("Falha ao alterar nome da Categoria")
        res.redirect("/category")
    })
}







module.exports = { CreateCategory,DeleteCategory,SeeItems,EditingCategory};
