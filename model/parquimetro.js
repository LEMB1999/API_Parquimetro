const {Schema,model} = require("mongoose")

const schema = new Schema({
    
    _id:{
         type:String,
         require:true
    },
    status:{
        type:Boolean,
        default:false 
    }
})

module.exports = model("Parquimetro",schema)