import { ActionWithPayload, loginAction } from "./actions/actions";
import { initialState } from "./reducer";

export const getAllBeer = (
  state = initialState,
  action: ActionWithPayload<string, any>
) => {
  return {
    ...state,
    allBeer: action.payload.products,
  };
};

//ALMACENAR FILTROS 
export const orderFiltersReducer = (
  state = initialState,
  action: ActionWithPayload<string, any>
) => {
  return {
    ...state,
    beerFilters: action.payload,
  };
};
//CREAR PRODUCTOS 

export const productCreated = (state = initialState) => {
  return {
    ...state,
  };
};


export const postCompany = (state = initialState) => {
  return {
    ...state,
  }
}

export const userCreated = (state = initialState) => {
  return {
    ...state,
  };
};


//ALMACENAR LOCAL STORAGE 
export const saveLocalStorageCart = (
  state = initialState,
  action: ActionWithPayload<string, any>
) => {


  return {
    ...state,
    localStorageCart: action.payload
  }
}
// LOGIN 
export const login = (state = initialState, action: loginAction) => {
  return {
    ...state,
    localStorageCart: action.payload
  }
}
//ALMACENAR numero de paginas para el shop 
export const totalPagesShop = (
  state = initialState,
  action: ActionWithPayload<string, number>
) => {
  return {
    ...state,
    totalPages: action.payload
  }
}
