const { where } = require("sequelize")
const User = require("../config/database/models/User")



async function VerifyLogin(req,res){

    const login = req.body.login
    const password = req.body.password

    if (login != undefined){
        try{
            const usuario = await User.findOne({where:{login:login}})
            
            if(password == usuario.password){
                return res.redirect("/category")
            }else{
                return res.redirect("/")
            }

        }catch{
            return res.redirect("/")
        }

    }else{

        return res.redirect("/")

    }

    

}

module.exports = {VerifyLogin}