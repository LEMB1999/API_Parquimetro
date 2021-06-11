
const parquimetro = require("../model/parquimetro")

function updateStatus(req,res){
      parquimetro.findById({_id:req.query.id},{status:1},err =>{
         if(err){
            console.log(err)  
            res.send("no encontrado")
         }else{
            console.log(api)
         }

      }).update({
          status: req.query.status=="1" ? true:false
      })
      res.status(200).send("ok");
}

function checkParquimetro(req,res){ 
     parquimetro.findById({_id:req.query.id},(err,docs)=>{
        if(err)
            res.send("error")
        else{  
            res.send(docs.status == true ?"true":"false")
        }
        console.log(docs)
     })
   
}

function registerParquimetro(req,res){
     new parquimetro({
       _id:req.body.id
     }).save((err)=>{
        if(err)
           console.log(err)
        else
           res.send("parquimetro registrado")
    
     })

}

function deleteParquimetro(req,res){
    parquimetro.deleteOne({_id:req.body.id},(err)=>{
        if(err)
            res.send("erro al borrar")
        else
            res.send("parquimetro eliminado")
    })
}

function getParquimetro(req,res){
    parquimetro.findById(req.query.id,(err,docs)=>{
        if(err)
           console.log("error")
        else
            res.send(docs)
    })
}


module.exports = {
    updateStatus:updateStatus,
    registerParquimetro:registerParquimetro,
    deleteParquimetro:deleteParquimetro,
    checkParquimetro:checkParquimetro,
    getParquimetro:getParquimetro
}