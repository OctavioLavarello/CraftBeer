import { ActionWithPayload } from "./actions/actions";
import {
  getAllBeer,
  orderFiltersReducer,
  productCreated,
  userCreated,
  saveLocalStorageCart,
  login
} from "./reducerFunctions";
import {
  CREATED_PRODUCT,
  ADD_ALL_BEER,
  ORDER_FILTERS,
  CREATED_USER,
  LOCAL_STORAGE,
  LOGIN
} from "../redux/actions/actionsTypes";

/* import { Action } from 'redux';
 */
export interface AppState {
  allBeer: object[];
  beerFilters: BeerFilters;
  localStorageCart:object
}
export interface BeerFilters {
  IBU?: number,  // El signo de interrogación indica que la propiedad es opcional
  AVB?: number,
  name?:String,
  pag?:Number,
  price?: number;
  qualification?:String,
  type?:String,
  order?:String,
}

export const initialState: AppState = {
  allBeer: [],
  beerFilters: {},
  localStorageCart:localStorage
};

const rootReducer = (
  state = initialState,
  action: ActionWithPayload<string, any>
) => {
  switch (action.type) {
    case ADD_ALL_BEER: {
      return getAllBeer(state, action);
    }
    case ORDER_FILTERS: {
      return orderFiltersReducer(state, action);
    }
    case CREATED_PRODUCT: {
      return productCreated(state);
    }
    case CREATED_USER: {
      return userCreated(state)
    };
    case LOCAL_STORAGE: {
      return saveLocalStorageCart(state,action);
    }
    case LOGIN: {
      return login(state, action);
    }
    default:
      return state;
  }
};

export default rootReducer;
