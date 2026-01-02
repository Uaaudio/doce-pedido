const express = require("express");
const router = express.Router();
const {ManageProduct,CreateProduct} = require("../controllers/productController")

router.get("/",ManageProduct)

router.post("/create", CreateProduct)


module.exports = router;