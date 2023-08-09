//import { Dispatch, Action } from "redux";
import axios from "axios";
import toast from 'react-hot-toast'
import { Dispatch } from "redux";
import {
  CREATED_PRODUCT,
  ADD_ALL_BEER,
  ORDER_FILTERS,
  CREATED_COMPANY
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

export interface CompanyData {
  name: string,
  lastName: string
  document: number,
  email: string
  password: string
  phone: number,
  country: string
  city: string
  state: string
  company: string
  address: string,
  image: string
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
export const orderFilters = (
  filters: object
): ActionWithPayload<"ORDER_FILTERS", object> => {
  return {
    type: ORDER_FILTERS,
    payload: filters,
  };
};

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
      console.log(createdBeer);
      
      toast.success("Se creo correctamente su producto")
    };
  } catch (error) {
    console.log("Entre al error");
    
   toast.error("No ha sido posible cargar su producto");
  }
  
};

//Actions para crear un usuario de vendedor (postCompany)
export const createdCompany = ({
  name,
  lastName,
  document,
  email,
  password,
  phone,
  country,
  city,
  state,
  company,
  address,
  image,
}: CompanyData) => {
  try {
    return async function (dispatch: any) {
      let companyCreated = await axios.post(`${localhost}/product`, {
        name,
        lastName,
        document,
        email,
        password,
        phone,
        country,
        city,
        state,
        company,
        address,
        image,
      });
      dispatch({
        type: CREATED_COMPANY,
        payload: companyCreated,
      });
      console.log(companyCreated);
      
      toast.success("Se creo correctamente su compañía")
    };
  } catch (error) {
   toast.error("No ha sido posible cargar su compañía");
  }  
};
