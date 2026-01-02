const express = require("express")
const router = express.Router()
const {CreateCategory, DeleteCategory,SeeItems,EditingCategory} = require("../controllers/categoryController")

// Importando model de categoria.
const Category = require("../config/database/models/Category")

router.get("/",async (req,res)=>{
    const categories = await Category.findAll()
    res.render("categoryManagePage",{categories})
})

router.use("/createcategory",CreateCategory)
router.use("/deletecategory",DeleteCategory)
router.use("/seeitems",SeeItems)
router.use("/editcategory/:id",EditingCategory)


module.exports =  router;