/// IMPORTS
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';  
import { Toaster } from 'react-hot-toast'
import { useSelector } from 'react-redux';
import { AppState } from './redux/reducer';
import { useEffect } from 'react';
// VIEWS
import Landing from './views/Landing/Landing';
import Home from './views/Home/Home'
import Shop from './views/Shop/Shop';
import Detail from './views/Detail/Detail';
import User from './views/User/User';
import ChooseSingUp from './views/chooseSingUp/ChooseSingUp';
import BuyerSingUp from './views/buyerSingUp/BuyerSingUp';
import SellerSingUp from './views/sellerSingUp/SellerSingUp';
import Login from "./views/Login/Login";
import Cart from './views/Cart/Cart';
import AboutUs from './views/aboutUs/AboutUs';
import Contact from './views/Contact/Contact';
import Creation from './views/Creation/Creation';
import Pay from './views/Pay/Pay';
// COMPONENTS
import NavBar from "./components/navbar/NavBar"
import Footer from "./components/footer/Footer"
import { verificationLogin } from './redux/actions/actions';
// STYLES
import './App.css';
import SuccessPay from './views/Pay/succesPay';
import { useDispatch } from 'react-redux';

// APP
function App() {
  const dispatch = useDispatch()
  const location = useLocation();
  const hasPermissions = false;
  useEffect(()=>{
    const userJSON = localStorage.getItem("user")   
    if(userJSON){
      const user = JSON.parse(userJSON)
      dispatch(verificationLogin(user))
      console.log(user);
    }
  }, [dispatch])

  const { accessLogin, localStorageCart } = useSelector((state: AppState) => state) 

  console.log(accessLogin)
  const navigate = useNavigate();
  const handlerNavigate = () => {
    if (accessLogin.role === "Person" && Object.keys(localStorageCart).length === 0){
        navigate("/shop")
    } else if (accessLogin.role === "Person" && Object.keys(localStorageCart).length > 0){
        navigate("/cart") 
    }
    if (accessLogin.role === "Company"){
        navigate("/home")
    }
  }
  useEffect(() => {
    handlerNavigate();
  }, [accessLogin, localStorageCart]);
  return (
    <div>
      <div><Toaster/></div>
      <div>
        {
        location.pathname !== "/" && 
        <NavBar/>
        }
      </div>
      <div className="App">
        {!accessLogin.access ? 
        (
        <Routes>
          <Route path='/' element={ <Landing />} />
          <Route path='/home' element={ <Home />} />
          <Route path='/shop' element={ <Shop />} />
          <Route path='/detail/:id' element={ <Detail />} />
          <Route path='/user/:id' element={ <User />} />
          <Route path='/cart' element={ <Cart />} />
          <Route path='/chooseSignUp' element={ <ChooseSingUp />} />
          <Route path='/buyerSignUp' element={ <BuyerSingUp />} />
          <Route path='/sellerSignUp' element={ <SellerSingUp />} />
          <Route path='/login' element={ <Login />} />
          <Route path='/aboutUs' element={ <AboutUs />} />
          <Route path='/contact' element={ <Contact />} />
          <Route path='/post' element={ <Creation />} />
        </Routes>
        ) : (accessLogin.role === "Person" ? 
        (
        <Routes>
          <Route path='/' element={ <Landing />} />
          <Route path='/home' element={ <Home />} />
          <Route path='/shop' element={ <Shop />} />
          <Route path='/detail/:id' element={ <Detail />} />
          <Route path='/user/:id' element={ <User />} />
          <Route path='/cart' element={ <Cart />} />
          <Route path='/aboutUs' element={ <AboutUs />} />
          <Route path='/contact' element={ <Contact />} />
          <Route path='/pay' element={<Pay/>} />
          <Route path='/succes' element={<SuccessPay/>} />
        </Routes>) :
        (
        <Routes>
          <Route path='/' element={ <Landing />} />
          <Route path='/home' element={ <Home />} />
          <Route path='/shop' element={ <Shop />} />
          <Route path='/detail/:id' element={ <Detail />} />
          <Route path='/user/:id' element={ <User />} />
          <Route path='/aboutUs' element={ <AboutUs />} />
          <Route path='/contact' element={ <Contact />} />
          <Route path='/post' element={ <Creation />} />
        </Routes>)
        )
        }
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default App;

