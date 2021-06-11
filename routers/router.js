const express = require("express")
const router = express.Router()
const user_model = require("../controller/user")
const parquimetro_model = require("../controller/parquimetro")



router.route("/user").get(user_model.getUser)
                     .post(user_model.registerUser)
                     .delete(user_model.deleteUser)
                     
router.get("/cobro",user_model.realizarCobro)


router.route("/parquimetro")
        .get(parquimetro_model.getParquimetro)
        .post(parquimetro_model.registerParquimetro)
        .delete(parquimetro_model.deleteParquimetro)

router.get("/actualizar",parquimetro_model.updateStatus)    
router.get("/checar",parquimetro_model.checkParquimetro)


module.exports = router
