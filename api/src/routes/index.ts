import { Router } from "express";
import postUserPerson from "../controller/postUserPerson";
import postCompany from "../controller/postCompany";
import getAllCompanies from '../controller/getAllCompanies';
import postProduct from '../controller/postProduct';
import getProductById from '../controller/getProductById';
import getAllProducts from '../controller/getAllProducts';
import putUserPerson from "../controller/putUserPerson"
import putProduct from '../controller/putProduct';
import putUserCompany from '../controller/putUserCompany';
import getAllUserPersons from '../controller/getAllUserPersons';
import postQualification from "../controller/postQualification"
import {createOrder} from "../controller/payment/create-order"
import postShoppingHistory from '../controller/postShoppingHistory';
import getShoppingHistories from '../controller/getShoppingHistories';
import getPersonById from '../controller/getPersonById';
import postContactMe from "../controller/notifications/postContactMe";
import favoriteHandler from "../controller/FavoriteHandler"
import reciveWebHook from "../controller/payment/Webhook";
import getAllFavoritesPerson from "../controller/getAllFavoritesPerson";
import getUserCompanySalesDetail from "../controller/getUserCompanySalesDetail"
import getCompanyById from "../controller/getCompanyById";
import getUserCompanySalesSummary from "../controller/getUserCompanySalesSummary"
import putQualification from "../controller/putQualification";
import getPersonAdmin from "../controller/getPersonAdmin";
import getCompanyAdmin from "../controller/getCompanyAdmin";
import getProductAdmin from "../controller/getProductAdmin";
import getTopRated from "../controller/getTopRated"
import checkEmail from "../controller/checkEmail";

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

router.get("/persons", getAllUserPersons);
router.get("/shoppingHistories", getShoppingHistories);
router.get("/persons/:idPerson", getPersonById);
router.get("/favorite/:idperson", getAllFavoritesPerson);
router.get("/usercompanysales/:userCompanyId",getUserCompanySalesDetail);
router.get("/company/:idCompany", getCompanyById);
router.get("/usercompanysalessummary/:userCompanyId", getUserCompanySalesSummary);
router.get("/persons/admin/:idPerson", getPersonAdmin);
router.get("/company/admin/:idCompany", getCompanyAdmin);
router.get("/product/admin/:idProduct", getProductAdmin);
router.get("/toprated", getTopRated)
router.get("/check", checkEmail)

// ------- update routes-------//
router.put("/user", putUserPerson);
router.put("/company", putUserCompany);
router.put("/product/:productId", putProduct);
router.put("/qualification", putQualification);


// ------- payment routes ----//

router.post("/create-order", createOrder);
router.post("/webhook", reciveWebHook);


module.exports = router
