/// IMPORTS
import { Routes, Route } from 'react-router-dom';  
// VIEWS
import Home from './views/Home/Home'
import Landing from './views/Landing/Landing';
import Cart from './views/Cart/Cart';
import User from './views/User/User';
import Shop from './views/Shop/Shop';
import Form from './views/Form/Form';
import Detail from './views/Detail/Detail';
import Creation from './views/Creation/Creation';
import Contact from './views/Contact/Contact';
// COMPONENTS

// STYLES
import './App.css';

// APP
function App() {

  return (
    <div>
      <div>
        {/* condicional con location para renderizar NAVBAR por ruta */}
        {/* const location = useLocation(); */}
        {/* location.pathname !== "/" && <Nav/> */}
      </div>
      <div className="App">
        <Routes>
          <Route path='/' element={ <Landing />} />
          <Route path='/home' element={ <Home />} />
          <Route path='/cart' element={ <Cart />} />
          <Route path='/user/:id' element={ <User />} />
          <Route path='/shop' element={ <Shop />} />
          <Route path='/singUp' element={ <Form />} />
          <Route path='/detail/:id' element={ <Detail />} />
          <Route path='/post' element={ <Creation />} />
          <Route path='/contact' element={ <Contact />} />
          {/* Otras rutas pueden definirse aquí */}
        </Routes>
      </div>
    </div>
  );
};

export default App;
