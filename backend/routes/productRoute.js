const express = require("express");
const router = express.Router();
const {ManageProduct,CreateProduct,EditingProduct,EditProduct} = require("../controllers/productController")

router.get("/",ManageProduct)
router.post("/create", CreateProduct)
router.get("/edit/:id",EditingProduct)
router.post("/update",EditProduct)

module.exports = router;