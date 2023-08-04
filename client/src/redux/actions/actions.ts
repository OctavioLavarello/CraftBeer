//import { Dispatch, Action } from "redux";
import axios from "axios";
import {
  CREATED_PRODUCT,
  ADD_ALL_BEER,
  ORDER_FILTERS,
} from "../actions/actionsTypes";
//interface para las Actions
export interface ActionWithPayload<T, P> {
  type: T;
  payload: P;
}

export interface ProductData {
  name: string;
  type: string;
  degreeOfAlcohol: number;
  description: string;
  price: number;
  stock: number;
  IBU: number;
  presentation: number;
  image: string;
}

const localhost = "http://localhost:3001";

//Actions para recibir todas las cervezas
export const allBeers = () => {
  const endpoint = "http://localhost:3001";
  return async function (dispatch: any) {
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
  degreeOfAlcohol,
  description,
  price,
  image,
  stock,
  IBU,
  presentation
}: ProductData) => {
  try {
    return async function (dispatch: any) {
      let createdBeer = await axios.post(`${localhost}/post`, {
        name,
        image,
        type,
        degreeOfAlcohol,
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
      alert("Producto creado satirfactoriamente");
    };
  } catch (error) {
    alert("No ha sido posible crear su producto");
  }
};
