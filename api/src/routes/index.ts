import {Router} from 'express'
import postUserPerson from "../controller/postUserPerson"
import postCompany from "../controller/postCompany";
import getCompanys from '../controller/getCompanys';
const router = Router();

//-------- post routes -----//
router.post("/user", postUserPerson);
router.post("/company", postCompany);

// ------- get routes ------- //
router.get("/companys", getCompanys);


// ------- update routes-------//

module.exports = router