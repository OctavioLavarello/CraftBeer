import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducer';

// Combina los middleware que necesites, como redux-thunk
const middleware = [thunkMiddleware];

// Crea el store con la función createStore y los enhancers combinados
export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);
