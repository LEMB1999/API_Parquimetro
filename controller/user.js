const user = require("../model/user")


function realizarCobro(req,res){
     res.send("cobro realizado")
}


//funciona metodo post
function registerUser(req,res){
     new user({
        name: req.body.name,
        password:req.body.password,
        email:req.body.email
     }).save((err)=>{
         if(err)
            console.log(err)
         else
            res.send("registro completado")
     })
}

function deleteUser(req,res){
      //eliminar dado un correo
      user.deleteOne({email:req.body.email},(err)=>{
          if(err)
             console.log("error")
          else   
             res.send("usuario eliminado")
      })
}


function updateUser(req,res){
      //actualizar los campos name , password dado un correo
      user.updateOne({email:req.body.email},{name:req.body.name,password:req.body.password},(err)=>{
        if(err)
           console.log(err)
        else
            res.send("usuario actualizado")   
      })

}

function getUser(req,res){
     //recuperar usuario dado el email
     user.find({email:req.query.email},(err,docs)=>{
         if(err)
            console.log(err)
         else{
            res.send(docs)   
         }
     })
}




module.exports = {
    registerUser:registerUser,
    deleteUser:deleteUser,
    updateUser:updateUser,
    getUser:getUser,
    realizarCobro:realizarCobro
}
