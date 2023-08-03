import {Router} from 'express'
import postUserPerson from "../controller/postUserPerson"
import postCompany from "../controller/postCompany";
import getAllCompanies from '../controller/getAllCompanies';
import postProduct from '../controller/postProduct';
import getCompanys from '../controller/getCompanys';
const router = Router();

//-------- post routes -----//
router.post("/user", postUserPerson);
router.post("/company", postCompany);
router.post("/product", postProduct);

// ------- get routes ------- //
router.get("/companies", getAllCompanies);


// ------- get routes ------- //
router.get("/companys", getCompanys);



// ------- update routes-------//

module.exports = router