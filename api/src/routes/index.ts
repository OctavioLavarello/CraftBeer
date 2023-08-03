import {Router} from 'express'
import postUserPerson from "../controller/postUserPerson"
import postCompany from "../controller/postCompany";
const router = Router();

//-------- post routes -----//
router.post("/user", postUserPerson)
router.post("/company", postCompany)

// ------- get routes ------- //


// ------- update routes-------//

module.exports = router