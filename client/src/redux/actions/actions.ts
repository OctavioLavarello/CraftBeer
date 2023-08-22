//import { Dispatch, Action } from "redux";
import axios from "axios";
import toast from "react-hot-toast";
import { AnyAction, Dispatch } from "redux";
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
  URL_IMAGE,
  HAS_NAVIGATED,
  DELETE_CARTSTORAGE,
  ID_BUYER,
  ID_SELLER,
  COMPANY_SALES_SUMMARY,
  COMPANY_SALES_DETAIL,
} from "../actions/actionsTypes";
import { saveUserData } from "../../components/LocalStorage/LocalStorage";
import { salesDetail, salesSum } from "../reducer";

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
  userCompanyId: any;
}

export interface CompanyData {
  id?: string;
  name: string;
  lastName: string;
  document: number;
  email: string;
  password: string;
  phone: number;
  country: string;
  city: string;
  state: string;
  company: string;
  address: string;
  image: string;
}

//Actions para recibir todas las cervezas
export const allBeers = () => {
  const endpoint = "/product";
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

//actions para guardar el localStorage
export const localStorageCart = (data: object) => {
  return {
    type: LOCAL_STORAGE,
    payload: data,
  };
};

//actions para guardar el localStorage
export const totalPages = (data: number) => {
  return {
    type: TOTAL_PAGES,
    payload: data,
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
  presentation,
  userCompanyId,
}: ProductData) => {
  return async function (dispatch: any) {
    try {
      let createdBeer = await axios.post(`/product`, {
        name,
        image,
        type,
        ABV,
        description,
        price,
        stock,
        IBU,
        presentation,
        userCompanyId,
      });
      dispatch({
        type: CREATED_PRODUCT,
        payload: createdBeer,
      });
      console.log(createdBeer);
      toast.success("Se creo correctamente su producto");
      setTimeout(() => {
        window.location.href = "/home";
      }, 2000);
    } catch (error: any) {
      if (error.response.data.message === undefined)
        toast.error(
          `No ha sido posible cargar su compañía\n\n${error.response.data}`
        );
      else {
        toast.error(
          `No ha sido posible cargar su compañía\n\n${error.response.data.message}`
        );
      }
      console.log(error.response.data);
    }
  };
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
  return async function (dispatch: AnyAction | any) {
    try {
      let companyCreated = await axios.post(`/company`, {
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

      toast.success("Se creo correctamente su compañía");
      setTimeout(()=>{
        window.location.href = "/login"
      }, 2000)
    } catch (error: any) {
      if (error.response.data.message === undefined)
        toast.error(
          `No ha sido posible cargar su compañía\n\n${error.response.data}`
        );
      else {
        toast.error(
          `No ha sido posible cargar su compañía\n\n${error.response.data.message}`
        );
      }
      console.log(error.response.data);
    }
  };
};

export interface UserData {
  name: string;
  id?: string;
  lastName: string;
  document: number;
  email: string;
  password: string;
  address: string;
  image: string;
  country: string;
  city: string;
}
//action crear user comprador
export const createdUser = (userData: UserData) => {
  return async (dispatch: Dispatch<any>) => {
    try {
      let createdUserResponse = await axios.post("/user", userData);
      dispatch({
        type: CREATED_USER,
        payload: createdUserResponse.data,
      });
      toast.success("Usuario creado exitosamente")
      setTimeout(()=>{
        window.location.href = "/login"
      }, 2000)
    } catch (error) {
      toast.error("Error al crear usuario");
    }
  };
};

/// LOGIN ____________________________________________________________________________________________

export interface loginAction {
  type: string;
  payload: loginPayload;
}
export interface loginUserData {
  email: string;
  password: string;
}
export interface loginPayload {
  access: boolean;
  user: loginUser;
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
  company?: string;
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
    const endpoint = "/login";
    return async function (dispatch: Dispatch<loginAction>) {
      const url = `${endpoint}?email=${loginUserData.email}&password=${loginUserData.password}`;
      const { data } = await axios.get(url);
      saveUserData(data);
      dispatch({
        type: LOGIN,
        payload: data,
      });
      toast.success("Login successful");
    };
  } catch (error) {
    toast.error("Login Error");
  }
};
// LOGIN ACTION
export const logout = () => {
  return {
    type: LOGOUT,
  };
};

export const verificationLogin = (user: any) => {
  return {
    type: LOGIN_VERIFICATION,
    payload: user,
  };
};
//Action para cargar imagen en cloudinary
export const uploadImage = (url: any) => {
  return {
    type: URL_IMAGE,
    payload: url
  }
}

export const hasNavigatedTrue = () => {
  return {
    type: HAS_NAVIGATED
  }
}
//Delete cart 
export const deleteCartStorage =()=>{
  return {
    type: DELETE_CARTSTORAGE
  }
}
//Action para guardar el id del comprador en el estado global
export const idBuyer = (id:string)=> {
  return {
    type: ID_BUYER,
    payload: id 
  }
}
//Action para guardar el id de vendedor en estado global
export const idSeller = (id:string)=> {
  return {
    type: ID_SELLER,
    payload: id 
  }
}

// SALES SUMMARY
export interface salesSumAction {
  type: string;
  payload: salesSum[];
}
export const userCompanySalesSummary = (id: string) => {
  const endpoint = "/usercompanysalessummary/";
  return async function (dispatch: Dispatch<salesSumAction>) {
    const { data } = await axios.get(`${endpoint}${id}`);
    return dispatch({
      type: COMPANY_SALES_SUMMARY,
      payload: data,
    });
  };
}
// SALES DETAIL
export interface salesDetailAction {
  type: string;
  payload: salesDetail[];
}
export const userCompanySalesDetail = (id: string) => {
  const endpoint = "/usercompanysales/";
  return async function (dispatch: Dispatch<salesDetailAction>) {
    const { data } = await axios.get(`${endpoint}${id}`);
    return dispatch({
      type: COMPANY_SALES_DETAIL,
      payload: data,
    });
  };
}

