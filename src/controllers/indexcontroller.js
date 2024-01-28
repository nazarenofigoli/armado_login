const {validationResult} = require('express-validator')

const indexController={
    index: (req,res)=>{
        res.render('index',{cokie:req.cookies.user})


},

logueado:(req,res)=>{
    const errores = validationResult(req);
    if(errores.isEmpty()){
        req.session.usuario = req.body;
        if(req.body.remember == "true") {
            rememberok = true;
            res.cookie ('user',req.body,{maxAge:1000 * 60 *15});
            res.cookie('rememberMe',"true", {maxAge: 1000 * 60 * 15 });
            
        }
        res.render('logueado', {usuario:req.session.usuario, rememberMe:req.cookies.rememberMe})
    }else{
        res.render('index', {errores:errores.mapped()})
    }
},
olvidarColor: (req,res) => {
    
    usuario = req.cookies.user.nombre;
    color = req.cookies.user.color;
    req.session.destroy();
        if (req.cookies.user) {
        res.clearCookie('user');
        res.clearCookie('rememberMe');
        }
        // res.send ('ok');
        res.render('logout', {usuario, color});

}
};

module.exports=indexController;