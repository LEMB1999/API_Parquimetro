const mongoose = require("mongoose")
const dbName = "parquimetro"
const url = `mongodb://localhost/${dbName}`

mongoose.connect(url,{
   useUnifiedTopology:true,
   useNewUrlParser:true
}).then(dn=> console.log("Database is connected"))
  .catch(err => console.log(err))


