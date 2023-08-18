import { Router } from "express";
import postUserPerson from "../controller/postUserPerson";
import postCompany from "../controller/postCompany";
import getAllCompanies from '../controller/getAllCompanies';
import postProduct from '../controller/postProduct';
import getProductById from '../controller/getProductById';
import getAllProducts from '../controller/getAllProducts';
import putUserPerson from "../controller/putUserPerson"
import logIn from '../controller/logIn';
import putProduct from '../controller/putProduct';
import putUserCompany from '../controller/putUserCompany';
import getAllUserPersons from '../controller/getAllUserPersons';
import postQualification from "../controller/postQualification"
import {createOrder} from "../controller/payment/create-order"
import postShoppingHistory from '../controller/postShoppingHistory';
import getShoppingHistories from '../controller/getShoppingHistories';
import getPersonById from '../controller/getPersonById';
import postContactMe from "../controller/postContactMe";
import favoriteHandler from "../controller/FavoriteHandler"
import reciveWebHook from "../controller/payment/Webhook";
import getAllFavoritesPerson from "../controller/getAllFavoritesPerson";
import getCompanyById from "../controller/getCompanyById";
import putQualification from "../controller/putQualification";

const router = Router();

//-------- post routes -----//
router.post("/user", postUserPerson);
router.post("/company", postCompany);
router.post("/product", postProduct);
router.post("/qualification", postQualification);
router.post("/shoppingHistory", postShoppingHistory);
router.post("/contactme", postContactMe)
router.post("/favorite", favoriteHandler)


// ------- get routes ------- //
router.get("/companies", getAllCompanies);
router.get("/product/:idProduct", getProductById);
router.get("/product", getAllProducts);
router.get("/login", logIn);
router.get("/persons", getAllUserPersons);
router.get("/shoppingHistories", getShoppingHistories);
router.get("/persons/:idPerson", getPersonById);
router.get("/favorite/:idperson", getAllFavoritesPerson);
router.get("/company/:idCompany", getCompanyById);

// ------- update routes-------//
router.put("/user", putUserPerson);
router.put("/company", putUserCompany);
router.put("/product/:productId", putProduct);
router.put("/qualification", putQualification);


// ------- payment routes ----//

router.post("/create-order", createOrder);
router.post("/webhook", reciveWebHook);


module.exports = router
