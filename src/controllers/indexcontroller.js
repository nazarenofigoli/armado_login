const {validationResult} = require('express-validator')

const indexController={
    index: (req,res)=>{
        res.render('index',{})


},

logueado:(req,res)=>{
    const errores = validationResult(req);
    if(errores.isEmpty()){
        res.render('logueado', {usuario:req.body})
    }else{
        res.render('index', {errores:errores.mapped()})
    }
}
};

module.exports=indexController;