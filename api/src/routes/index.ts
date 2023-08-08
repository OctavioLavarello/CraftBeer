import {Router} from 'express'
import postUserPerson from "../controller/postUserPerson"
import postCompany from "../controller/postCompany";
import getAllCompanies from '../controller/getAllCompanies';
import postProduct from '../controller/postProduct';
import getProductById from '../controller/getProductById';
import getAllProducts from '../controller/getAllProducts';
import putUserPerson from "../controller/putUserPerson"
import logIn from '../controller/logIn';
import putProduct from '../controller/putProduct';

import putUserCompany from '../controller/putUserCompany';

const router = Router();

//-------- post routes -----//
router.post("/user", postUserPerson);
router.post("/company", postCompany);
router.post("/product", postProduct);

// ------- get routes ------- //
router.get("/companies", getAllCompanies);
router.get("/product/:idProduct", getProductById);
router.get("/product", getAllProducts);
router.get("/login", logIn);

// ------- update routes-------//
router.put("/user", putUserPerson);
router.put("/company", putUserCompany);
router.put("/product/:productId", putProduct);

module.exports = router