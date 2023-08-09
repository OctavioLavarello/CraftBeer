//import { Dispatch, Action } from "redux";
import axios from "axios";
import toast from 'react-hot-toast'
import { Dispatch } from "redux";
import {
  CREATED_PRODUCT,
  ADD_ALL_BEER,
  ORDER_FILTERS,
  CREATED_USER,
  LOCAL_STORAGE,
  LOGIN
} from "../actions/actionsTypes";
//interface para las Actions
export interface ActionWithPayload<T, P> {
  type: T;
  payload: P;
}

export interface ProductData {
  name: string;
  type: string;
  ABV: number;
  description: string;
  price: number;
  stock: number;
  IBU: number;
  presentation: string;
  image: string;
}

const localhost = "http://localhost:3001";

//Actions para recibir todas las cervezas
export const allBeers = () => {
  const endpoint = "http://localhost:3001/product";
  return async function (dispatch: Dispatch<any>) {
    const response = await axios.get(endpoint);
    return dispatch({
      type: ADD_ALL_BEER,
      payload: response.data,
    });
  };
};

//Actions para recibir filtros por orden
export const orderFilters = (filters: object): ActionWithPayload<"ORDER_FILTERS", object> => {
  return {
    type: ORDER_FILTERS,
    payload: filters,
  };
};


//actions para guardar el localStorage 

export const localStorageCart = (data:object)=>{
  return {
    type: LOCAL_STORAGE,
    payload:data
  }
}


//Actions para crear un producto (cerveza)
export const createdProduct = ({
  name,
  type,
  ABV,
  description,
  price,
  image,
  stock,
  IBU,
  presentation
}: ProductData) => {
  try {
    return async function (dispatch: any) {
      let createdBeer = await axios.post(`${localhost}/product`, {
        name,
        image,
        type,
        ABV,
        description,
        price,
        stock,
        IBU,
        presentation,
      });
      dispatch({
        type: CREATED_PRODUCT,
        payload: createdBeer,
      });
      toast.success("Se creo correctamente su producto")
    };
  } catch (error) {
   toast.error("No ha sido posible cargar su producto");
  }
};


export interface UserData {
  id: string;
  name: string;
  lastName: string;
  document: string;
  email: string;
  password: string;
  address: string;
  image: string;
}
//action crear user comprador
export const createdUser = (userData: UserData) => {
  try {
    return async function (dispatch: Dispatch<any>) {
      let createdUser = await axios.post(`${localhost}/user`, userData);
      dispatch({
        type: CREATED_USER,
        payload: createdUser,
      });
      toast.success("Usuario creado exitosamente");
    };
  } catch (error) {
    toast.error("Error al crear usuario");
  }
};
 
/// LOGIN ____________________________________________________________________________________________

export interface loginAction {
  type: string;
  payload: loginPayload;
}
export interface loginUserData {
  email: string,
  password: string,
}
export interface loginPayload {
  access: boolean,
  user: loginUser
}
export interface loginUser {
  id: string;
  name: string;
  lastName: string;
  document: number;
  email: string;
  password: string;
  phone?: number;
  status: boolean;
  country: string;
  city: string;
  state: string;
  address: string;
  image?: Text;
  company?: string
  role: UserRole;
}
enum UserRole {
  Company = "Company",
  Person = "Person",
  Administrator = "Administrator",
}
// LOGIN ACTION
export const login = (loginUserData: loginUserData) => {
  try {
    const endpoint = "http://localhost:3001/login";
    return async function (dispatch: Dispatch<loginAction>) {
      const url = `${endpoint}?email=${loginUserData.email}&password=${loginUserData.password}`
      const { data } = await axios.get(url);
      return dispatch ({
        type: LOGIN,
        payload: data,
      });
    }
  } catch (error) {
    toast.error("Login Error")
  }
}