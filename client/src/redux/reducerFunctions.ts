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

//Crear usuario de compañía
export const postCompany = (state = initialState) => {
  return {
    ...state,
  }
}
//Crear usuario persona
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

  const existingItem = state.localStorageCart.find(item => item.id === action.payload.id);

  if (action.payload.quantity === 0) {
    const updatedCart = state.localStorageCart.filter(item => item.id !== action.payload.id);
    return {
      ...state,
      localStorageCart: updatedCart
    };
  } else if (existingItem) {
    const updatedCart = state.localStorageCart.map(item => {
      if (item.id === action.payload.id) {
        return action.payload;
      } else {
        return item;
      }
    });
    return {
      ...state,
      localStorageCart: updatedCart
    };
  } else {
    return {
      ...state,
      localStorageCart: [...state.localStorageCart, action.payload]
    };
  }

};

// LOGIN 
export const login = (state = initialState, action: loginAction) => {
  const user = localStorage.getItem(action.payload.user.id)
  console.log(user);
  const json = JSON.parse(user)
  console.log(json);
  if(user === null){
    return {
      ...state,
      accessLogin: {
        access: action.payload.access,
        id: action.payload.user.id,
        role: action.payload.user.role
      }
    }
  }else {
    return {
      ...state, 
      accessLogin: {
        access: json.access,
        id: json.user.id,
        role: json.user.role
      }
    }
  }
}
// LOGOUT
export const logout = (state = initialState) => {
  return {
    ...state,
    accessLogin: {
      access: false,
      id: "",
      role: "",
      cart: null,
    }
  }
}
export const loginVerification = (state = initialState, action:loginAction)=> {
  return {
    ...state,
    access: action.payload.access,
    id: action.payload.user.id,
    role: action.payload.user.role
  }
}
//ALMACENAR numero de paginas para el shop 
export const totalPagesShop = (
  state = initialState,
  action: ActionWithPayload<string, number>
)=>{
return{
  ...state,
  totalPages: action.payload
}
}
