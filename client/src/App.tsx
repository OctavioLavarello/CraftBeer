/// IMPORTS
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useSelector, useDispatch } from "react-redux";
import { AppState } from "./redux/reducer";
import { useEffect } from "react";
// VIEWS
import Landing from "./views/Landing/Landing";
import Home from "./views/Home/Home";
import Shop from "./views/Shop/Shop";
import Detail from "./views/Detail/Detail";
import User from "./views/User/User";
import Company from "./views/Company/Company";
import ChooseSingUp from "./views/chooseSingUp/ChooseSingUp";
import BuyerSingUp from "./views/buyerSingUp/BuyerSingUp";
import SellerSingUp from "./views/sellerSingUp/SellerSingUp";
import Login from "./views/Login/Login";
import Cart from "./views/Cart/Cart";
import AboutUs from "./views/aboutUs/AboutUs";
import Contact from "./views/Contact/Contact";
import Creation from "./views/Creation/Creation";
import Administrador from "./views/Admin/DashAdmin";
import DetailBuyer from "./views/Admin/DetailBuyer";
import DetailSeller from "./views/Admin/DetailSeller";
// import PayCart from './views/Pay/Pay';
import MyShop from "./views/MyShop/MyShop";
import Error from "./views/Error/Error";
import ProductsBySeller from "./views/Admin/ProductsBySeller"
// COMPONENTS
import NavBar from "./components/navbar/NavBar";
import Footer from "./components/footer/Footer";
import Succes from "./components/Succes/Succes";
// ACTIONS
import { hasNavigatedTrue, verificationLogin } from "./redux/actions/actions";
// STYLES
import "./App.css";
import AdminHistoryShop from "./views/Admin/AdminHistoryShop/adminHistoryShop";
import Pending from "./components/Pending/Pending";
import AdminUserModify from "./views/Admin/AdminUserModify/AdminUserModify";

// APP
function App() {
  // GLOBAL STATE
  const { accessLogin, localStorageCart, hasNavigated } = useSelector(
    (state: AppState) => state
  );
  // LOCAL STORAGE
  const hasNavigatedLocalStorage: any = localStorage.getItem("user");
  const LocalStorageInfo = JSON.parse(hasNavigatedLocalStorage);
  // HANDLERS
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const handlerNavigate = () => {
    if (
      accessLogin.role === "Person" &&
      Object.keys(localStorageCart).length === 0
    ) {
      navigate("/shop");
      dispatch(hasNavigatedTrue());
    } else if (
      accessLogin.role === "Person" &&
      Object.keys(localStorageCart).length > 0
    ) {
      navigate("/cart");
      dispatch(hasNavigatedTrue());
    }
    if (accessLogin.role === "Company") {
      navigate("/home");
      dispatch(hasNavigatedTrue());
    }
    if (accessLogin.role === "Admin") {
      navigate("/admin");
      dispatch(hasNavigatedTrue());
    }
  };
  // USE EFFECTS
  useEffect(() => {
    if (LocalStorageInfo) {
      if (!LocalStorageInfo.hasNavigated && accessLogin.access) {
        handlerNavigate();
      }
    }
    if (!LocalStorageInfo) {
      if (!hasNavigated && accessLogin.access) {
        handlerNavigate();
      }
    }
  }, [accessLogin]);
  useEffect(() => {
    const userJSON = localStorage.getItem("user");
    if (userJSON) {
      const user = JSON.parse(userJSON);
      dispatch(verificationLogin(user));
    }
  }, [dispatch]);
  return (
    <div>
      <div>
        <Toaster />
      </div>
      <div>{location.pathname !== "/" && <NavBar />}</div>
      <div className="App">
        {!accessLogin.access ? (
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/home" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/chooseSignUp" element={<ChooseSingUp />} />
            <Route path="/buyerSignUp" element={<BuyerSingUp />} />
            <Route path="/sellerSignUp" element={<SellerSingUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/aboutUs" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Error />} />
          </Routes>
        ) : accessLogin.role === "Person" ? (
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/home" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/user/:id" element={<User />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/aboutUs" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/myShop" element={<MyShop />} />
            <Route path="/succes" element={<Succes />} />
            <Route path="/pending" element={<Pending/>} />
            <Route path="*" element={<Error />} />
          </Routes>
        ) : (accessLogin.role === "Company" ? (
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/home" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/company/:id" element={<Company />} />
            <Route path="/aboutUs" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/post" element={<Creation />} />
            <Route path="*" element={<Error />} />
          </Routes>
        ) : (accessLogin.role === "Admin" ?
        (
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/home" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/aboutUs" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin" element={<Administrador />} />
            <Route path="/admin/buyer/:id" element={<DetailBuyer />} />
            <Route path="/admin/seller/:id" element={<DetailSeller />} />
            <Route path="/adminHistoryShop" element={<AdminHistoryShop />} />
            <Route path="/admin/seller/products" element={<ProductsBySeller/>} />
            <Route path="/admin/buyer/adminUserModify" element={<AdminUserModify/>} />
            <Route path="*" element={<Error />} />
          </Routes>
        ) : null))}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
