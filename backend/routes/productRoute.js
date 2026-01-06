const express = require("express");
const router = express.Router();
const {ManageProduct,CreateProduct,EditingProduct,EditProduct,DeleteProduct} = require("../controllers/productController")

router.get("/",ManageProduct)
router.post("/create", CreateProduct)
router.get("/edit/:id",EditingProduct)
router.post("/update",EditProduct)
router.use("/delete/:id",DeleteProduct)

module.exports = router;