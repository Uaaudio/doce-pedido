
async function ErrorHandler(res,error){
    
    console.log(error.message).toLowerCase();
    return res.status(500)
}


module.export = {ErrorHandler}