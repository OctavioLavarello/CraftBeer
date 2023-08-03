const {Router} = require('express')
const router = Router();
import postUserPerson from "../controller/postUserPerson"


router.post("/user", postUserPerson)


module.exports = router