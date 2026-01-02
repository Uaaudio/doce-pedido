const express = require("express")
const router = express.Router()

const {VerifyLogin} = require("../controllers/loginController")

router.get("/",(req,res)=>{
    res.render("loginPage")
})

router.use("/login",VerifyLogin)


module.exports = router