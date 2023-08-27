import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './redux/store';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
// axios.defaults.baseURL = 'http://localhost:3001'
axios.defaults.baseURL = 'https://craftbeer.up.railway.app/'
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
      <BrowserRouter> 
          <App />
      </BrowserRouter>
  </Provider>
);
