import { ActionWithPayload } from "./actions/actions";
import {
  getAllBeer,
  orderFiltersReducer,
  productCreated,
  postCompany,
  userCreated,
  saveLocalStorageCart,
  login,
  totalPagesShop,
  loginVerification,
  logout,
} from "./reducerFunctions";
import {
  CREATED_PRODUCT,
  ADD_ALL_BEER,
  ORDER_FILTERS,
  CREATED_COMPANY,
  CREATED_USER,
  LOCAL_STORAGE,
  LOGIN,
  TOTAL_PAGES,
  LOGIN_VERIFICATION,
  LOGOUT,
} from "../redux/actions/actionsTypes";
import { SaveDataLS } from "../components/LocalStorage/LocalStorage";

/* import { Action } from 'redux';
 */
export interface AccessLogin {
  access: boolean;
  id: string;
  role: string;
  cart?: typeof localStorage;
}
export interface AppState {
  allBeer: object[];
  beerFilters: BeerFilters;
  localStorageCart:SaveDataLS [];
  totalPages:number
  allCompany: object[]
  accessLogin: AccessLogin;
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

//hidratar el estado localStorageCart desde la storage 
const dataStorage = Object.keys(localStorage).map(key => JSON.parse(localStorage[key]));

export const initialState: AppState = {
  allBeer: [],
  beerFilters: {},
  localStorageCart:dataStorage,
  totalPages:0,
  allCompany: [],
  accessLogin: {
    access: false,
    id: "",
    role: "",
    cart: {...localStorage}
  },
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
    case CREATED_COMPANY: {
      return postCompany(state)
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
    case LOGOUT: {
      return logout(state);
    }
    case TOTAL_PAGES: {
      return totalPagesShop (state,action);
    }
    case LOGIN_VERIFICATION: {
      return loginVerification (state, action)
    }
    default:
      return state;
  }
};

export default rootReducer;
